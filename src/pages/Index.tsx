
import { useState, useEffect } from "react";
import { ChevronDown, Heart, Camera, Upload, ExternalLink, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import HeroSection from "@/components/wedding/HeroSection";
import OurStory from "@/components/wedding/OurStory";
import WeddingParty from "@/components/wedding/WeddingParty";
import Testimonials from "@/components/wedding/Testimonials";
import PhotoGallery from "@/components/wedding/PhotoGallery";
import BusinessSection from "@/components/wedding/BusinessSection";
import PhotoUpload from "@/components/wedding/PhotoUpload";
import CountdownTimer from "@/components/wedding/CountdownTimer";
import RSVP from "@/components/wedding/RSVP";

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { label: "Home", id: "hero" },
    { label: "Our Story", id: "story" },
    { label: "Wedding Party", id: "party" },
    { label: "Gallery", id: "gallery" },
    { label: "RSVP", id: "rsvp" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-teal-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-teal-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-teal-600 font-playfair">Fx & F</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navigationItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className="text-gray-700 hover:text-teal-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Navigation */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-white/95 backdrop-blur-md">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600 mb-2 font-playfair">Fx & F</div>
                    <p className="text-gray-600 text-sm">A Royal Affair</p>
                  </div>
                  <div className="flex flex-col space-y-4">
                    {navigationItems.map((item) => (
                      <button 
                        key={item.id}
                        onClick={() => scrollToSection(item.id)} 
                        className="text-left text-gray-700 hover:text-teal-600 transition-colors py-2 px-4 rounded-lg hover:bg-teal-50"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Countdown Timer */}
      <section className="py-12 bg-gradient-to-r from-teal-600 to-teal-700">
        <CountdownTimer />
      </section>

      {/* Our Story */}
      <section id="story" className="py-16">
        <OurStory />
      </section>

      {/* Wedding Party */}
      <section id="party" className="py-16 bg-gradient-to-b from-teal-50 to-white">
        <WeddingParty />
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <Testimonials />
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-16 bg-gradient-to-b from-white to-teal-50">
        <PhotoGallery />
      </section>

      {/* Business Section */}
      <section className="py-16">
        <BusinessSection />
      </section>

      {/* Photo Upload */}
      <section className="py-16 bg-gradient-to-b from-teal-50 to-white">
        <PhotoUpload />
      </section>

      {/* RSVP */}
      <section id="rsvp" className="py-16 bg-gradient-to-r from-teal-600 to-teal-700">
        <RSVP />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Heart className="text-teal-400" size={24} />
            <span className="text-2xl font-bold">Fx & F</span>
            <Heart className="text-teal-400" size={24} />
          </div>
          <p className="text-gray-400">Fater & Fxentso • A Royal Affair</p>
          <p className="text-gray-500 mt-2">Made with love for our special day</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
