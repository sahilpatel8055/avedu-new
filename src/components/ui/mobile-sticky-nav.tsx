import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu } from "lucide-react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm",
      "block md:hidden", // Only show on mobile
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center gap-2">
            <Menu className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-900">Quick Navigation</span>
          </div>
          
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
              <span className="max-w-32 truncate">
                {sections.find(s => s.id === activeSection)?.label || "Select Section"}
              </span>
              <ChevronDown className={cn(
                "w-4 h-4 transition-transform",
                isMenuOpen && "rotate-180"
              )} />
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-10">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors",
                      activeSection === section.id && "bg-primary/10 text-primary font-medium"
                    )}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileStickyNav;