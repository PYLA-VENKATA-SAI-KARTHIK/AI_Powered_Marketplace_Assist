import React from 'react';
import { Bot, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-lg">
                <Bot className="w-6 h-6 text-blue-900" />
              </div>
              <span className="text-xl font-bold">ArtisanAI</span>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Connecting customers with talented local artisans through AI-powered discovery. 
              Supporting craftsmanship and creativity in your community.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-blue-100 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-blue-100 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-blue-100 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-blue-100 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#marketplace" className="text-blue-100 hover:text-white transition-colors">Marketplace</a></li>
              <li><a href="#artisans" className="text-blue-100 hover:text-white transition-colors">Artisans</a></li>
              <li><a href="#categories" className="text-blue-100 hover:text-white transition-colors">Categories</a></li>
              <li><a href="#about" className="text-blue-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">How It Works</a></li>
            </ul>
          </div>

          {/* For Artisans */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Artisans</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Sell Your Crafts</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Artisan Resources</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Support Center</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-100" />
                <span className="text-blue-100">hello@artisanai.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-100" />
                <span className="text-blue-100">1-800-ARTISAN</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-100" />
                <span className="text-blue-100">San Francisco, CA</span>
              </li>
            </ul>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-blue-900 px-6 py-2 rounded-r-full font-semibold hover:bg-blue-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center">
          <p className="text-blue-100">
            © 2025 ArtisanAI. All rights reserved. Made with ❤️ for artisans and craft lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;