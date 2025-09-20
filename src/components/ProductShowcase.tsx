import React from 'react';
import { Heart, ShoppingBag, Eye } from 'lucide-react';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Handcrafted Ceramic Vase",
      artisan: "Sarah Chen",
      price: 89,
      originalPrice: 120,
      image: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Pottery",
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Reclaimed Wood Coffee Table",
      artisan: "James Wilson",
      price: 450,
      image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Furniture",
      badge: "Eco-Friendly"
    },
    {
      id: 3,
      name: "Hand-Woven Wool Throw",
      artisan: "Maria Rodriguez",
      price: 125,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Textiles",
      badge: "New"
    },
    {
      id: 4,
      name: "Sterling Silver Pendant",
      artisan: "Alex Kumar",
      price: 75,
      originalPrice: 95,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Jewelry",
      badge: "Sale"
    },
    {
      id: 5,
      name: "Ceramic Dinner Set",
      artisan: "Sarah Chen",
      price: 200,
      image: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Pottery",
      badge: ""
    },
    {
      id: 6,
      name: "Macramé Wall Hanging",
      artisan: "Maria Rodriguez",
      price: 85,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Textiles",
      badge: "Trending"
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Bestseller':
        return 'bg-yellow-500 text-white';
      case 'New':
        return 'bg-green-500 text-white';
      case 'Sale':
        return 'bg-red-500 text-white';
      case 'Eco-Friendly':
        return 'bg-emerald-500 text-white';
      case 'Trending':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  return (
    <section id="marketplace" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Unique Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Every piece tells a story. Browse our curated collection of handmade products 
            from talented local artisans.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {['All', 'Pottery', 'Furniture', 'Textiles', 'Jewelry', 'Art'].map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  category === 'All'
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform group-hover:scale-105">
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  {product.badge && (
                    <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-sm font-medium ${getBadgeColor(product.badge)}`}>
                      {product.badge}
                    </div>
                  )}
                  
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100">
                    <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors transform scale-0 group-hover:scale-100 duration-300 delay-75">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors transform scale-0 group-hover:scale-100 duration-300 delay-100">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="bg-blue-900 text-white p-3 rounded-full hover:bg-blue-800 transition-colors transform scale-0 group-hover:scale-100 duration-300 delay-150">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">by {product.artisan}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-900">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;