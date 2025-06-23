
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Using your uploaded images
  const heroImages = [
    "/lovable-uploads/028acff6-84b7-448a-be26-7887fbee9497.png",
    "/lovable-uploads/4fdca408-24b8-4ef7-9838-b2698afb6fd3.png",
    "/lovable-uploads/f2376d1c-9a64-4d79-8aca-db6041a7acdf.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Fxentso and Fater photo ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Stronger overlay for better text legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-4xl animate-fade-in">
          {/* Royal Crown */}
          <div className="flex justify-center mb-6">
            <Crown className="text-yellow-400" size={48} />
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-white to-teal-300 bg-clip-text text-transparent">
            Fxentso & Fater
          </h1>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent flex-1 max-w-32"></div>
            <Heart className="text-teal-300" size={24} />
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent flex-1 max-w-32"></div>
          </div>
          
          <p className="text-xl md:text-2xl mb-2 font-light">
            A Royal Affair
          </p>
          <p className="text-lg md:text-xl mb-8 text-teal-200">
            Two hearts, one crown, forever bound
          </p>
          
          <div className="text-lg md:text-xl mb-8">
            <p className="mb-2">📅 Saturday, August 16th, 2025</p>
            <p>📍 Makurdi, Nigeria</p>
          </div>

          <Button 
            size="lg" 
            className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Join Our Celebration
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-white scale-125" 
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
