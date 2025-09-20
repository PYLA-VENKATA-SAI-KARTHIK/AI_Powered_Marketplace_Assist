import React from 'react';
import { MapPin, Star, Users, Award } from 'lucide-react';

const FeaturedArtisans = () => {
  const artisans = [
    {
      id: 1,
      name: "Sarah Chen",
      specialty: "Ceramic Artist",
      location: "Portland, OR",
      rating: 4.9,
      reviews: 127,
      image: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=300",
      featured: true,
      description: "Specializing in functional pottery with modern aesthetic"
    },
    {
      id: 2,
      name: "James Wilson",
      specialty: "Wood Sculptor",
      location: "Seattle, WA",
      rating: 4.8,
      reviews: 89,
      image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=300",
      featured: false,
      description: "Creating custom furniture and artistic sculptures"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      specialty: "Textile Designer",
      location: "Austin, TX",
      rating: 5.0,
      reviews: 156,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      featured: true,
      description: "Hand-woven textiles using traditional techniques"
    },
    {
      id: 4,
      name: "Alex Kumar",
      specialty: "Jewelry Maker",
      location: "San Francisco, CA",
      rating: 4.9,
      reviews: 203,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
      featured: false,
      description: "Unique metal jewelry with sustainable materials"
    }
  ];

  return (
    <section id="artisans" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Local Artisans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented craftspeople in your area. Each artisan is verified and 
            committed to creating exceptional handmade products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artisans.map((artisan) => (
            <div key={artisan.id} className="group relative">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform group-hover:scale-105">
                {artisan.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Award className="w-3 h-3" />
                    <span>Featured</span>
                  </div>
                )}
                
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300">
                  <img
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{artisan.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-600">{artisan.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-blue-900 font-semibold mb-2">{artisan.specialty}</p>
                  
                  <div className="flex items-center space-x-1 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{artisan.location}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {artisan.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{artisan.reviews} reviews</span>
                    </div>
                    <button className="bg-blue-50 text-blue-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors">
            View All Artisans
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtisans;