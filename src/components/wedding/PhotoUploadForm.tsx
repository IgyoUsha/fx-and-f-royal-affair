
import { useState } from "react";
import { Upload, Camera, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface PhotoUploadFormProps {
  onPhotosUploaded: (photos: Array<{
    id: string;
    url: string;
    message: string;
    uploaderName: string;
  }>) => void;
}

const PhotoUploadForm = ({ onPhotosUploaded }: PhotoUploadFormProps) => {
  const [uploaderName, setUploaderName] = useState("");
  const { toast } = useToast();

  const handleUploadClick = () => {
    if (!uploaderName.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your name before uploading photos.",
        variant: "destructive",
      });
      return;
    }

    // Open Google Drive folder in a new tab
    window.open("https://drive.google.com/drive/folders/1sUBAXQnjAghWcTfHGXtuwgPfoR0KGNl_", "_blank");
    
    toast({
      title: "Redirecting to Photo Upload",
      description: `Hi ${uploaderName}! You're being redirected to upload your photos.`,
    });
  };

  return (
    <div className="max-w-2xl mx-auto mb-12">
      <Card className="bg-gradient-to-br from-teal-50 to-white border-teal-200 shadow-xl">
        <CardContent className="p-8">
          <div className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                value={uploaderName}
                onChange={(e) => setUploaderName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            {/* Upload Button */}
            <div className="text-center">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-teal-400 hover:bg-teal-50 transition-colors">
                <Upload className="mx-auto mb-4 text-teal-500" size={48} />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Upload Your Photos
                </h3>
                <p className="text-gray-600 mb-4">
                  Click below to upload your wedding photos and memories
                </p>
                <Button 
                  onClick={handleUploadClick}
                  className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700"
                >
                  <ExternalLink className="mr-2" size={16} />
                  Upload Photos
                </Button>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Instructions:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Enter your name above before clicking upload</li>
                <li>• You'll be taken to our photo collection folder</li>
                <li>• Drag and drop your photos or click "New" → "File upload"</li>
                <li>• Please name your photos with your name for easy identification</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhotoUploadForm;
