import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import banner1 from "@/assets/slideshow/banner-1.jpg";
import banner2 from "@/assets/slideshow/banner-2.jpg";

const UniversitySlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { image: banner1, alt: "Academic Excellence Banner" },
    { image: banner2, alt: "Specialized Programs Banner" },
    // Placeholder for third slide - user will add later
  ];

  // Filter out placeholder slides
  const validSlides = slides.filter(slide => slide.image !== undefined);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % validSlides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [validSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + validSlides.length) % validSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % validSlides.length);
  };

  if (validSlides.length === 0) return null;

  return (
    <div className="relative w-full h-48 sm:h-56 lg:h-64 mb-6 sm:mb-8 overflow-hidden rounded-lg bg-gradient-primary">
      {/* Slides */}
      <div className="relative w-full h-full">
        {validSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {validSlides.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="sm"
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 text-foreground"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {validSlides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {validSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UniversitySlideshow;