
import { Crown, Heart, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const WeddingParty = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; name: string; role: string } | null>(null);

  const groomsmen = [
    { name: "Isaac", role: "Best Man", isBest: true, photo: "/lovable-uploads/7fa15cc7-24ac-4f56-a49b-0a417c0d9c37.png" },
    { name: "Martin-Luther", role: "Groomsman", photo: "/lovable-uploads/1c7244ae-3421-43bc-837c-12c0e23298fb.png" },
    { name: "Joshua", role: "Groomsman" },
    { name: "Ife", role: "Groomsman", photo: "/lovable-uploads/757c749b-45a3-4df4-89d1-ed0ba210fee6.png" },
    { name: "Usha", role: "Groomsman" },
    { name: "JM", role: "Groomsman" }
  ];

  const bridesmaids = [
    { name: "Setemi", role: "Chief Bridesmaid", isBest: true, photo: "/lovable-uploads/10076756-5061-45ad-9b1c-ed93a8233296.png" },
    { name: "Iwuese", role: "Bridesmaid", photo: "/lovable-uploads/e95a4b9e-e23d-4fcd-a783-f16f0eb1da9a.png" },
    { name: "Kwaghdoobee", role: "Bridesmaid", photo: "/lovable-uploads/3302a681-d4c1-4da1-a4f3-513267a3377e.png" },
    { name: "Christabel", role: "Bridesmaid" },
    { name: "Gracious", role: "Bridesmaid" },
    { name: "Michelle", role: "Bridesmaid" }
  ];

  const openPhotoModal = (person: { name: string; role: string; photo?: string }) => {
    if (person.photo) {
      setSelectedPhoto({
        src: person.photo,
        name: person.name,
        role: person.role
      });
    }
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Royal Court
        </h2>
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent flex-1 max-w-32"></div>
          <Crown className="text-yellow-500" size={24} />
          <div className="h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent flex-1 max-w-32"></div>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Meet the amazing people who will stand by our side on our special day
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Groomsmen */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-teal-700">
            The King's Men
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {groomsmen.map((groomsman, index) => (
              <Card 
                key={index} 
                className={`text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  groomsman.isBest 
                    ? 'bg-gradient-to-br from-teal-100 to-teal-50 border-2 border-teal-300 col-span-2 md:col-span-3' 
                    : 'bg-gradient-to-br from-teal-50 to-white border-teal-200'
                }`}
              >
                <CardContent className="p-6">
                  {groomsman.isBest && (
                    <Crown className="text-teal-600 mx-auto mb-3" size={24} />
                  )}
                  {groomsman.photo ? (
                    <div 
                      className={`mx-auto mb-4 rounded-full overflow-hidden border-4 border-teal-300 cursor-pointer hover:opacity-80 transition-opacity ${
                        groomsman.isBest ? 'w-20 h-20' : 'w-16 h-16'
                      }`}
                      onClick={() => openPhotoModal(groomsman)}
                    >
                      <img 
                        src={groomsman.photo} 
                        alt={groomsman.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className={`mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold ${
                      groomsman.isBest ? 'w-20 h-20 text-2xl' : 'w-16 h-16 text-xl'
                    }`}>
                      {groomsman.name.charAt(0)}
                    </div>
                  )}
                  <h4 className={`font-bold text-gray-800 ${groomsman.isBest ? 'text-xl' : 'text-lg'}`}>
                    {groomsman.name}
                  </h4>
                  <p className={`text-teal-600 font-medium ${groomsman.isBest ? 'text-lg' : 'text-sm'}`}>
                    {groomsman.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bridesmaids */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-yellow-600">
            The Queen's Court
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {bridesmaids.map((bridesmaid, index) => (
              <Card 
                key={index} 
                className={`text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  bridesmaid.isBest 
                    ? 'bg-gradient-to-br from-yellow-100 to-yellow-50 border-2 border-yellow-300 col-span-2 md:col-span-3' 
                    : 'bg-gradient-to-br from-yellow-50 to-white border-yellow-200'
                }`}
              >
                <CardContent className="p-6">
                  {bridesmaid.isBest && (
                    <Crown className="text-yellow-600 mx-auto mb-3" size={24} />
                  )}
                  {bridesmaid.photo ? (
                    <div 
                      className={`mx-auto mb-4 rounded-full overflow-hidden border-4 border-yellow-300 cursor-pointer hover:opacity-80 transition-opacity ${
                        bridesmaid.isBest ? 'w-20 h-20' : 'w-16 h-16'
                      }`}
                      onClick={() => openPhotoModal(bridesmaid)}
                    >
                      <img 
                        src={bridesmaid.photo} 
                        alt={bridesmaid.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className={`mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-white font-bold ${
                      bridesmaid.isBest ? 'w-20 h-20 text-2xl' : 'w-16 h-16 text-xl'
                    }`}>
                      {bridesmaid.name.charAt(0)}
                    </div>
                  )}
                  <h4 className={`font-bold text-gray-800 ${bridesmaid.isBest ? 'text-xl' : 'text-lg'}`}>
                    {bridesmaid.name}
                  </h4>
                  <p className={`text-yellow-600 font-medium ${bridesmaid.isBest ? 'text-lg' : 'text-sm'}`}>
                    {bridesmaid.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-2xl max-h-full">
            <img 
              src={selectedPhoto.src} 
              alt={selectedPhoto.name}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-bold text-center mb-1">
                {selectedPhoto.name}
              </h3>
              <p className="text-white/80 text-center">
                {selectedPhoto.role}
              </p>
            </div>

            {/* Close Button */}
            <Button
              onClick={closeModal}
              size="icon"
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none"
            >
              <X size={20} />
            </Button>
          </div>
        </div>
      )}

      {/* Fun Facts Section */}
      <div className="mt-16 text-center">
        <Card className="bg-gradient-to-r from-teal-50 via-white to-yellow-50 border-none shadow-xl max-w-4xl mx-auto">
          <CardContent className="p-8">
            <Heart className="text-rose-500 mx-auto mb-4" size={32} />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Squad</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              These incredible people have been part of our journey, witnessed our love story unfold, 
              and will help us celebrate as we begin our new chapter together. Each one holds a special 
              place in our hearts, and we're honored to have them stand with us on our wedding day.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WeddingParty;
