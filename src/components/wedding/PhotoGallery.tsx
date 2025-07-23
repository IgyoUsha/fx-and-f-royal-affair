
import { useState } from "react";
import { Camera, Heart, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  
  // Your beautiful couple photos
  const galleryPhotos = [
    { 
      src: "/lovable-uploads/7428e189-476c-4167-a9e8-b376326d667b.png", 
      caption: "Our first adventure together" 
    },
    { 
      src: "/lovable-uploads/3b318e8c-27c4-46ea-ab9f-998b948e01fe.png", 
      caption: "Making memories in London" 
    },
    { 
      src: "/lovable-uploads/3f91bb3c-6815-468f-adea-84b91542b99d.png", 
      caption: "Sunny days together" 
    },
    { 
      src: "/lovable-uploads/8e6a5fc6-49cf-4d82-b4b4-4b2ca166e816.png", 
      caption: "Dressed up for special occasions" 
    },
    { 
      src: "/lovable-uploads/cad4c87c-b6b0-4b90-8951-9c5fe746586f.png", 
      caption: "Fun times in the city" 
    },
    { 
      src: "/lovable-uploads/5f9030ff-433a-4278-bb84-7b5b7bb62ef3.png", 
      caption: "The proposal moment" 
    },
    { 
      src: "/lovable-uploads/ae85b854-5e3f-4c22-8938-7ba924b5272b.png", 
      caption: "Tender moments together" 
    },
    { 
      src: "/lovable-uploads/b3034109-f892-4e1b-8b43-77f2de6ac8a2.png", 
      caption: "Love in black and white" 
    },
    { 
      src: "/lovable-uploads/ca484c7e-dcfd-4dea-9241-f7de04b6cf92.png", 
      caption: "Our engagement celebration" 
    },
    { 
      src: "/lovable-uploads/d9a8a524-8fee-48a9-b498-277048fbb28c.png", 
      caption: "Royal celebration moments" 
    },
    { 
      src: "/lovable-uploads/7c305c1f-393e-4a86-9254-177aadc8e079.png", 
      caption: "Traditional elegance" 
    },
    { 
      src: "/lovable-uploads/82a0998e-39e1-4bd9-be98-cc97f2b28592.png", 
      caption: "Joyful embrace" 
    },
    { 
      src: "/lovable-uploads/377a7e9f-4274-4769-8dd9-0c9700c8931e.png", 
      caption: "Formal moments" 
    },
    { 
      src: "/lovable-uploads/3a7a9132-ff10-4fae-b145-fb422f4a4cf6.png", 
      caption: "Elegant celebration" 
    }
  ];

  const openModal = (index: number) => {
    setSelectedPhoto(index);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % galleryPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto - 1 + galleryPhotos.length) % galleryPhotos.length);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Journey in Pictures
        </h2>
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent flex-1 max-w-32"></div>
          <Camera className="text-teal-500" size={24} />
          <div className="h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent flex-1 max-w-32"></div>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          A collection of our favorite moments together through the years
        </p>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {galleryPhotos.map((photo, index) => (
          <Card 
            key={index} 
            className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            onClick={() => openModal(index)}
          >
            <CardContent className="p-0 relative">
              <img 
                src={photo.src} 
                alt={photo.caption}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">{photo.caption}</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="text-white" size={16} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {selectedPhoto !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={galleryPhotos[selectedPhoto].src} 
              alt={galleryPhotos[selectedPhoto].caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-lg font-medium text-center">
                {galleryPhotos[selectedPhoto].caption}
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

            {/* Navigation Arrows */}
            <Button
              onClick={prevPhoto}
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              onClick={nextPhoto}
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      )}

      {/* Memory Quote */}
      <div className="mt-16 text-center">
        <Card className="bg-gradient-to-r from-teal-50 via-white to-yellow-50 border-none shadow-xl max-w-4xl mx-auto">
          <CardContent className="p-8">
            <Heart className="text-rose-500 mx-auto mb-4" size={32} />
            <blockquote className="text-xl md:text-2xl font-light text-gray-700 italic mb-4 leading-relaxed">
              "We loved with a love that was more than love."
            </blockquote>
            <p className="text-gray-500 font-medium mb-4">- Edgar Allan Poe</p>
            <p className="text-gray-600">
              Every photo tells a story, every moment a memory. These are the snapshots of our love story.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PhotoGallery;
