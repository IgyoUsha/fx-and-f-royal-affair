
import { Heart, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const OurStory = () => {
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
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">F</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Fater's Story</h3>
              <p className="text-teal-600 font-semibold">The Groom</p>
            </div>
            
            <Quote className="text-teal-300 mb-4" size={32} />
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Thousands of miles away from home in Russia, I never expected to find the love of my life. 
                But when I met Fxentso, I knew God had orchestrated something beautiful. Her radiant smile 
                and gentle spirit captured my heart from the very beginning.
              </p>
              <p>
                What amazed me most was how she carried herself with such grace and wisdom. Being away from 
                Nigeria, finding someone who shared my values and faith felt like a miracle. She didn't 
                just complete me; she made me want to be a better man.
              </p>
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
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">F</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Fxentso's Story</h3>
              <p className="text-yellow-600 font-semibold">The Bride</p>
            </div>
            
            <Quote className="text-yellow-300 mb-4" size={32} />
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Being far from home in Russia was challenging, but meeting Fater changed everything. 
                There was something different about him - his genuine heart, his love for God, and 
                the way he treated everyone with such kindness and respect.
              </p>
              <p>
                What drew me to him wasn't just his charm, but his unwavering faith and the way he 
                encouraged me to chase my dreams. Even across continents, he made me feel at home. 
                I knew God had answered my prayers for a godly man who would love and cherish me.
              </p>
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
              { title: "First Met in Russia", desc: "When our paths crossed by God's design", side: "left" },
              { title: "Growing in Fellowship", desc: "Building our friendship in faith", side: "right" },
              { title: "Relationship Begins", desc: "Taking the step with God's blessing", side: "left" },
              { title: "The Proposal", desc: "He asked, she said yes - Praise God!", side: "right" },
              { title: "Wedding Day", desc: "Our covenant before God begins", side: "left" }
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
