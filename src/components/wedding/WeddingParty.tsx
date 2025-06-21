import { Crown, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WeddingParty = () => {
  const groomsmen = [
    { name: "Isaac", role: "Best Man", isBest: true },
    { name: "Martin-Luther", role: "Groomsman" },
    { name: "Joshua", role: "Groomsman" },
    { name: "Ife", role: "Groomsman" },
    { name: "Usha", role: "Groomsman" },
    { name: "JM", role: "Groomsman" }
  ];

  const bridesmaids = [
    { name: "Setemi", role: "Chief Bridesmaid", isBest: true },
    { name: "Iwuese", role: "Bridesmaid" },
    { name: "Kwaghdoobee", role: "Bridesmaid" },
    { name: "Bella", role: "Bridesmaid" }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Royal Court
        </h2>
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent flex-1 max-w-32"></div>
          <Crown className="text-yellow-500" size={24} />
          <div className="h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent flex-1 max-w-32"></div>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Meet the amazing people who will stand by our side on our special day
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Groomsmen */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-teal-700">
            The King's Men
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {groomsmen.map((groomsman, index) => (
              <Card 
                key={index} 
                className={`text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  groomsman.isBest 
                    ? 'bg-gradient-to-br from-teal-100 to-teal-50 border-2 border-teal-300 col-span-2 md:col-span-3' 
                    : 'bg-gradient-to-br from-teal-50 to-white border-teal-200'
                }`}
              >
                <CardContent className="p-6">
                  {groomsman.isBest && (
                    <Crown className="text-teal-600 mx-auto mb-3" size={24} />
                  )}
                  <div className={`mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold ${
                    groomsman.isBest ? 'w-20 h-20 text-2xl' : 'w-16 h-16 text-xl'
                  }`}>
                    {groomsman.name.charAt(0)}
                  </div>
                  <h4 className={`font-bold text-gray-800 ${groomsman.isBest ? 'text-xl' : 'text-lg'}`}>
                    {groomsman.name}
                  </h4>
                  <p className={`text-teal-600 font-medium ${groomsman.isBest ? 'text-lg' : 'text-sm'}`}>
                    {groomsman.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bridesmaids */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-yellow-600">
            The Queen's Court
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {bridesmaids.map((bridesmaid, index) => (
              <Card 
                key={index} 
                className={`text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  bridesmaid.isBest 
                    ? 'bg-gradient-to-br from-yellow-100 to-yellow-50 border-2 border-yellow-300 col-span-2 md:col-span-3' 
                    : 'bg-gradient-to-br from-yellow-50 to-white border-yellow-200'
                }`}
              >
                <CardContent className="p-6">
                  {bridesmaid.isBest && (
                    <Crown className="text-yellow-600 mx-auto mb-3" size={24} />
                  )}
                  <div className={`mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-white font-bold ${
                    bridesmaid.isBest ? 'w-20 h-20 text-2xl' : 'w-16 h-16 text-xl'
                  }`}>
                    {bridesmaid.name.charAt(0)}
                  </div>
                  <h4 className={`font-bold text-gray-800 ${bridesmaid.isBest ? 'text-xl' : 'text-lg'}`}>
                    {bridesmaid.name}
                  </h4>
                  <p className={`text-yellow-600 font-medium ${bridesmaid.isBest ? 'text-lg' : 'text-sm'}`}>
                    {bridesmaid.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Fun Facts Section */}
      <div className="mt-16 text-center">
        <Card className="bg-gradient-to-r from-teal-50 via-white to-yellow-50 border-none shadow-xl max-w-4xl mx-auto">
          <CardContent className="p-8">
            <Heart className="text-rose-500 mx-auto mb-4" size={32} />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Squad</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              These incredible people have been part of our journey, witnessed our love story unfold, 
              and will help us celebrate as we begin our new chapter together. Each one holds a special 
              place in our hearts, and we're honored to have them stand with us on our wedding day.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WeddingParty;
