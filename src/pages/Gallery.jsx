import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent } from '../components/ui/card';
import { ImageIcon } from 'lucide-react';

const Gallery = () => {
  const categories = [
    {
      id: 'campsite',
      label: 'Campsite',
      description: 'Rustic tents, caravans, braai areas, and facilities in the vast Namaqualand landscape',
      altPrefix: 'De Riet campsite off-grid camping Namaqualand',
      count: 8
    },
    {
      id: 'antelope',
      label: 'Antelope',
      description: 'Springbok and Klipspringer roaming free near Koingnaas',
      altPrefix: 'Springbok Klipspringer antelope wildlife Namaqualand',
      count: 6
    },
    {
      id: 'flowers',
      label: 'Flowers',
      description: 'Namaqualand flower season blooms – vibrant wildflower carpets (August-September)',
      altPrefix: 'Namaqualand wildflower season blooms Northern Cape',
      count: 10
    },
    {
      id: 'birds',
      label: 'Birds',
      description: 'Local and migrant bird species in semi-desert habitat',
      altPrefix: 'Birds birdwatching Namaqualand Northern Cape',
      count: 6
    },
    {
      id: 'reptiles',
      label: 'Reptiles',
      description: 'Lizards, tortoises, and snakes in natural Northern Cape setting',
      altPrefix: 'Reptiles lizards wildlife Namaqualand Northern Cape',
      count: 5
    },
    {
      id: 'landscapes',
      label: 'Landscapes',
      description: 'Sunsets, stars, coastal views, mountains, and semi-desert plains',
      altPrefix: 'Namaqualand landscape sunset stars west coast',
      count: 8
    }
  ];

  // Available photos organized by category
  const categoryPhotos = {
    antelope: [
      { src: '/images/gallery/antelope/gemsbok-1.png', alt: 'Gemsbok antelope running with wildflowers Namaqualand off-grid camping' }
    ],
    campsite: [],
    flowers: [],
    birds: [],
    reptiles: [],
    landscapes: []
  };

  const PhotoPlaceholder = ({ category, index }) => {
    const photos = categoryPhotos[category.id] || [];
    const photo = photos[index];

    if (photo) {
      return (
        <Card className="overflow-hidden border-2 border-stone-200 hover:border-green-600 transition-all duration-300 hover:shadow-xl group cursor-pointer">
          <div className="aspect-[4/3] relative overflow-hidden bg-stone-100">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm font-medium">Photo by Allische Botha</p>
              </div>
            </div>
          </div>
        </Card>
      );
    }

    return (
      <Card className="overflow-hidden border-2 border-stone-200 hover:border-green-600 transition-all duration-300 hover:shadow-xl group cursor-pointer">
        <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 via-green-100 to-orange-100 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMCAxMGMxLjY1NyAwIDMgMS4zNDMgMyAzcy0xLjM0MyAzLTMgMy0zLTEuMzQzLTMtMyAxLjM0My0zIDMtM3oiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>
          <div className="text-center z-10">
            <ImageIcon className="w-16 h-16 text-stone-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
            <p className="text-sm font-medium text-stone-600">Photo Placeholder {index + 1}</p>
            <p className="text-xs text-stone-500 mt-1 px-4">
              {category.altPrefix}
            </p>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
            Gallery
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Explore stunning photography by Allische capturing life at De Riet Off-Grid Campsite – 
            from wildlife and wildflowers to campsite scenes and Namaqualand landscapes
          </p>
        </div>

        {/* Photo Upload Notice */}
        <Card className="mb-8 border-2 border-orange-300 bg-gradient-to-r from-orange-50 to-amber-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <ImageIcon className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-stone-800 mb-2">Photo Upload Area</h3>
                <p className="text-sm text-stone-700">
                  Placeholders below indicate where your beautiful Namaqualand photos will be displayed. 
                  Each section is organized for easy photo management – campsite, wildlife, flowers, birds, reptiles, and landscapes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gallery Tabs */}
        <Tabs defaultValue="campsite" className="w-full">
          <TabsList className="grid grid-cols-3 lg:grid-cols-6 gap-2 mb-8 h-auto bg-transparent">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-700 data-[state=active]:to-orange-700 data-[state=active]:text-white border-2 border-stone-300 data-[state=active]:border-transparent py-3 px-4 text-sm font-medium transition-all duration-300 hover:border-green-600"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-stone-800 mb-2">{category.label}</h2>
                <p className="text-stone-600">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: category.count }).map((_, index) => (
                  <PhotoPlaceholder key={index} category={category} index={index} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Instructions */}
        <Card className="mt-12 border-2 border-green-300 bg-gradient-to-r from-green-50 to-stone-50">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-stone-800 mb-3">How to Add Your Photos</h3>
            <p className="text-sm text-stone-700 mb-3">
              Replace the placeholders above with your actual images. Each placeholder shows the recommended 
              alt text for SEO optimization (focusing on keywords like "off-grid camping Namaqualand", 
              "wildflower season", etc.).
            </p>
            <p className="text-sm text-stone-700">
              <span className="font-semibold">Recommended:</span> Use high-quality images (1200px+ width) 
              in JPEG or WebP format. Compress images before upload for optimal website performance.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Gallery;
