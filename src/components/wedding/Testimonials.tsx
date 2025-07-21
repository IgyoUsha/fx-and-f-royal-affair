import { Quote, Crown, Heart, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Testimonials = () => {
  const [expandedCards, setExpandedCards] = useState<{[key: string]: boolean}>({});

  const toggleExpanded = (cardId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

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
                During undergrad, we used to joke that Fater always followed me wherever I went (or I always followed him). We met in Calvary Arrows as students in JSS1. Though we went to different universities in Nigeria initially, God brought us together again when we both received scholarships to study in the same university and program in Russia.
              </p>
              
              {expandedCards['isaac'] && (
                <>
                  <p>
                    There, we became classmates and roommates throughout our undergraduate years. Over time, we moved from being strangers to friends—and now, brothers. I met Fxentso for the first time at a Students for Christ (SFC) Winter Camp some years ago in Russia. I remember the excitement of meeting someone from my part of Nigeria - it felt like a rare treasure.
                  </p>
                  <p>
                    We've seen a lot. From naive days in secondary school, through culture shock and cold winters in a new country, we've grown, learned, and adapted together. I still faintly remember a dream I had over eight years ago about your wedding. I shared it with you back then, not knowing what or when it meant. But seeing it come to pass today fills me with joy.
                  </p>
                  <p>
                    You have found a good thing—and more than that, you've found God's favour. I rejoice with you for this answered prayer. May your marriage reflect His heart, full of grace, selflessness, purpose, joy, peace, and light.
                  </p>
                </>
              )}
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleExpanded('isaac')}
                className="text-teal-600 hover:text-teal-700 p-0 h-auto font-normal"
              >
                {expandedCards['isaac'] ? (
                  <>
                    <ChevronUp size={16} className="mr-1" />
                    Read Less
                  </>
                ) : (
                  <>
                    <ChevronDown size={16} className="mr-1" />
                    Read More
                  </>
                )}
              </Button>
              
              <p className="italic text-teal-700 font-medium text-lg">
                "Arise, shine, for your light has come, and the glory of the Lord rises upon you. That it will arise and shine — a light to the world, fulfilling God's purpose, radiating His glory."
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
                I don't know if you've ever come across this quote or meme before: "That one person that comes into your life in the most random way but has now become the most important part of it." Yes, that person for me is Fxentso — or "Fx," as I like to call her😊.
              </p>
              
              {expandedCards['setemi'] && (
                <>
                  <p>
                    I met Fx in Russia, the winter of 2018, with absolutely no prior knowledge of her. We were in the same school and lived in the same hostel for our Russian language preparatory course. Less frequent chats became more frequent ones. A few minutes of phone calls turned into hours of chitchats, laughter, banter, deep and spiritual conversations.
                  </p>
                  <p>
                    She became my safe space, my confidant — and I, hers. You know one thing I love about Fx? She always says she's proud of me. Oh, how those words melt my heart every time! When I finally found out that she was taken (Brother Fater pulled a fast one on me — but I forgive him), I was overjoyed, elated, ecstatic… pleasantly surprised and delighted😁.
                  </p>
                  <p>
                    I am very confident that this is a kingdom marriage — not just because two Christians are getting married, but also because this union is by divine will and will fulfill divine mandate.
                  </p>
                </>
              )}
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleExpanded('setemi')}
                className="text-yellow-600 hover:text-yellow-700 p-0 h-auto font-normal"
              >
                {expandedCards['setemi'] ? (
                  <>
                    <ChevronUp size={16} className="mr-1" />
                    Read Less
                  </>
                ) : (
                  <>
                    <ChevronDown size={16} className="mr-1" />
                    Read More
                  </>
                )}
              </Button>
              
              <p className="italic text-yellow-700 font-medium text-lg">
                "I pray for you both, Fx and Brother Fater, and I pray for your future home — that the love of Christ will keep, guard, and lead you in all your ways. At the end of your lives, after many years, your lives and marriage will be a testimony of God's faithfulness."
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
