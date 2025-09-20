import React from 'react';
import { Palette, Hammer, Scissors, Gem, TreePine, Camera } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      icon: Palette,
      name: "Art & Painting",
      count: 145,
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Hammer,
      name: "Woodworking",
      count: 89,
      color: "from-amber-400 to-amber-600"
    },
    {
      icon: Scissors,
      name: "Textiles",
      count: 203,
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: Gem,
      name: "Jewelry",
      count: 167,
      color: "from-emerald-400 to-emerald-600"
    },
    {
      icon: TreePine,
      name: "Ceramics",
      count: 124,
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Camera,
      name: "Photography",
      count: 78,
      color: "from-gray-400 to-gray-600"
    }
  ];

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore different crafts and find exactly what you're looking for. 
            Our AI assistant can help you discover new categories too.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className={`h-32 bg-gradient-to-br ${category.color} relative`}>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.count} products
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 inline-block">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-600 mb-4">
              Ask our AI assistant to help you discover new categories and products
            </p>
            <button className="bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors">
              Ask AI Assistant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;