
import { useState, useRef } from "react";
import { Upload, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
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
  const [dragActive, setDragActive] = useState(false);
  const [uploaderName, setUploaderName] = useState("");
  const [message, setMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = async (files: FileList) => {
    if (!uploaderName.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your name before uploading photos.",
        variant: "destructive",
      });
      return;
    }

    const newPhotos: Array<{
      id: string;
      url: string;
      message: string;
      uploaderName: string;
    }> = [];

    // Process files and upload to Google Drive
    for (const file of Array.from(files)) {
      if (file.type.startsWith('image/')) {
        try {
          // Create a temporary URL for immediate display
          const reader = new FileReader();
          reader.onload = (e) => {
            const newPhoto = {
              id: Date.now().toString() + Math.random().toString(),
              url: e.target?.result as string,
              message: message.trim(),
              uploaderName: uploaderName.trim()
            };
            newPhotos.push(newPhoto);
          };
          reader.readAsDataURL(file);

          // TODO: Upload to Google Drive in the background
          // This will be implemented with the Google Drive API
          console.log('Uploading to Google Drive:', file.name);
          
        } catch (error) {
          console.error('Error uploading file:', error);
          toast({
            title: "Upload Error",
            description: "There was an error uploading your photo. Please try again.",
            variant: "destructive",
          });
        }
      }
    }

    // Wait a bit for FileReader to process
    setTimeout(() => {
      onPhotosUploaded(newPhotos);
      setMessage(""); // Clear message after upload
      
      toast({
        title: "Photo Uploaded!",
        description: "Thank you for sharing this special moment with us!",
      });
    }, 100);
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
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

            {/* Message Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message (Optional)
              </label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share a special message or memory..."
                className="resize-none"
                rows={3}
              />
            </div>

            {/* Upload Area */}
            <div
              className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive 
                  ? 'border-teal-500 bg-teal-50' 
                  : 'border-gray-300 hover:border-teal-400 hover:bg-teal-50'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
              
              <Upload className="mx-auto mb-4 text-teal-500" size={48} />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Upload Your Photos
              </h3>
              <p className="text-gray-600 mb-4">
                Drag and drop your images here, or click to select files
              </p>
              <Button 
                onClick={onButtonClick}
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700"
              >
                Choose Photos
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhotoUploadForm;
