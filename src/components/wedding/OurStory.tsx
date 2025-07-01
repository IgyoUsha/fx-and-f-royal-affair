import { Heart, Quote, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const OurStory = () => {
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
          Our Love Story
        </h2>
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent flex-1 max-w-32"></div>
          <Heart className="text-teal-500" size={24} />
          <div className="h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent flex-1 max-w-32"></div>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          From Nigeria to Russia, and back to forever. Here's how God wrote our beautiful love story...
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Groom's Perspective */}
        <Card className="bg-gradient-to-br from-teal-50 to-white border-teal-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-teal-300">
                <img 
                  src="/lovable-uploads/ae626318-4d1d-452f-9413-0ad8c13805d4.png" 
                  alt="Fater"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Fater's Story</h3>
              <p className="text-teal-600 font-semibold">The Groom</p>
            </div>
            
            <Quote className="text-teal-300 mb-4" size={32} />
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Thousands of miles away from home in Russia, I never expected to find the love of my life. 
                But when I met Fxentso, I knew God had orchestrated something beautiful.
              </p>
              
              {expandedCards['fater'] && (
                <>
                  <p>
                    Her radiant smile and gentle spirit captured my heart from the very beginning.
                    What amazed me most was how she carried herself with such grace and wisdom. Being away from 
                    Nigeria, finding someone who shared my values and faith felt like a miracle.
                  </p>
                  <p>
                    She didn't just complete me; she made me want to be a better man.
                  </p>
                </>
              )}
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleExpanded('fater')}
                className="text-teal-600 hover:text-teal-700 p-0 h-auto font-normal"
              >
                {expandedCards['fater'] ? (
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
              
              <p className="italic text-teal-700 font-medium">
                "In a foreign land, God gave me my home in her."
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Bride's Perspective */}
        <Card className="bg-gradient-to-br from-yellow-50 to-white border-yellow-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-yellow-300">
                <img 
                  src="/lovable-uploads/ecc64a51-ee3b-424d-9bbd-5dc32902e2db.png" 
                  alt="Fxentso"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Fxentso's Story</h3>
              <p className="text-yellow-600 font-semibold">The Bride</p>
            </div>
            
            <Quote className="text-yellow-300 mb-4" size={32} />
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Being far from home in Russia was challenging, but meeting Fater changed everything. 
                There was something different about him - his genuine heart, his love for God.
              </p>
              
              {expandedCards['fxentso'] && (
                <>
                  <p>
                    And the way he treated everyone with such kindness and respect.
                    What drew me to him wasn't just his charm, but his unwavering faith and the way he 
                    encouraged me to chase my dreams.
                  </p>
                  <p>
                    Even across continents, he made me feel at home. 
                    I knew God had answered my prayers for a godly man who would love and cherish me.
                  </p>
                </>
              )}
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleExpanded('fxentso')}
                className="text-yellow-600 hover:text-yellow-700 p-0 h-auto font-normal"
              >
                {expandedCards['fxentso'] ? (
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
              
              <p className="italic text-yellow-700 font-medium">
                "In him, I found God's perfect plan for my life."
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Timeline */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Journey Together</h3>
          <p className="text-gray-600">Trusting in God's perfect timing</p>
        </div>
        
        <div className="relative px-4">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-500 to-yellow-500"></div>
          
          <div className="space-y-8">
            {[
              { title: "First Met - January 2019", desc: "Met at SFC winter camp in Rostov Russia", side: "left" },
              { title: "Growing Closer - August 2020", desc: "Began communicating more closely as part of a discipleship group", side: "right" },
              { title: "Special Visit - December 2020", desc: "Fater visited Fxentso's city of Belgorod and did a tour with her and friends", side: "left" },
              { title: "God's Confirmation - April 2023", desc: "God spoke to Fater about Fxentso", side: "right" },
              { title: "Divine Confirmation - September 2023", desc: "God further confirmed His speaking through His word and human disciplers", side: "left" },
              { title: "The Proposal - October 2023", desc: "Fater made his proposal to Fxentso", side: "right" },
              { title: "The Answer - November 2023", desc: "Fxentso gave her joyful reply - Yes!", side: "left" },
              { title: "Wedding Day - August 2025", desc: "Our covenant before God begins", side: "right" }
            ].map((milestone, index) => (
              <div key={index} className="relative flex items-center">
                <div className={`w-full flex ${milestone.side === 'right' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`w-full max-w-sm ${milestone.side === 'right' ? 'ml-auto pl-8' : 'mr-auto pr-8'}`}>
                    <Card className="bg-white shadow-lg border-l-4 border-teal-500 hover:shadow-xl transition-shadow">
                      <CardContent className="p-4">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{milestone.title}</h4>
                        <p className="text-gray-600 text-sm">{milestone.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
