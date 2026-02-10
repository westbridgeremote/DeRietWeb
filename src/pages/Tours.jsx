import React from 'react';
import { Compass, Anchor, Mountain, Fish, Camera, Map } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const Tours = () => {
  const tours = [
    {
      title: "Namakwa Klip Tour",
      icon: <Mountain className="w-8 h-8" />,
      description: "Explore ancient rocks, fascinating geology, and learn about the unique formations that shape Namaqualand's landscape",
      duration: "Half day / Full day",
      difficulty: "Moderate",
      highlights: [
        "Ancient rock formations",
        "Geological history insights",
        "Photography opportunities",
        "Local expert guides"
      ],
      badge: "Popular",
      color: "from-stone-100 to-amber-100"
    },
    {
      title: "Shipwreck Tour",
      icon: <Anchor className="w-8 h-8" />,
      description: "Discover historic coastal shipwrecks and hear dramatic stories from the Diamond Coast's maritime past",
      duration: "Half day",
      difficulty: "Easy",
      highlights: [
        "Historic shipwreck sites",
        "Maritime history stories",
        "Coastal photography",
        "Diamond Coast scenery"
      ],
      badge: "Unique",
      color: "from-blue-100 to-cyan-100"
    },
    {
      title: "Beaches Tour",
      icon: <Compass className="w-8 h-8" />,
      description: "Visit secluded west coast beaches perfect for peaceful walks, shell collecting, and ocean relaxation",
      duration: "Half day / Full day",
      difficulty: "Easy",
      highlights: [
        "Secluded pristine beaches",
        "Shell and fossil hunting",
        "Coastal wildlife spotting",
        "Atlantic Ocean views"
      ],
      badge: "Relaxing",
      color: "from-green-100 to-teal-100"
    },
    {
      title: "Dune Excursions",
      icon: <Map className="w-8 h-8" />,
      description: "Hike through spectacular sand dunes and enjoy panoramic views of the semi-desert landscape",
      duration: "2-4 hours",
      difficulty: "Moderate to Hard",
      highlights: [
        "Massive sand dune systems",
        "Panoramic desert views",
        "Unique flora and fauna",
        "Sunset photography spots"
      ],
      badge: "Adventure",
      color: "from-orange-100 to-amber-100"
    },
    {
      title: "Fishing & Crayfishing",
      icon: <Fish className="w-8 h-8" />,
      description: "Seasonal Atlantic fishing and crayfishing trips - catch your dinner for a fresh braai experience",
      duration: "Half day / Full day",
      difficulty: "Moderate",
      highlights: [
        "Atlantic coast fishing",
        "Seasonal crayfish (with permits)",
        "Fresh catch for braai",
        "Local fishing techniques"
      ],
      badge: "Seasonal",
      color: "from-blue-100 to-indigo-100"
    },
    {
      title: "Photography Tours",
      icon: <Camera className="w-8 h-8" />,
      description: "Guided by Allische, capture Namaqualand's flowers, wildlife, sunsets, and landscapes through your lens",
      duration: "Flexible",
      difficulty: "Easy",
      highlights: [
        "Expert photography guidance",
        "Wildflower close-ups",
        "Wildlife photography",
        "Golden hour locations"
      ],
      badge: "Special",
      color: "from-purple-100 to-pink-100"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
            Tours & Activities
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Enhance your Namaqualand camping experience with guided adventures 
            exploring the region's natural wonders and rich history
          </p>
        </div>

        {/* Intro Card */}
        <Card className="mb-12 border-2 border-green-300 bg-gradient-to-r from-green-50 to-orange-50 shadow-lg">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-orange-600 flex items-center justify-center flex-shrink-0">
                <Compass className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-stone-800 mb-3">
                  Local Guided Experiences
                </h2>
                <p className="text-stone-700 leading-relaxed">
                  All tours are led by experienced local guides who are intimately familiar with 
                  the Northern Cape's west coast. Pieter & Allische can arrange bookings and provide 
                  recommendations based on your interests, fitness level, and the season of your visit.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tours.map((tour, index) => (
            <Card key={index} className="border-2 border-stone-200 hover:border-green-600 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
              {tour.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 shadow-lg">
                    {tour.badge}
                  </Badge>
                </div>
              )}
              <CardHeader className={`bg-gradient-to-br ${tour.color} pb-6`}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-600 to-orange-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {tour.icon}
                  </div>
                  <CardTitle className="text-2xl text-stone-800">{tour.title}</CardTitle>
                </div>
                <div className="flex items-center gap-3 text-sm text-stone-600">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {tour.duration}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {tour.difficulty}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-stone-700 mb-4 leading-relaxed">{tour.description}</p>
                <div className="space-y-2 mb-6">
                  <h4 className="font-bold text-stone-800 text-sm">Highlights:</h4>
                  <ul className="space-y-2">
                    {tour.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-stone-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Booking Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-stone-200">
            <CardHeader className="bg-gradient-to-r from-green-100 to-orange-100">
              <CardTitle className="text-2xl text-stone-800">How to Book Tours</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Contact Pieter & Allische</h4>
                  <p className="text-sm text-stone-600">
                    Call or WhatsApp +27 73 341 5894 to discuss tour options, availability, and pricing
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Choose Your Adventures</h4>
                  <p className="text-sm text-stone-600">
                    Select tours based on your interests, fitness level, and length of stay
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Confirm & Prepare</h4>
                  <p className="text-sm text-stone-600">
                    We'll arrange bookings with local guides and provide preparation tips
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-stone-200">
            <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
              <CardTitle className="text-2xl text-stone-800">What to Bring</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {[
                  "Comfortable walking/hiking shoes",
                  "Sun protection (hat, sunscreen, sunglasses)",
                  "Water bottle and snacks",
                  "Camera or smartphone for photos",
                  "Light jacket (weather can change)",
                  "Binoculars (for wildlife spotting)",
                  "Valid permits (for fishing/crayfishing)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span className="text-stone-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="border-2 border-orange-300 bg-gradient-to-r from-orange-50 via-amber-50 to-green-50 shadow-xl">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-stone-800 mb-4">
              Ready to Explore Namaqualand?
            </h3>
            <p className="text-stone-700 mb-6 max-w-2xl mx-auto">
              Contact us to arrange your tours and activities. Pieter & Allische will help you 
              create the perfect adventure itinerary for your off-grid camping experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/27733415894" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-green-700 to-orange-700 hover:from-green-800 hover:to-orange-800 text-white shadow-lg">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Book Tours via WhatsApp
                </Button>
              </a>
              <a href="tel:+27733415894">
                <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-700 hover:bg-green-50">
                  Call +27 73 341 5894
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tours;
