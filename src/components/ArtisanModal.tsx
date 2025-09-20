import React from 'react';
import { X, MapPin, Star, Users, MessageCircle, Mail, Phone } from 'lucide-react';
import { Artisan } from '../data/artisans';
import { products } from '../data/products';

interface ArtisanModalProps {
  artisan: Artisan | null;
  isOpen: boolean;
  onClose: () => void;
  onContactArtisan: (artisan: Artisan) => void;
}

const ArtisanModal: React.FC<ArtisanModalProps> = ({ artisan, isOpen, onClose, onContactArtisan }) => {
  if (!isOpen || !artisan) return null;

  const artisanProducts = products.filter(p => p.artisanId === artisan.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <img
                src={artisan.image}
                alt={artisan.name}
                className="w-32 h-32 rounded-2xl object-cover mx-auto md:mx-0"
              />
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{artisan.name}</h1>
                <p className="text-xl text-blue-900 font-semibold mb-3">{artisan.specialty}</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{artisan.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{artisan.rating} rating</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{artisan.reviews} reviews</span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <button
                    onClick={() => onContactArtisan(artisan)}
                    className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition-colors flex items-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Contact</span>
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </button>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed">{artisan.description}</p>
            </div>

            {/* Products */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Products ({artisanProducts.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {artisanProducts.map((product) => (
                  <div key={product.id} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-900">${product.price}</span>
                      <span className="text-xs bg-white text-gray-600 px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanModal;