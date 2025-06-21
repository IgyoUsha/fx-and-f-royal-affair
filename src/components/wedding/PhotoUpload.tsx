
import { useState, useRef } from "react";
import { Upload, Camera, Heart, X, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const PhotoUpload = () => {
  const [uploadedPhotos, setUploadedPhotos] = useState<Array<{
    id: string;
    url: string;
    message: string;
    uploaderName: string;
  }>>([]);
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

  const handleFiles = (files: FileList) => {
    if (!uploaderName.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your name before uploading photos.",
        variant: "destructive",
      });
      return;
    }

    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newPhoto = {
            id: Date.now().toString() + Math.random().toString(),
            url: e.target?.result as string,
            message: message.trim(),
            uploaderName: uploaderName.trim()
          };
          setUploadedPhotos(prev => [...prev, newPhoto]);
          setMessage(""); // Clear message after upload
        };
        reader.readAsDataURL(file);
      }
    });

    toast({
      title: "Photo Uploaded!",
      description: "Thank you for sharing this special moment with us!",
    });
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
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

      {/* Uploaded Photos Grid */}
      {uploadedPhotos.length > 0 && (
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Shared Memories ({uploadedPhotos.length})
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {uploadedPhotos.map((photo) => (
              <Card key={photo.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={photo.url} 
                      alt="Uploaded memory"
                      className="w-full h-48 object-cover"
                    />
                    <Button
                      onClick={() => removePhoto(photo.id)}
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
      )}

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
                <Heart className="text-rose-500" size={16} />
                <span>Add personal messages</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Upload className="text-purple-500" size={16} />
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
