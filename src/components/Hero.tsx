import React from 'react';
import { Sparkles, ArrowRight, Bot } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Discovery</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Discover Local
                <span className="text-blue-900"> Artisans</span>
                <br />
                with AI Magic
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Connect with talented local craftspeople through our intelligent marketplace. 
                Our AI assistant helps you find the perfect handmade products and artisans for your needs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2 group">
                <span>Start Shopping</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-900 hover:text-white transition-colors flex items-center justify-center space-x-2">
                <Bot className="w-4 h-4" />
                <span>Try AI Assistant</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900">500+</div>
                <div className="text-sm text-gray-600">Local Artisans</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900">10k+</div>
                <div className="text-sm text-gray-600">Unique Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-900">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4"></div>
                  <h3 className="font-semibold text-gray-900">Handcrafted Pottery</h3>
                  <p className="text-sm text-gray-600">by Sarah Chen</p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg mb-4"></div>
                  <h3 className="font-semibold text-gray-900">Woven Textiles</h3>
                  <p className="text-sm text-gray-600">by Maria Rodriguez</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-24 bg-gradient-to-br from-blue-300 to-blue-400 rounded-lg mb-4"></div>
                  <h3 className="font-semibold text-gray-900">Wood Sculpture</h3>
                  <p className="text-sm text-gray-600">by James Wilson</p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg mb-4"></div>
                  <h3 className="font-semibold text-gray-900">Metal Jewelry</h3>
                  <p className="text-sm text-gray-600">by Alex Kumar</p>
                </div>
              </div>
            </div>
            
            {/* AI Assistant Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-blue-900 text-white p-3 rounded-full shadow-lg animate-pulse">
              <Bot className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;