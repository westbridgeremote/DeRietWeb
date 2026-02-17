import React from 'react';
import { Camera, Heart } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
            About Us
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Meet Your Hosts in Namaqualand: Pieter & Allische Horn
          </p>
        </div>

        {/* Main Content */}
       <div className="... items-center mb-16">
         <div className="flex justify-center items-center">
  <Card className="border-2 border-green-200 overflow-hidden w-56">
    <img 
      src="/images/about-pieter-allische.jpg" 
      alt="Pieter and Allische Horn" 
      className="w-full h-80 object-cover object-top"
    />
  </Card>
</div>
         </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-4">
                Our Story
              </h2>
              <p className="text-lg text-stone-700 leading-relaxed mb-4">
                De Riet Off-Grid Campsite is proudly run by <span className="font-semibold">Pieter and Allische Horn</span>, 
                a dedicated couple with a deep appreciation for the area's wild and beautiful landscapes. With their experience of 
                exploring Namaqualand's remote trails, beaches, and flower fields, they've created this off-grid 
                haven to share the region's untouched beauty with fellow nature lovers.
              </p>
            </div>

            <Card className="border-2 border-stone-200 bg-gradient-to-br from-stone-50 to-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-stone-800 mb-3">Pieter Horn</h3>
                <p className="text-stone-700 leading-relaxed">
                  Pieter handles the practical side: designing sustainable, low-impact facilities that harmonise 
                  with the environment while ensuring smooth off-grid operations – from water systems to site maintenance. 
                  His intimate knowledge of the area helps guests find the best wildlife spots, hiking paths, and 
                  seasonal highlights.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-stone-200 bg-gradient-to-br from-orange-50 to-amber-50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 mb-3">
                  <Camera className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-stone-800">Allische Horn</h3>
                </div>
                <p className="text-stone-700 leading-relaxed">
                  Allische adds the artistic touch as a photographer with a remarkable eye for nature's 
                  minute beauty and details. She captures the subtle wonders of Namaqualand – tiny flower petals, antelope silhouettes 
                  at dawn, starry nights over tents, and intricate reptile patterns – many featured in our gallery. 
                  Her images inspire visitors to appreciate the minute beauty of this semi-desert paradise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 mt-16">
  <div className="space-y-6">
    <Card className="border-2 border-green-200 overflow-hidden">
      <img 
        src="/images/about-giel-mariaan.jpg" 
        alt="Giel and Mariaan Botha" 
        className="w-64 h-80 object-cover mx-auto rounded-lg"
      />
    </Card>
  </div>
  <div>
    <div>
      <h2 className="text-3xl font-bold text-stone-800 mb-4">
        Giel & Mariaan Botha
      </h2>
      <p className="text-lg text-stone-700 leading-relaxed mb-4">
        Giel and Mariaan Botha serve as trusted backup hosts at De Riet 
        Off-Grid Campsite, stepping in when Pieter and Allische are unavailable 
        to ensure guests always receive a warm and attentive welcome.
      </p>
      <p className="text-lg text-stone-700 leading-relaxed">
        The couple played an instrumental role in the design and building of 
        the campsite, helping bring the vision of an authentic off-grid 
        experience to life.
      </p>
    </div>
  </div>
</div>
        {/* Philosophy Section */}
        <div className="mb-16">
          <Card className="border-2 border-green-300 shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-stone-800 mb-6 text-center">
                Our Philosophy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-stone-800 mb-2">Eco-Friendly</h3>
                  <p className="text-sm text-stone-600">
                    We prioritise sustainable, low-impact camping that respects the fragile Namaqualand ecosystem
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-stone-800 mb-2">Personal Service</h3>
                  <p className="text-sm text-stone-600">
                    Visiting the site regularly, we're always available for tips, braai chats, or assistance
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-stone-800 mb-2">Passion for Nature</h3>
                  <p className="text-sm text-stone-600">
                    We love this land and are excited to share its magic with you
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quote */}
        <div className="text-center mb-16">
          <Card className="border-2 border-orange-300 bg-gradient-to-r from-orange-50 via-amber-50 to-green-50 shadow-lg">
            <CardContent className="p-8">
              <blockquote className="text-2xl font-medium text-stone-800 italic mb-4">
                "There's no Wi-Fi here, but we promise you will find a better connection."
              </blockquote>
              <p className="text-stone-600 font-medium">— Pieter & Allische Horn</p>
            </CardContent>
          </Card>
        </div>
        {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <Card className="border-2 border-stone-200 hover:border-green-600 transition-all duration-300">
    <CardContent className="p-6">
      <h3 className="text-xl font-bold text-stone-800 mb-4">Local Expertise</h3>
      <p className="text-stone-700 leading-relaxed">
        Our time exploring Namaqualand have given us deep insights into the best times to visit,
        hidden gems to discover, and how to make the most of your off-grid experience. We know
        where the Springbok graze, when the flowers bloom brightest, and which sunset spots take
        your breath away.
      </p>
    </CardContent>
  </Card>

  <Card className="border-2 border-stone-200 hover:border-green-600 transition-all duration-300">
    <CardContent className="p-6">
      <h3 className="text-xl font-bold text-stone-800 mb-4">Community Connection</h3>
      <p className="text-stone-700 leading-relaxed">
        We're proud members of the local community and work closely with local suppliers for
        fresh goods and guides for tours and activities. Our connections help us arrange shipwreck
        tours, beach excursions, fishing trips, and flower hikes that showcase the best of the
        Northern Cape's west coast.
      </p>
    </CardContent>
  </Card>

  <Card className="border-2 border-stone-200 hover:border-green-600 transition-all duration-300">
    <CardContent className="p-6">
      <h3 className="text-xl font-bold text-stone-800 mb-4">The Van Niekerk Family</h3>
      <p className="text-stone-700 leading-relaxed">
        De Riet Off-Grid Campsite exists on land owned by the Van Niekerk family, whose deep
        connection to this corner of Namaqualand stretches back generations. It was their
        steadfast support of the vision behind De Riet that made the campsite a reality.
      </p>
    </CardContent>
  </Card>
    </div>
  </div>
</div>
  );
};

export default About;
