
import { useState } from "react";
import { Camera, Heart, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  
  // Placeholder images - replace with actual uploaded couple photos
  const galleryPhotos = [
    { src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=400&fit=crop", caption: "Our first adventure together" },
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop", caption: "Date night memories" },
    { src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&h=400&fit=crop", caption: "Celebrating milestones" },
    { src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&h=400&fit=crop", caption: "Weekend getaway" },
    { src: "https://images.unsplash.com/photo-1606216928421-b5b99c4c4c6a?w=600&h=400&fit=crop", caption: "Holiday celebrations" },
    { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop", caption: "Making memories" },
    { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop", caption: "Adventures together" },
    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop", caption: "Special moments" },
    { src: "https://images.unsplash.com/photo-1609902726285-00668009f004?w=600&h=400&fit=crop", caption: "Love in the details" }
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
