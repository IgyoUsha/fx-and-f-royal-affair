
import { useState } from "react";
import { Camera, Image } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PhotoUploadForm from "./PhotoUploadForm";
import PhotoGrid from "./PhotoGrid";

const PhotoUpload = () => {
  const [uploadedPhotos, setUploadedPhotos] = useState<Array<{
    id: string;
    url: string;
    message: string;
    uploaderName: string;
  }>>([]);

  const handlePhotosUploaded = (newPhotos: Array<{
    id: string;
    url: string;
    message: string;
    uploaderName: string;
  }>) => {
    setUploadedPhotos(prev => [...prev, ...newPhotos]);
  };

  const removePhoto = (id: string) => {
    setUploadedPhotos(prev => prev.filter(photo => photo.id !== id));
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Share Your Memories
        </h2>
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent flex-1 max-w-32"></div>
          <Camera className="text-teal-500" size={24} />
          <div className="h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent flex-1 max-w-32"></div>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Upload your photos from our special day and help us create lasting memories together
        </p>
      </div>

      {/* Upload Form */}
      <PhotoUploadForm onPhotosUploaded={handlePhotosUploaded} />

      {/* Uploaded Photos Grid */}
      <PhotoGrid photos={uploadedPhotos} onRemovePhoto={removePhoto} />

      {/* Instructions */}
      <div className="mt-12 text-center">
        <Card className="bg-gradient-to-r from-yellow-50 via-white to-yellow-50 border-none shadow-xl max-w-4xl mx-auto">
          <CardContent className="p-8">
            <Image className="text-yellow-600 mx-auto mb-4" size={32} />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Help Us Preserve Our Memories</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Your photos will help us relive this beautiful day for years to come. 
              Share candid moments, behind-the-scenes shots, or any special memories you captured!
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex items-center justify-center space-x-2">
                <Camera className="text-teal-500" size={16} />
                <span>All photo formats accepted</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Image className="text-rose-500" size={16} />
                <span>Add personal messages</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Camera className="text-purple-500" size={16} />
                <span>Multiple uploads welcome</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PhotoUpload;
