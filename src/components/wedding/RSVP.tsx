
import { useState } from "react";
import { Heart, Mail, Phone, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    attendance: "",
    guestCount: "1",
    dietaryRestrictions: "",
    specialDietaryNeeds: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "RSVP Submitted!",
      description: "Thank you for your response. We can't wait to celebrate with you!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      attendance: "",
      guestCount: "1",
      dietaryRestrictions: "",
      specialDietaryNeeds: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          RSVP
        </h2>
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent flex-1 max-w-32"></div>
          <Heart className="text-white" size={24} />
          <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent flex-1 max-w-32"></div>
        </div>
        <p className="text-teal-100 text-lg max-w-2xl mx-auto">
          Please let us know if you'll be joining us for our special day
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* RSVP Form */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Your Response
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Attendance */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Will you be attending? *
                </label>
                <select
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="">Please select</option>
                  <option value="yes">Yes, I'll be there!</option>
                  <option value="no">Sorry, I can't make it</option>
                </select>
              </div>

              {/* Guest Count */}
              {formData.attendance === "yes" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests
                  </label>
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="1">Just me</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                  </select>
                </div>
              )}

              {/* Special Dietary Needs */}
              {formData.attendance === "yes" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Dietary Needs
                  </label>
                  <select
                    name="specialDietaryNeeds"
                    value={formData.specialDietaryNeeds}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="">No dietary needs</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                  </select>
                </div>
              )}

              {/* Dietary Restrictions */}
              {formData.attendance === "yes" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Other Dietary Restrictions or Allergies
                  </label>
                  <input
                    type="text"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Any food allergies or other preferences?"
                  />
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message for the Couple
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="resize-none"
                  placeholder="Share your well wishes or a special message..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                {isSubmitting ? "Submitting..." : "Submit RSVP"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Wedding Details */}
        <div className="space-y-8">
          {/* Event Details */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Wedding Details
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Calendar className="text-teal-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Date & Time</h4>
                    <p className="text-gray-600">Saturday, August 16th, 2025</p>
                    <p className="text-gray-600">Ceremony: [Time]</p>
                    <p className="text-gray-600">Reception: [Time]</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-teal-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Venue</h4>
                    <p className="text-gray-600">Makurdi, Nigeria</p>
                    <p className="text-gray-600">[Venue Address]</p>
                    <p className="text-gray-600">[City, State]</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Heart className="text-rose-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Dress Code</h4>
                    <p className="text-gray-600">Royal Formal</p>
                    <p className="text-gray-600">Colors: Royal blue, Purple, Gold</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Questions?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-teal-600" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">fx.fater@gmail.com</p>
                  </div>
                </div>

              </div>

              <div className="mt-6 p-4 bg-teal-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  Please RSVP by [RSVP Date] to help us plan accordingly
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
