
import { useState } from "react";
import { ExternalLink, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavigationItem {
  label: string;
  id?: string;
  url?: string;
}

interface NavigationProps {
  onNavigate: (item: NavigationItem) => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems: NavigationItem[] = [
    { label: "Home", id: "hero" },
    { label: "Our Story", id: "story" },
    { label: "Wedding Party", id: "party" },
    { label: "Gallery", id: "gallery" },
    { label: "RSVP", id: "rsvp" },
    { label: "Guidetryb", url: "https://guidetryb.com/" },
    { label: "Abba's Dwelling", url: "https://abbasdwelling.com/" }
  ];

  const handleNavigation = (item: NavigationItem) => {
    onNavigate(item);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-teal-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/854e4e21-3cd0-4bb5-8d77-be18fd390b65.png" 
              alt="F&F Wedding Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navigationItems.map((item) => (
              <button 
                key={item.label}
                onClick={() => handleNavigation(item)} 
                className="text-gray-700 hover:text-teal-600 transition-colors flex items-center space-x-1"
              >
                <span>{item.label}</span>
                {item.url && <ExternalLink size={14} />}
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
                  <div className="flex items-center justify-center mb-2">
                    <img 
                      src="/lovable-uploads/854e4e21-3cd0-4bb5-8d77-be18fd390b65.png" 
                      alt="F&F Wedding Logo" 
                      className="h-10 w-auto"
                    />
                  </div>
                  <p className="text-gray-600 text-sm">A Royal Affair</p>
                </div>
                <div className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <button 
                      key={item.label}
                      onClick={() => handleNavigation(item)} 
                      className="text-left text-gray-700 hover:text-teal-600 transition-colors py-2 px-4 rounded-lg hover:bg-teal-50 flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      {item.url && <ExternalLink size={14} />}
                    </button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
