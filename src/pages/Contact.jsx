import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    dates: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Contact via WhatsApp or phone instead
    toast({
      title: "Use WhatsApp or Phone",
      description: "Please contact us directly via WhatsApp or call +27 73 341 5894",
      duration: 5000,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone / WhatsApp",
      content: "+27 73 341 5894",
      link: "tel:+27733415894",
      description: "Call or WhatsApp anytime"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "offgridderiet@gmail.com",
      link: "mailto:offgridderiet@gmail.com",
      description: "We reply within 24 hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Approximately 14km from Koingnaas, Namaqualand",
      description: "Northern Cape, South Africa"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Check-in / Check-out",
      content: "Arrive after 2pm / Depart by 10am",
      description: "Day visits: 8am-6pm"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Book your off-grid camping experience or ask us anything about De Riet Campsite
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-2 border-stone-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-700 to-orange-700 text-white">
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-stone-700 font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 border-stone-300 focus:border-green-600 focus:ring-green-600"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-stone-700 font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 border-stone-300 focus:border-green-600 focus:ring-green-600"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-stone-700 font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 border-stone-300 focus:border-green-600 focus:ring-green-600"
                      placeholder="+27 ..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="dates" className="text-stone-700 font-medium">Preferred Dates</Label>
                    <Input
                      id="dates"
                      name="dates"
                      type="text"
                      value={formData.dates}
                      onChange={handleChange}
                      className="mt-2 border-stone-300 focus:border-green-600 focus:ring-green-600"
                      placeholder="e.g., August 15-20, 2025"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-stone-700 font-medium">Message / Inquiry *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="mt-2 border-stone-300 focus:border-green-600 focus:ring-green-600 resize-none"
                      placeholder="Tell us about your camping plans, questions, or special requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-700 to-orange-700 hover:from-green-800 hover:to-orange-800 text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>

                  <p className="text-xs text-stone-500 text-center">
                    We'll reply within 24 hours
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-stone-800 mb-6">Get in Touch</h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                Pieter & Allische Horn are here to help with bookings, questions about facilities, 
                flower season availability, or any special requirements. We live near the site and pride 
                ourselves on personal, friendly service.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-2 border-stone-200 hover:border-green-600 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-5">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-100 to-orange-100 flex items-center justify-center text-green-700">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-stone-800 mb-1 text-sm">{item.title}</h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-sm text-green-700 hover:text-green-800 font-medium break-all"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-sm text-stone-700 font-medium">{item.content}</p>
                        )}
                        {item.description && (
                          <p className="text-xs text-stone-500 mt-1">{item.description}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="border-2 border-orange-300 bg-gradient-to-r from-orange-50 to-amber-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-stone-800 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/27733415894"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white justify-start">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp Us Now
                    </Button>
                  </a>
                  <a href="tel:+27733415894">
                    <Button variant="outline" className="w-full border-2 border-stone-300 hover:border-green-600 hover:bg-green-50 justify-start">
                      <Phone className="w-5 h-5 mr-2" />
                      Call +27 73 341 5894
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Booking Info */}
            <Card className="border-2 border-green-300 bg-gradient-to-r from-green-50 to-stone-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-stone-800 mb-3">Booking Requirements</h3>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    50% deposit required to confirm booking
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Children under 12: half price
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Groups of 4+: inquire about discounts
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    No pets (wildlife protection; service animals with notice)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
