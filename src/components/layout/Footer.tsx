
import { Heart, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  onAdminClick: () => void;
}

const Footer = ({ onAdminClick }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center mb-4">
          <img 
            src="/lovable-uploads/1c6db4fe-7884-4140-a5e9-1d870cd20db2.png" 
            alt="F&F Wedding Logo" 
            className="h-16 w-auto"
          />
        </div>
        <p className="text-gray-400">Fxentso & Fater • A Royal Affair</p>
        <p className="text-gray-500 mt-2">Made with love for our special day</p>
        
        {/* Admin Login Button */}
        <div className="mt-6">
          <Button
            onClick={onAdminClick}
            variant="ghost"
            size="sm"
            className="text-gray-500 hover:text-gray-300 flex items-center space-x-2 mx-auto"
          >
            <Settings className="w-4 h-4" />
            <span>Admin</span>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
