
import { useState, useEffect } from "react";
import { Clock, Calendar, Heart, MapPin } from "lucide-react";

const CountdownTimer = () => {
  // Wedding date - August 16th, 2025
  const weddingDate = new Date("2025-08-16T15:00:00");
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <div className="container mx-auto px-4 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <Clock className="text-teal-200" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold">Countdown to Our Big Day</h2>
          <Heart className="text-teal-200" size={32} />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Minutes" },
            { value: timeLeft.seconds, label: "Seconds" }
          ].map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-yellow-300">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-teal-100 uppercase tracking-wide">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-center space-x-4 text-lg">
            <Calendar className="text-teal-200" size={20} />
            <span className="text-teal-100">
              Saturday, August 16th, 2025
            </span>
          </div>
          <div className="flex items-center justify-center space-x-4 text-lg">
            <MapPin className="text-teal-200" size={20} />
            <span className="text-teal-100">
              Makurdi, Nigeria
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
