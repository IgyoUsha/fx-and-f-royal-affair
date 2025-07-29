import { useState, useEffect } from "react";
import { X, ShoppingBag, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface MerchandisePopupProps {
  onClose: () => void;
}

const MerchandisePopup = ({ onClose }: MerchandisePopupProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate in
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleShopNow = () => {
    window.location.href = '/preorder';
  };

  return (
    <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Card className={`max-w-md w-full transform transition-all duration-300 ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>
        <CardContent className="p-6 relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X size={16} />
          </Button>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-purple-100 to-teal-100 p-3 rounded-full">
                <Gift className="text-purple-600" size={32} />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Wedding Merchandise
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Support our ventures with exclusive merchandise from Guidetryb and ABBA's Dwelling! 
              Get premium t-shirts and accessories available for pickup on our wedding day.
            </p>

            <div className="flex space-x-2 mb-4">
              <img 
                src="/lovable-uploads/7f3c8e1c-848b-4876-ac71-1cef4ce1d3ac.png" 
                alt="Merchandise preview"
                className="w-16 h-16 object-cover rounded-lg"
              />
              <img 
                src="/lovable-uploads/159a962c-e62a-4f81-932d-b2333963a264.png" 
                alt="Merchandise preview"
                className="w-16 h-16 object-cover rounded-lg"
              />
              <img 
                src="/lovable-uploads/190b46a0-effc-49fb-95a0-fdb17b0170a2.png" 
                alt="Merchandise preview"
                className="w-16 h-16 object-cover rounded-lg"
              />
            </div>

            <div className="flex space-x-3">
              <Button 
                onClick={handleShopNow}
                className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
              >
                <ShoppingBag className="mr-2" size={16} />
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                onClick={handleClose}
                className="flex-1"
              >
                Maybe Later
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MerchandisePopup;