import React from 'react';
import { Link } from 'react-router-dom';
import { Tent, Mountain, Flower, Bird, Sun, MapPin, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const features = [
    {
      icon: <Tent className="w-8 h-8" />,
      title: "Off-Grid Camping",
      description: "Authentic tent and caravan sites with no electricity - pure tranquility under starry skies"
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "Rugged Landscapes",
      description: "Stunning Namaqualand scenery with mountains, plains, and dramatic sunsets"
    },
    {
      icon: <Flower className="w-8 h-8" />,
      title: "Flower Season",
      description: "Witness the famous wildflower bloom (August-September) - one of nature's greatest shows"
    },
    {
      icon: <Bird className="w-8 h-8" />,
      title: "Wildlife Spotting",
      description: "See Springbok, Gemsbok, Oryx, Rooihartebeest, Steenbok, diverse birds, and reptiles in their natural habitat"
    }
  ];

  const facilities = [
    "Clean bathroom facilities",
    "Heated showers",
    "Communal kitchen",
    "Dedicated braai room",
    "Spacious camping areas",
    "Low-impact environment"
  ];

  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
  <section 
  className="relative text-white overflow-hidden"
  style={{
    backgroundImage: 'url(/images/home-hero-flowers.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    imageRendering: '-webkit-optimize-contrast'
  }}
>
  }}
>
        <div className="absolute inset-0 bg-black opacity-30">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              De Riet Off-Grid Campsite
            </h1>
            <p className="text-xl sm:text-2xl text-orange-200 mb-4 font-medium">
              Authentic Off-Grid Camping near Koingnaas, Namaqualand in the Northern Cape
            </p>
            <p className="text-lg text-stone-200 mb-8 leading-relaxed">
              Discover true off-grid camping in the heart of Namaqualand, South Africa. 
              Located just 15km from Koingnaas on the wild west coast, unplug from the city 
              and reconnect with nature at our rustic campsite.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Phone className="mr-2 h-5 w-5" />
                  Book Your Stay
                </Button>
              </Link>
              <Link to="/rates">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 hover:text-white transition-all duration-300">
                  View Rates
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center text-sm text-stone-300">
              <MapPin className="w-4 h-4 mr-2" />
              <span>GPS: 30.146068, 17.347459</span>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#fafaf9"/>
          </svg>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-4">
              Experience Namaqualand's Natural Beauty
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Surrounded by breathtaking landscapes, mountains, vast plains, and dramatic sunsets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 border-stone-200 hover:border-green-600 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-100 to-orange-100 text-green-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-3">{feature.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-6">
                Pure Off-Grid Tranquility
              </h2>
              <p className="text-lg text-stone-700 mb-4 leading-relaxed">
                No grid electricity means pure peace – only the sounds of wind, wildlife, 
                and far-off waves from the nearby Atlantic. Our off-grid setup includes essential 
                comforts for an unforgettable experience. A generator is on site to provide for essential electrical needs.
              </p>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                Perfect for weekend getaways, long retreats, digital detoxes, or flower-season 
                adventures. Whether you're seeking caravan camping near Koingnaas or tent camping 
                in Northern Cape's outback, De Riet delivers raw, authentic off-grid living.
              </p>
              <Link to="/about">
                <Button className="bg-green-700 hover:bg-green-800 text-white">
                  Meet Pieter & Allische
                </Button>
              </Link>
            </div>

            <div>
              <Card className="border-2 border-green-200 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center">
                    <Sun className="w-6 h-6 mr-2 text-orange-500" />
                    Our Facilities
                  </h3>
                  <ul className="space-y-3">
                    {facilities.map((facility, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-stone-700">{facility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-green-900 via-amber-900 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready for Your Namaqualand Adventure?
          </h2>
          <p className="text-xl text-orange-200 mb-8 leading-relaxed">
            Contact Pieter & Allische today to book your stay at De Riet Off-Grid Campsite. 
            Experience the magic of Namaqualand's wilderness.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+27733415894">
              <Button size="lg" className="bg-white text-green-900 hover:bg-stone-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="mr-2 h-5 w-5" />
                +27 73 341 5894
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 hover:text-white transition-all duration-300">
                Contact Form
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
