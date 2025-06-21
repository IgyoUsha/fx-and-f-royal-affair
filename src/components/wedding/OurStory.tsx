
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
          Every love story is beautiful, but ours is our favorite. Here's how it all began...
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
                The first time I saw Fxentso, I knew she was special. There was something about her smile 
                that lit up the entire room, and her laugh was like music to my ears.
              </p>
              <p>
                What started as friendship quickly blossomed into something deeper. Her kindness, 
                intelligence, and the way she sees the world made me realize I wanted to spend 
                the rest of my life making her happy.
              </p>
              <p className="italic text-teal-700 font-medium">
                "She didn't just steal my heart; she made it her home."
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
                Meeting Fater changed everything for me. He has this incredible way of making 
                everyone around him feel valued and loved. His sense of humor and gentle spirit 
                drew me in from the very beginning.
              </p>
              <p>
                What I love most about him is his unwavering support and the way he believes in 
                my dreams even when I doubt myself. He's not just my partner; he's my best friend 
                and my biggest cheerleader.
              </p>
              <p className="italic text-yellow-700 font-medium">
                "With him, I found not just love, but my forever home."
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Timeline */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Journey Together</h3>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-500 to-yellow-500"></div>
          
          <div className="space-y-12">
            {[
              { year: "First Met", desc: "When our paths first crossed", side: "left" },
              { year: "First Date", desc: "The beginning of our adventure", side: "right" },
              { year: "Relationship", desc: "Making it official", side: "left" },
              { year: "Engagement", desc: "He asked, she said yes!", side: "right" },
              { year: "Wedding Day", desc: "Our happily ever after begins", side: "left" }
            ].map((milestone, index) => (
              <div key={index} className={`flex items-center ${milestone.side === 'right' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-1/2 ${milestone.side === 'right' ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
                    <h4 className="text-xl font-bold text-gray-800">{milestone.year}</h4>
                    <p className="text-gray-600">{milestone.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
