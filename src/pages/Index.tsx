
import { useState, useEffect } from "react";
import { ChevronDown, Heart, Camera, Upload, ExternalLink, Menu, X, Settings } from "lucide-react";
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
import AdminLogin from "@/components/admin/AdminLogin";
import AdminDashboard from "@/components/admin/AdminDashboard";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const Index = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (item: any) => {
    if (item.url) {
      window.open(item.url, '_blank');
    } else {
      scrollToSection(item.id);
    }
  };

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
    setShowAdminLogin(false);
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
  };

  // If admin is logged in, show admin dashboard
  if (isAdminLoggedIn) {
    return <AdminDashboard onLogout={handleAdminLogout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-teal-50 to-white">
      {/* Navigation */}
      <Navigation onNavigate={handleNavigation} />

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
      <Footer onAdminClick={() => setShowAdminLogin(true)} />

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <AdminLogin
          onLogin={handleAdminLogin}
          onClose={() => setShowAdminLogin(false)}
        />
      )}
    </div>
  );
};

export default Index;
