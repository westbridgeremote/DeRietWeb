import React from 'react';
import { Youtube } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Videos = () => {
  const videoCategories = [
    {
      title: "Namakwaland Flowers 2023",
      description: "Experience the stunning beauty of the 2023 flower season in Namaqualand.",
      videoId: "T6bU2L5UV9k"
    },
    {
      title: "Namakwaland Blomme 2023",
      description: "A closer look at the vibrant blooms that covered the landscape in 2023.",
      videoId: "QXX_uo7kw1k"
    },
    {
      title: "Namakwaland Blommeprag 2023",
      description: "Witness the magnificent floral display of the Northern Cape.",
      videoId: "_wq5KgUE-5g"
    },
    {
      title: "Flowers of Namaqualand 2024",
      description: "Highlights from the breathtaking 2024 flower season.",
      videoId: "QouxgQiGlvI"
    },
    {
      title: "Namaqua Flowers in Bloom 2024",
      description: "Vibrant colours and endless fields of flowers captured in 2024.",
      videoId: "oafJ07gZlQQ"
    },
    {
      title: "Namaqualand Flower Season 2024",
      description: "A virtual tour through the heart of the 2024 floral phenomenon.",
      videoId: "lAFL8UwbNl4"
    },
    {
      title: "Namakwaland Blomme 2025",
      description: "Early glimpses into the 2025 flower season beauties.",
      videoId: "jVJUgu1etZQ"
    },
    {
      title: "2025 Flowers of Namaqualand",
      description: "Exploring the diverse floral species of Namaqualand in 2025.",
      videoId: "_NImuVqMS1g"
    },
    {
      title: "Namaqualand Flowers July & August 2025",
      description: "The spectacular mid-season blooms of 2025.",
      videoId: "yMaxUB6iuco"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {videoCategories.map((video, index) => (
            <Card key={index} className="border-none shadow-xl hover:scale-[1.01] transition-transform duration-300 bg-white overflow-hidden">
              <div className="aspect-video bg-stone-200">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-stone-800">{video.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-sm mb-6 min-h-[40px]">
                  {video.description}
                </p>
                <a 
                  href={`https://www.youtube.com/watch?v=${video.videoId}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2">
                    <Youtube className="w-4 h-4" />
                    Watch on YouTube
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

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
