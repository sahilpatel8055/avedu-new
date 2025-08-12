import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
}

interface MobileStickyNavProps {
  sections: NavItem[];
  className?: string;
}

const MobileStickyNav = ({ sections, className }: MobileStickyNavProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Get the first section to determine when to show nav
      const firstSection = document.getElementById(sections[0]?.id);
      if (firstSection) {
        const rect = firstSection.getBoundingClientRect();
        // Show nav when first section is scrolled past
        setIsVisible(rect.bottom < 100);
      }

      // Find active section
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for nav height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100",
      "block md:hidden", // Only show on mobile
      className
    )}>
      <div className="relative">
        {/* Scrollable navigation container */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex items-center min-w-max px-4 py-3">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap",
                  "border-b-2 border-transparent",
                  activeSection === section.id
                    ? "text-orange-600 border-orange-500 bg-orange-50"
                    : "text-gray-600 hover:text-orange-500 hover:bg-orange-50/50",
                  index !== sections.length - 1 && "mr-1"
                )}
              >
                <span className="relative z-10">{section.label}</span>
                {activeSection === section.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-50 rounded-t-md -z-0" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Gradient fade indicators for scrollable content */}
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
export default MobileStickyNav;