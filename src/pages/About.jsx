import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Camera } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-4">About Us</h1>
          <p className="text-xl text-stone-600">Meet Your Hosts in Namaqualand: Pieter & Allische Horn</p>
          <div className="mt-8 flex justify-center">
            <Card className="border-2 border-stone-200 overflow-hidden shadow-lg w-64 h-80">
              <img src="/images/about-hosts.jpg" alt="Pieter and Allische Horn" className="w-full h-full object-cover" />
            </Card>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-bold text-stone-800 mb-6 text-center">Our Story</h2>
          <p className="text-stone-600 leading-relaxed mb-8 text-center">
            De Riet Off-Grid Campsite is proudly run by Pieter and Allische Horn, a dedicated couple with a deep appreciation for the area's wild and beautiful landscapes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-bold text-stone-800 mb-2">Pieter Horn</h3>
                <p className="text-stone-600 text-sm">Pieter handles the practical side: designing sustainable, low-impact facilities that harmonise with the environment.</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Camera className="w-4 h-4 text-orange-500" />
                  <h3 className="font-bold text-stone-800">Allische Horn</h3>
                </div>
                <p className="text-stone-600 text-sm">Allische adds the artistic touch as a photographer with a remarkable eye for nature's minute beauty.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Giel & Mariaan Section - Fixed and Centered */}
        <div className="max-w-4xl mx-auto mb-20 border-t border-stone-200 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo Column - Pushed toward center */}
            <div className="flex justify-center lg:justify-end">
              <Card className="border-2 border-stone-200 overflow-hidden shadow-md w-64 h-80 shrink-0">
                <img src="/images/about-giel-mariaan.jpg" alt="Giel and Mariaan Botha" className="w-full h-full object-cover" />
              </Card>
            </div>
            {/* Write-up Column - Centered text on mobile, left on desktop */}
            <div className="max-w-md text-center lg:text-left">
              <h2 className="text-3xl font-bold text-stone-800 mb-4">Giel & Mariaan Botha</h2>
              <p className="text-lg text-stone-700 leading-relaxed mb-4">
                Giel and Mariaan Botha serve as trusted backup hosts, ensuring guests always receive a warm welcome when Pieter and Allische are away.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                They played an instrumental role in designing and building the campsite, bringing the vision of an authentic off-grid experience to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
