import React from 'react';
import { DollarSign, Users, Calendar, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
const Rates = () => {
  const rates = [
    {
      title: "Day Visit",
      price: "Off-Season: R60 | In-Season: R100",
      duration: "per person (Children under 12: Half Price)",
      time: "8am – 6pm",
      features: [
        "Access for picnics & walks",
        "Wildlife spotting",
        "Explore Namaqualand scenery",
        "No overnight stay"
      ],
      badge: "Day Trip",
      color: "from-amber-100 to-orange-100"
    },
    {
      title: "Overnight Stay",
      price: "Off-Season: R150 | In-Season: R200",
      duration: "per person sharing / night (Children under 12: Half Price)",
      time: "Arrive after 2pm, depart by 10am",
      features: [
        "One night camping",
        "Full facility access",
        "Bathroom & shower",
        "Kitchen & braai room"
      ],
      badge: "Popular",
      color: "from-green-100 to-emerald-100"
    },
    {
      title: "On-Site Caravan Rental",
      price: "Off-Season: R250 | In-Season: R400",
      duration: "per person sharing / night",
      time: "Arrive after 2pm, depart by 10am",
      features: [
        "Fully equipped caravan",
        "Bedding provided",
        "Access to all campsite facilities",
        "Private outdoor seating area"
      ],
      badge: "Comfort",
      color: "from-orange-100 to-amber-100"
    },
    {
      title: "Long Term Stay",
      price: "Off-Season: R1,800 | In-Season: R2,500",
      duration: "per person sharing / month (Children under 12: Half Price)",
      time: "Arrive after 2pm, depart by 10am",
      features: [
        "Immerse in nature",
        "Digital detox retreat",
        "Flower season stays",
        "Great for remote work"
      ],
      badge: "Extended Stay",
      color: "from-blue-100 to-cyan-100"
    }
  ];
        "Contact for flower season rates",
        "Custom packages available"
      ]
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Extras & Fees",
      items: [
        "Firewood available on-site",
        "No hidden fees",
        "Payment details upon booking"
      ]
    },
    {
      icon: <Info className="w-6 h-6" />,
      title: "Important Notes",
      items: [
        "No pets (wildlife protection)",
        "Service animals with advance notice",
        "Rates subject to change"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
            Rates & Pricing
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Affordable rates for off-grid camping at De Riet – Namaqualand, Northern Cape
          </p>
        </div>

        {/* Rates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {rates.map((rate, index) => (
            <Card key={index} className="border-2 border-stone-200 hover:border-green-600 transition-all duration-300 hover:shadow-xl relative overflow-hidden group">
              {rate.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 shadow-lg">
                    {rate.badge}
                  </Badge>
                </div>
              )}
              <CardHeader className={`bg-gradient-to-br ${rate.color} pb-8 pt-6`}>
                <CardTitle className="text-2xl text-stone-800">{rate.title}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-stone-900">{rate.price}</span>
                  <span className="text-sm text-stone-600 ml-2">{rate.duration}</span>
                </div>
                <p className="text-sm text-stone-600 mt-2">{rate.time}</p>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {rate.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-stone-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
            Additional Information
          </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalInfo.map((info, index) => (
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
                        <span className="text-orange-600 mr-2">•</span>
                        <span className="text-stone-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="border-2 border-orange-300 bg-gradient-to-r from-orange-50 via-amber-50 to-green-50 shadow-xl">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-stone-800 mb-4">
              Ready to Book Your Off-Grid Experience?
            </h3>
            <p className="text-stone-700 mb-6 max-w-2xl mx-auto">
              Contact us for availability, custom packages, or to inquire about group discounts 
              and flower-season rates. Pieter & Allische are here to help!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-green-700 to-orange-700 hover:from-green-800 hover:to-orange-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Contact Us to Book
                </Button>
              </Link>
              <a href="https://wa.me/27733415894" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-700 hover:bg-green-50">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp Inquiry
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Rates;
