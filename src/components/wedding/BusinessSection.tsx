
import { ExternalLink, Home, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BusinessSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Ventures
        </h2>
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1 max-w-32"></div>
          <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1 max-w-32"></div>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Beyond our love story, we're part of amazing teams building something impactful together
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Guidetryb */}
        <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/824a9edd-7366-4e84-949a-54617b8b7335.png" 
                alt="Guidetryb Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Guidetryb</h3>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              An online career mentorship platform connecting ambitious professionals with experienced mentors. 
              We're part of a dedicated team helping people navigate their career journey and achieve their professional goals through personalized guidance.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-center space-x-2 text-blue-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Career Mentorship Platform</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-blue-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Professional Development</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-blue-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>One-on-One Mentoring</span>
              </div>
            </div>

            <Button 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              onClick={() => window.open('https://linktr.ee/guidetryb?utm_source=linktree_profile_share&ltsid=2ef777fe-3e69-4f6a-84db-c501861fde21', '_blank')}
            >
              Visit Guidetryb
              <ExternalLink className="ml-2" size={16} />
            </Button>
          </CardContent>
        </Card>

        {/* ABBA's Dwelling */}
        <Card className="bg-gradient-to-br from-green-50 to-white border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/645a9b3e-ab5e-44f8-ba21-88227c0bcf6d.png" 
                alt="ABBA's Dwelling Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-800 mb-4">ABBA's Dwelling</h3>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A Christian blog dedicated to inspiring and encouraging young people in their faith journey. 
              We collaborate with a passionate team to share biblical insights, testimonies, and practical wisdom to help youth grow closer to God.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Christian Blog for Youth</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Biblical Insights & Wisdom</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Faith-Building Content</span>
              </div>
            </div>

            <Button 
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              onClick={() => window.open('https://abbasdwelling.com/', '_blank')}
            >
              Visit ABBA's Dwelling
              <ExternalLink className="ml-2" size={16} />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Partnership Message */}
      <div className="mt-16 text-center">
        <Card className="bg-gradient-to-r from-purple-50 via-white to-purple-50 border-none shadow-xl max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex justify-center space-x-4 mb-6">
              <Sparkles className="text-purple-500" size={24} />
              <Home className="text-purple-500" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Partners in Love & Business</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Just as we've found our perfect match in each other, we've also discovered the joy of 
              being part of amazing teams building impactful ventures. Our involvement in these businesses reflects our shared values, dreams, and 
              commitment to making a positive impact in the world. Thank you for supporting our 
              journey both in love and in our professional endeavors!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BusinessSection;
