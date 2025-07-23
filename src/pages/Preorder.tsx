import { useState } from "react";
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface MerchItem {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const Preorder = () => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const { toast } = useToast();

  const merchItems: MerchItem[] = [
    {
      id: "guidetryb-cap",
      name: "Guidetryb Cap",
      price: 3000,
      image: "/lovable-uploads/7f3c8e1c-848b-4876-ac71-1cef4ce1d3ac.png",
      description: "Premium black cap with embroidered Guidetryb logo. Perfect for mentorship enthusiasts.",
      category: "Accessories"
    },
    {
      id: "abba-tshirt-1",
      name: "ABBA's Dwelling T-Shirt",
      price: 6000,
      image: "/lovable-uploads/159a962c-e62a-4f81-932d-b2333963a264.png",
      description: "Comfortable white cotton t-shirt featuring the ABBA's Dwelling logo. Spread faith in style.",
      category: "Apparel"
    },
    {
      id: "abba-tshirt-2",
      name: "ABBA's Dwelling T-Shirt (Premium)",
      price: 6000,
      image: "/lovable-uploads/874a64c0-57f1-4603-8332-00001c5d04ba.png",
      description: "Premium white cotton t-shirt with high-quality ABBA's Dwelling branding.",
      category: "Apparel"
    }
  ];

  const addToCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
    toast({
      title: "Added to cart!",
      description: "Item has been added to your preorder cart.",
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = merchItems.find(m => m.id === itemId);
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const handlePreorder = () => {
    if (getTotalItems() === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before preordering.",
        variant: "destructive"
      });
      return;
    }

    // Initialize Paystack payment
    const handler = (window as any).PaystackPop.setup({
      key: 'pk_test_fc67eb0140afbf9895a101e51876ef27436f9311',
      email: 'customer@email.com', // This should be collected from user
      amount: getTotalPrice() * 100, // Paystack expects amount in kobo
      currency: 'NGN',
      ref: 'WED_' + Math.floor((Math.random() * 1000000000) + 1),
      metadata: {
        custom_fields: [
          {
            display_name: "Items",
            variable_name: "items",
            value: Object.entries(cart).map(([itemId, quantity]) => {
              const product = merchItems.find(p => p.id === itemId);
              return `${product?.name} x ${quantity}`;
            }).join(', ')
          }
        ]
      },
      callback: function(response: any) {
        toast({
          title: "Payment successful!",
          description: `Your preorder has been confirmed. Reference: ${response.reference}`,
        });
        // Clear cart after successful payment
        setCart({});
      },
      onClose: function() {
        toast({
          title: "Payment cancelled",
          description: "You can continue shopping and try again.",
        });
      }
    });

    handler.openIframe();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => window.location.href = '/'}
                className="flex items-center space-x-2"
              >
                <ArrowLeft size={20} />
                <span>Back to Wedding</span>
              </Button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-800">Wedding Merchandise</h1>
            </div>
            
            {getTotalItems() > 0 && (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full">
                  <ShoppingCart size={20} className="text-purple-600" />
                  <span className="font-semibold text-purple-800">
                    {getTotalItems()} items - ₦{getTotalPrice().toLocaleString()}
                  </span>
                </div>
                <Button onClick={handlePreorder} className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                  Preorder Now
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Wedding Day Merchandise
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1 max-w-32"></div>
              <Star className="text-purple-500" size={24} />
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1 max-w-32"></div>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Celebrate with us and support our ventures! Preorder exclusive merchandise from 
              Guidetryb and ABBA's Dwelling to be delivered on our wedding day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Available for pickup on August 16th, 2025
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                Limited Wedding Edition
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {merchItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge variant="secondary" className="mb-2">
                      {item.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-purple-600">
                      ₦{item.price.toLocaleString()}
                    </span>
                    {cart[item.id] && (
                      <div className="flex items-center space-x-2 bg-purple-100 px-3 py-1 rounded-full">
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-purple-600 hover:text-purple-800 font-bold w-6 h-6 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="font-semibold text-purple-800 min-w-[20px] text-center">
                          {cart[item.id]}
                        </span>
                        <button 
                          onClick={() => addToCart(item.id)}
                          className="text-purple-600 hover:text-purple-800 font-bold w-6 h-6 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    onClick={() => addToCart(item.id)}
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
                  >
                    <ShoppingCart className="mr-2" size={16} />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {getTotalItems() === 0 && (
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-r from-purple-50 via-white to-teal-50 border-none shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8">
                <ShoppingCart className="mx-auto mb-4 text-purple-500" size={48} />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Preorder?</h3>
                <p className="text-gray-600 mb-6">
                  Select your favorite items above and support our ventures while celebrating our special day!
                </p>
                <p className="text-sm text-gray-500">
                  All items will be available for pickup at our wedding reception on August 16th, 2025.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Fxentso & Fater Wedding. All merchandise proceeds support our ventures.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Preorder;