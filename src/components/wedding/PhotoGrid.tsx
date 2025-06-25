
import { Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Photo {
  id: string;
  url: string;
  message: string;
  uploaderName: string;
}

interface PhotoGridProps {
  photos: Photo[];
  onRemovePhoto: (id: string) => void;
}

const PhotoGrid = ({ photos, onRemovePhoto }: PhotoGridProps) => {
  if (photos.length === 0) return null;

  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Shared Memories ({photos.length})
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <Card key={photo.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={photo.url} 
                  alt="Uploaded memory"
                  className="w-full h-48 object-cover"
                />
                <Button
                  onClick={() => onRemovePhoto(photo.id)}
                  size="icon"
                  variant="destructive"
                  className="absolute top-2 right-2 w-8 h-8"
                >
                  <X size={16} />
                </Button>
              </div>
              
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Heart className="text-rose-500" size={16} />
                  <span className="font-semibold text-gray-800">{photo.uploaderName}</span>
                </div>
                {photo.message && (
                  <p className="text-gray-600 text-sm italic">"{photo.message}"</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
