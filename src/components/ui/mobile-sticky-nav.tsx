import { useState, useEffect, useRef } from "react";
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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll navigation to show active section
  const scrollToActiveSection = () => {
    if (!scrollContainerRef.current) return;
    
    const activeIndex = sections.findIndex(section => section.id === activeSection);
    if (activeIndex === -1) return;

    const container = scrollContainerRef.current;
    const activeButton = container.children[0]?.children[activeIndex] as HTMLElement;
    
    if (activeButton) {
      const containerWidth = container.offsetWidth;
      const buttonLeft = activeButton.offsetLeft;
      const buttonWidth = activeButton.offsetWidth;
      const scrollLeft = container.scrollLeft;

      // Calculate if button is visible
      const buttonRight = buttonLeft + buttonWidth;
      const visibleLeft = scrollLeft;
      const visibleRight = scrollLeft + containerWidth;

      if (buttonLeft < visibleLeft || buttonRight > visibleRight) {
        // Center the active button
        const targetScrollLeft = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
        container.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: "smooth"
        });
      }
    }
  };

  // Check scroll position and update scroll indicators
  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
  };

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

  // Auto-scroll when active section changes
  useEffect(() => {
    scrollToActiveSection();
  }, [activeSection]);

  // Check scroll position on mount and when container changes
  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

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

  const scrollNavigation = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of visible width
    
    container.scrollTo({
      left: container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount),
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div className={cn(
      "fixed bottom-4 left-4 right-4 z-50",
      "block md:hidden", // Only show on mobile
      className
    )}>
      <div className="bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-gray-200 overflow-hidden">
        <div className="relative flex items-center">
          {/* Left scroll arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scrollNavigation('left')}
              className="absolute left-2 z-20 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
          )}

          {/* Scrollable navigation container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide px-12"
          >
            <div className="flex items-center min-w-max py-3">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "relative px-4 py-2 mx-1 text-sm font-medium transition-all duration-300 whitespace-nowrap rounded-full",
                    "transform-gpu", // Enable hardware acceleration
                    activeSection === section.id
                      ? "text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg scale-110 -translate-y-1"
                      : "text-gray-600 hover:text-orange-500 hover:bg-orange-50 hover:scale-105"
                  )}
                  style={{
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <span className="relative z-10">{section.label}</span>
                  {activeSection === section.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-pulse opacity-20" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right scroll arrow */}
          {canScrollRight && (
            <button
              onClick={() => scrollNavigation('right')}
              className="absolute right-2 z-20 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default MobileStickyNav;