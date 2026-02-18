import React from 'react';
import { MapPin, Navigation, Phone, Info, Car, Fuel } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const MapDirections = () => {
  const routes = [
    {
      title: "From Cape Town",
      distance: "~500km",
      time: "~6-7 hours",
      steps: [
        "Take N7 highway north towards Springbok",
        "Continue for approximately 500km",
        "Turn west onto R355 towards Koingnaas",
        "Travel 80-100km on gravel road",
        "Continue 15km past Koingnaas to De Riet"
      ],
      icon: <Car className="w-6 h-6" />
    },
    {
      title: "From Springbok",
      distance: "~100km",
      time: "~1.5-2 hours",
      steps: [
        "Head west on R355 from Springbok",
        "Continue towards Koingnaas",
        "Approximately 80-100km (mostly gravel)",
        "Pass through Koingnaas",
        "De Riet is 10km east of Koingnaas"
      ],
      icon: <Navigation className="w-6 h-6" />
    },
    {
      title: "Coastal Approach",
      distance: "Varies",
      time: "Varies",
      steps: [
        "From Port Nolloth or Kleinzee",
        "Head south along the coast",
        "Navigate to Koingnaas",
        "Continue 10km to De Riet",
        "Scenic coastal route with ocean views"
      ],
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  const importantInfo = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Vehicle Requirements",
      items: [
        "4x4 or high-clearance vehicle recommended",
        "Final sections are dirt/sand roads",
        "Extra caution after rain",
        "Check tire pressure & spare tire"
      ]
    },
    {
      icon: <Fuel className="w-6 h-6" />,
      title: "Fuel & Supplies",
      items: [
        "Fuel is available in Koingnaas during working hours",
        "Filtered water and ice available for purchase in Koingnaas",
        "Perishable foods are not readily available in Koingnaas",
        "Stock up on supplies before arrival"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Road Conditions",
      items: [
        "Gravel roads most of the way",
        "Limited cell phone signal",
        "Call ahead for road updates",
        "+27 73 341 5894 for assistance"
      ]
    },
    {
      icon: <Info className="w-6 h-6" />,
      title: "Travel Tips",
      items: [
        "Start journey early in the day",
        "Inform someone of your route",
        "Bring GPS device or offline maps",
        "Watch for wildlife on roads"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
            Map & Directions
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Find your way to De Riet Off-Grid Campsite in Namaqualand, Northern Cape
          </p>
        </div>

        {/* GPS Coordinates Card */}
        <Card className="mb-12 border-2 border-green-300 shadow-xl bg-gradient-to-r from-green-50 to-orange-50">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-orange-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-800 mb-2">GPS Coordinates</h2>
                  <p className="text-3xl font-mono font-bold text-green-700 mb-2">
                    30.146068, 17.347459
                  </p>
                  <p className="text-stone-600">
                    10km from Koingnaas, Namaqualand, Northern Cape, South Africa
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=-30.155278,17.355556"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-green-700 hover:bg-green-800 text-white w-full">
                    <Navigation className="mr-2 h-5 w-5" />
                    Open in Google Maps
                  </Button>
                </a>
                <a href="tel:+27733415894">
                  <Button variant="outline" className="border-2 border-stone-300 hover:border-green-600 w-full">
                    <Phone className="mr-2 h-5 w-5" />
                    Call for Directions
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Embedded Google Map */}
        <Card className="mb-12 border-2 border-stone-200 shadow-xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-green-700 to-orange-700 text-white">
            <CardTitle className="text-2xl">Interactive Map</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="w-full h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.5!2d17.355556!3d-30.155278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA5JzE5LjAiUyAxN8KwMjEnMTkuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="De Riet Off-Grid Campsite Location Map"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        {/* Routes */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
            Route Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {routes.map((route, index) => (
              <Card key={index} className="border-2 border-stone-200 hover:border-green-600 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="bg-gradient-to-br from-stone-100 to-green-50">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-orange-600 flex items-center justify-center text-white">
                      {route.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-stone-800">{route.title}</CardTitle>
                      <p className="text-sm text-stone-600">{route.distance} • {route.time}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ol className="space-y-3">
                    {route.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-stone-700 text-sm">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Information */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
            Important Travel Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {importantInfo.map((info, index) => (
              <Card key={index} className="border-2 border-stone-200 hover:border-green-600 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-100 to-orange-100 flex items-center justify-center text-green-700">
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-bold text-stone-800 mt-2">{info.title}</h3>
                  </div>
                  <ul className="space-y-2 ml-15">
                    {info.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-stone-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <Card className="border-2 border-orange-300 bg-gradient-to-r from-orange-50 via-amber-50 to-green-50 shadow-xl">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-stone-800 mb-4">
              Need Assistance with Directions?
            </h3>
            <p className="text-stone-700 mb-6 max-w-2xl mx-auto">
              Pieter & Allische are happy to provide detailed directions, road condition updates, 
              or meet you along the way if needed. Safe travels to your Namaqualand adventure!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+27733415894">
                <Button size="lg" className="bg-gradient-to-r from-green-700 to-orange-700 hover:from-green-800 hover:to-orange-800 text-white shadow-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +27 73 341 5894
                </Button>
              </a>
              <a href="https://wa.me/27733415894" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-700 hover:bg-green-50">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MapDirections;
