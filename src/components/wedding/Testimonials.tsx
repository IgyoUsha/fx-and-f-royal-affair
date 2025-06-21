
import { Quote, Crown, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Words from the Heart
        </h2>
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent flex-1 max-w-32"></div>
          <Heart className="text-rose-500" size={24} />
          <div className="h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent flex-1 max-w-32"></div>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Hear what our closest friends have to say about our love story
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Best Man's Message */}
        <Card className="bg-gradient-to-br from-teal-50 to-white border-teal-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <Crown className="text-teal-600 mx-auto mb-4" size={32} />
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JM</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">JM</h3>
              <p className="text-teal-600 font-semibold">Best Man</p>
            </div>
            
            <Quote className="text-teal-300 mb-4" size={32} />
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                I've known Fater for years, and I've never seen him as happy as he is with Fxentso. 
                She brings out the best in him, and their love is truly inspiring to witness.
              </p>
              <p>
                Watching their relationship grow has been like watching a beautiful story unfold. 
                They complement each other perfectly - where one is strong, the other is supportive, 
                and together they're unstoppable.
              </p>
              <p className="italic text-teal-700 font-medium text-lg">
                "Fater and Fxentso, your love story gives us all hope. Here's to your happily ever after!"
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-teal-200">
              <p className="text-sm text-gray-500 text-center">
                Best wishes from your best man and lifelong friend
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Chief Bridesmaid's Message */}
        <Card className="bg-gradient-to-br from-yellow-50 to-white border-yellow-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <Crown className="text-yellow-600 mx-auto mb-4" size={32} />
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">B</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Bella</h3>
              <p className="text-yellow-600 font-semibold">Chief Bridesmaid</p>
            </div>
            
            <Quote className="text-yellow-300 mb-4" size={32} />
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Fxentso has always been someone special, but since meeting Fater, she's been absolutely 
                radiant. The way they look at each other, support each other, and laugh together 
                shows a love that's meant to last forever.
              </p>
              <p>
                As her closest friend, I've had a front-row seat to their beautiful love story. 
                From their first date stories to watching Fater propose, every moment has been 
                filled with pure joy and genuine connection.
              </p>
              <p className="italic text-yellow-700 font-medium text-lg">
                "Fxentso and Fater, you two are perfect together. May your marriage be everything you've dreamed of and more!"
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-yellow-200">
              <p className="text-sm text-gray-500 text-center">
                With all my love and best wishes for your future
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Quote Section */}
      <div className="mt-16 text-center">
        <Card className="bg-gradient-to-r from-rose-50 via-white to-rose-50 border-none shadow-xl max-w-4xl mx-auto">
          <CardContent className="p-8">
            <Quote className="text-rose-400 mx-auto mb-6" size={48} />
            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic mb-6 leading-relaxed">
              "A successful marriage requires falling in love many times, always with the same person."
            </blockquote>
            <p className="text-gray-500 font-medium">- Mignon McLaughlin</p>
            <div className="mt-6 flex justify-center space-x-2">
              <Heart className="text-rose-400" size={20} />
              <Heart className="text-rose-400" size={20} />
              <Heart className="text-rose-400" size={20} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Testimonials;
