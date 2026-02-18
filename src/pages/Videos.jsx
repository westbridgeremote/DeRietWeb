import React from 'react';
import { Play, Youtube } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Videos = () => {
  // Placeholder video data - will be replaced with actual videos from the channel
  const videoCategories = [
    {
      title: "Campsite Tour",
      description: "Virtual tour of De Riet facilities and camping areas",
      placeholder: true
    },
    {
      title: "2023 Flower Season-Session 1",
      description: "Beautiful Flowers from the 2023 Flower Season in Namaqualand",
      placeholder: true
    },
    {
      title: "2023 Flower Season-Session 2",
      description: "Time-lapse and close-ups of the famous wildflower season in 2023",
      placeholder: true
    },
    {
      title: "2023 Flower Season-Session 3",
      description: "Stunning views of flower scenery",
      placeholder: true
    },
    {
      title: "2024 Flower Season-Session 1",
      description: "2024 Flower Season in Namaqualand",
      placeholder: true
    },
    {
      title: "2024 Flower Season-Session 2",
      description: "Namaqualand in bloom in 2024",
      placeholder: true
    }
    {
      title: "2024 Flower Season-Session 3",
      description: "Flowers in Bloom",
      placeholder: true
    }
  {
      title: "2024 Flower Season-Session 4",
      description: "2024 Flower Season in Namaqualand",
      placeholder: true
    }
  {
      title: "2024 Flower Season-Session 5",
      description: "Spring in Namaqualand",
      placeholder: true
    }
  {
      title: "2025 Flower Season-Session 1",
      description: "Blooming Namaqualand",
      placeholder: true
    }
  {
      title: "2025 Flower Season-Session 2",
      description: "Namaqualand Dressed in Flowers",
      placeholder: true
    }
  {
      title: "2025 Flower Season-Session 3",
      description: "Stunnig Namaqualand",
      placeholder: true
    }
  {
      title: "2025 Flower Season-Session 4",
      description: "Full Bloom Season Namaqualand",
      placeholder: true
    }
   ];

  return (
    <div className="min-h-screen bg-stone-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
            Videos
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Experience off-grid camping in Namaqualand through Allische's videography 
            capturing the beauty, wildlife, and tranquility of De Riet
          </p>
        </div>

        {/* YouTube Channel Card */}
        <Card className="mb-12 border-2 border-red-300 shadow-xl bg-gradient-to-r from-red-50 to-orange-50">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center flex-shrink-0">
                  <Youtube className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-800 mb-2">Watch on YouTube</h2>
                  <p className="text-stone-700 mb-3">
                    Follow Allische's channel for the latest videos from De Riet Off-Grid Campsite and Local Area
                  </p>
                  <p className="text-sm text-stone-600">
                    <span className="font-semibold">Channel:</span> Allische Botha
                  </p>
                </div>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/@allischebotha1967"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
                    <Youtube className="mr-2 h-5 w-5" />
                    Visit YouTube Channel
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Video Placeholders */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
            Featured Video Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoCategories.map((category, index) => (
              <Card key={index} className="border-2 border-stone-200 hover:border-green-600 transition-all duration-300 hover:shadow-xl group overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-stone-800 via-green-900 to-orange-900 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                      <p className="text-white text-sm font-medium px-4">Video Placeholder</p>
                    </div>
                  </div>
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMCAxMGMxLjY1NyAwIDMgMS4zNDMgMyAzcy0xLjM0MyAzLTMgMy0zLTEuMzQzLTMtMyAxLjM0My0zIDMtM3oiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-stone-800 mb-2">{category.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Embedded Example Video Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
            Sample Videos from De Riet
          </h2>
          
          <Card className="mb-8 border-2 border-orange-300 bg-gradient-to-r from-orange-50 to-amber-50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <Play className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-stone-800 mb-2">Video Embed Area</h3>
                  <p className="text-sm text-stone-700">
                    Below are placeholder video embeds. Replace the video IDs with actual videos from 
                    Allische's YouTube channel (@allischebotha1967). Each video will showcase different 
                    aspects of De Riet and Namaqualand's natural beauty.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Video Embed Placeholder 1 */}
            <Card className="border-2 border-stone-200 overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-stone-700 to-green-800 flex items-center justify-center relative">
                  <div className="text-center z-10">
                    <Youtube className="w-16 h-16 text-white mx-auto mb-3 opacity-80" />
                    <p className="text-white font-medium">YouTube Video Embed 1</p>
                    <p className="text-white/80 text-sm mt-2">Add video ID to embed</p>
                  </div>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMCAxMGMxLjY1NyAwIDMgMS4zNDMgMyAzcy0xLjM0MyAzLTMgMy0zLTEuMzQzLTMtMyAxLjM0My0zIDMtM3oiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-stone-800 mb-1">Video Title Here</h3>
                  <p className="text-sm text-stone-600">Description of the video content</p>
                </div>
              </CardContent>
            </Card>

            {/* Video Embed Placeholder 2 */}
            <Card className="border-2 border-stone-200 overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-orange-700 to-amber-800 flex items-center justify-center relative">
                  <div className="text-center z-10">
                    <Youtube className="w-16 h-16 text-white mx-auto mb-3 opacity-80" />
                    <p className="text-white font-medium">YouTube Video Embed 2</p>
                    <p className="text-white/80 text-sm mt-2">Add video ID to embed</p>
                  </div>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMCAxMGMxLjY1NyAwIDMgMS4zNDMgMyAzcy0xLjM0MyAzLTMgMy0zLTEuMzQzLTMtMyAxLjM0My0zIDMtM3oiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-stone-800 mb-1">Video Title Here</h3>
                  <p className="text-sm text-stone-600">Description of the video content</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Instructions */}
        <Card className="mb-12 border-2 border-green-300 bg-gradient-to-r from-green-50 to-stone-50">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-stone-800 mb-3">How to Add YouTube Videos</h3>
            <div className="space-y-3 text-sm text-stone-700">
              <p>
                <span className="font-semibold">Step 1:</span> Get video IDs from Allische's YouTube channel 
                (@allischebotha1967). The video ID is found in the URL after "watch?v=" 
                (e.g., youtube.com/watch?v=<span className="text-orange-600 font-mono">VIDEO_ID_HERE</span>)
              </p>
              <p>
                <span className="font-semibold">Step 2:</span> Replace placeholders with actual YouTube embeds using:
                <code className="block bg-stone-800 text-green-400 p-3 rounded mt-2 text-xs overflow-x-auto">
                  {`<iframe src="https://www.youtube.com/embed/VIDEO_ID_HERE" ...></iframe>`}
                </code>
              </p>
              <p>
                <span className="font-semibold">Step 3:</span> Add descriptive titles optimized for SEO 
                (e.g., "Namaqualand Wildflower Bloom Off-Grid Camping", "Springbok Wildlife De Riet Campsite")
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="border-2 border-orange-300 bg-gradient-to-r from-orange-50 via-amber-50 to-green-50 shadow-xl">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-stone-800 mb-4">
              Inspired by What You See?
            </h3>
            <p className="text-stone-700 mb-6 max-w-2xl mx-auto">
              Experience the magic of De Riet Off-Grid Campsite firsthand. Book your stay today and 
              create your own Namaqualand memories!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.youtube.com/@allischebotha1967"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
                  <Youtube className="mr-2 h-5 w-5" />
                  Subscribe on YouTube
                </Button>
              </a>
              <a href="https://wa.me/27733415894" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-700 hover:bg-green-50">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
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
