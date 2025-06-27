
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
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-teal-300">
                <img 
                  src="/lovable-uploads/7e27994f-cc9b-4f19-8703-67537198687c.png" 
                  alt="Isaac"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Isaac</h3>
              <p className="text-teal-600 font-semibold">Best Man</p>
            </div>
            
            <Quote className="text-teal-300 mb-4" size={32} />
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                I've known Fater for years, and I've never seen him as happy as he is with Fxentso. 
                She brings out the best in him, and their love is truly inspiring to witness. What I 
                admire most is how their relationship is built on a foundation of faith and mutual respect.
              </p>
              <p>
                Watching their relationship grow has been like watching a beautiful story unfold. 
                They complement each other perfectly - where one is strong, the other is supportive, 
                and together they're unstoppable. Their love for God shines through everything they do.
              </p>
              <p className="italic text-teal-700 font-medium text-lg">
                "Fater and Fxentso, your love story gives us all hope. May God continue to bless your union!"
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
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-yellow-300">
                <img 
                  src="/lovable-uploads/c26c3024-d193-4635-b009-768d998db18e.png" 
                  alt="Setemi"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Setemi</h3>
              <p className="text-yellow-600 font-semibold">Chief Bridesmaid</p>
            </div>
            
            <Quote className="text-yellow-300 mb-4" size={32} />
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Fxentso has always been someone special, but since meeting Fater, she's been absolutely 
                radiant. The way they look at each other, support each other, and laugh together 
                shows a love that's rooted in faith and meant to last forever.
              </p>
              <p>
                As her closest friend, I've had a front-row seat to their beautiful love story. 
                From their first meeting stories to watching their relationship blossom in God's timing, 
                every moment has been filled with pure joy and genuine connection.
              </p>
              <p className="italic text-yellow-700 font-medium text-lg">
                "Fxentso and Fater, you two are perfect together. May your marriage be blessed and filled with God's love!"
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-yellow-200">
              <p className="text-sm text-gray-500 text-center">
                With all my love and prayers for your future
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
              "He who finds a wife finds what is good and receives favor from the Lord."
            </blockquote>
            <p className="text-gray-500 font-medium">- Proverbs 18:22</p>
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
