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
<div className="max-w-4xl mx-auto px-4 mb-20 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Photo Column - Pulled to the right to meet the text */}
        <div className="flex justify-center lg:justify-end">
          <Card className="border-2 border-stone-200 overflow-hidden shadow-md w-64 h-80 shrink-0">
            <img 
              src="/images/about-giel-mariaan.jpg" 
              alt="Giel and Mariaan Botha"
              className="w-full h-full object-cover"
            />
          </Card>
        </div>

        {/* Write-up Column - Centered and aligned */}
        <div className="max-w-md">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Giel & Mariaan Botha</h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-4">
            Giel and Mariaan Botha serve as trusted backup hosts at De Riet Off-Grid Campsite, stepping in when Pieter and Allische are unavailable to ensure guests always receive a warm and attentive welcome.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            The couple played an instrumental role in the design and building of the campsite, helping bring the vision of an authentic off-grid experience to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
