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
                I first met Fxentso at a Christian camp in the winter of 2019 in the city of Rostov in Russia. At that time I was simply captivated by her name, which I made her pronounce repeatedly until I could repeat it as best I could.
              </p>
              
              {expandedCards['fater'] && (
                <>
                  <p>
                    We began to relate a bit more closely in the autumn of 2020 when a group of disciples to which she belonged was merged with another group I had watched over for some time. Her zeal for the things of God and interest in growing as a disciple was evident. April 2021 was the first time the thought crossed my mind that she could potentially be a fitting life partner (after she wrote her famous <a href="https://abbasdwelling.com/2022/02/09/my-very-own-dear-future-husband/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline">Letter to My Future Spouse</a>), but that thought was eliminated as quickly as it came after I had a dream based on which I concluded that God had told me she was for someone else.
                  </p>
                  <p>
                    Shortly before leaving Russia in the Spring of 2023, I visited the city of Saint Petersburg where Fxentso had begun her Masters program. During those few days we shared a deep fellowship as we conversed and prayed. Fxentso made me stir-fry spaghetti (I've often joked that she put some love potion in that food), because after eating it, that old thought crossed my mind…again.
                  </p>
                  <p>
                    A few weeks after that and a few days into my new phase in the United Kingdom, God spoke to me quietly one morning and confirmed by an inner knowing that she is His will for me. When God spoke, it was clear and elaborate. Because I knew it would come as a surprise to her, I began by asking, "I know someone who is interested in getting married to you. If I mention his name will you be willing to give it some consideration?". When she answered in the affirmative, my next statement was, "What if I said the person who is interested is the one talking to you right now?"…boom!
                  </p>
                  <p>
                    So it was a journey from being a total stranger with a unique name, to being a zealous disciple, then a closer sister and friend, and eventually the first girl I ever asked to journey into forever with me. My Good Sister has become a "good thing" for me, a source of favour from the Lord.
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
                "Fxentso is gorgeous and has a sweet personality; she wrote a beautiful letter and hosted me hospitably, but it was after I discerned her to be the will of God that the veil fell off my eyes and I felt I couldn't go through one more moment without her. Thankfully, I won't have to."
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
                I first met Fater at the Students for Christ (SFC camp) in January 2019. A brother introduced me to him, and he couldn't pronounce my name. He asked several times if it wasn't "Funto" or "Funsho", but with practice, he finally learned how to say it to a fair degree of correctness.
              </p>
              
              {expandedCards['fxentso'] && (
                <>
                  <p>
                    In 2020, I was handed over to Fater along with a few of my mates, and we began a discipleship journey. Fater became a big brother to me, and since I don't have a biological brother, I often called him my "best brother." There was a time we had a relationship session during one of our discipleship meetings and we each had to write a letter to our future spouses.
                  </p>
                  <p>
                    Fater visited Saint Petersburg before he left the country, intending to tour the city. I took him to surprise them and became a tour guide in the city. When he was about to leave the country, I went to see him off because he had promised to give me some books when leaving.
                  </p>
                  <p>
                    During our discipleship meetings, Fater always advised us as ladies to begin praying for our marriages, but I was quite reluctant about it. I got my first proposal in May 2023, which jolted me into the reality that I had entered into a phase of being noticed by boys and the matter of praying to know the will of God concerning marriage had become inevitable.
                  </p>
                  <p>
                    A few weeks later, one fateful Sunday, Fater asked if he could call me. While we were talking, he asked me an unusual question, "If someone came to ask for your hand in marriage, what would you do?" Then he proceeded, "What if I tell you that it's the person you're talking with right now?" I was shocked beyond words.
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
                "Now comes the time when I am beginning a journey into forever with someone who still cannot pronounce my name perfectly and who cannot tolerate a bit of pepper in his food. My 'best brother' has now become my best friend."
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
