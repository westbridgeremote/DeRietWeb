import React from 'react';
import { Play, Youtube } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Videos = () => {
  const videoCategories = [
    {
      title: "Campsite Tour",
      description: "Virtual tour of De Riet facilities and camping areas",
      url: "https://www.youtube.com/@allischebotha1967"
    },
    {
      title: "2023 Flower Season - Session 1",
      description: "Beautiful Flowers from the 2023 Flower Season in Namaqualand",
      url: "https://www.youtube.com/@allischebotha1967"
    },
    {
      title: "2023 Flower Season - Session 2",
      description: "Time-lapse and close-ups of the famous wildflower season in 2023",
      url: "https://www.youtube.com/@allischebotha1967"
    },
    {
      title: "2023 Flower Season - Session 3",
      description: "Stunning views of flower scenery",
      url: "https://www.youtube.com/@allischebotha1967"
    },
    {
      title: "2024 Flower Season - Session 1",
      description: "2024 Flower Season in Namaqualand",
      url: "https://www.youtube.com/@allischebotha1967"
    },
    {
      title: "2024 Flower Season - Session 2",
      description: "Namaqualand in bloom in 2024",
      url: "https://www.youtube.com/@allischebotha1967"
    },
    {
      title: "2024 Flower Season - Session 3",
      description: "Flowers in Bloom",
      url: "https://www.youtube.com/@allischebotha1967"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
            Videos & Virtual Tours
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Experience the beauty of De Riet and Namaqualand through our lens.
          </p>
        </div>

        {/* Video Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {videoCategories.map((video, index) => (
            <Card key={index} className="border-none shadow-xl hover:scale-[1.02] transition-transform duration-300 bg-white">
              <div className="aspect-video bg-stone-200 flex items-center justify-center group relative overflow-hidden">
                <Play className="w-12 h-12 text-stone-400 group-hover:text-red-600 transition-colors" />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-stone-800">{video.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-sm mb-6 min-h-[40px]">
                  {video.description}
                </p>
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2">
                    <Youtube className="w-4 h-4" />
                    Watch on YouTube
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="border-2 border-orange-300 bg-gradient-to-r from-orange-50 via-amber-50 to-green-50 shadow-xl mt-16">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-stone-800 mb-4">
              Inspired by What You See?
            </h3>
            <p className="text-stone-700 mb-6 max-w-2xl mx-auto">
              Experience the magic of De Riet Off-Grid Campsite firsthand. Book your stay today and create your own Namaqualand memories!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.youtube.com/@allischebotha1967" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
                  <Youtube className="mr-2 h-5 w-5" />
                  Subscribe on YouTube
                </Button>
              </a>
              <a href="https://wa.me/27733415894" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                  Book Your Stay
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Videos;
