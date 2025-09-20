import React from 'react';
import { MapPin, Star, Users, Award, MessageCircle } from 'lucide-react';
import { Artisan } from '../data/artisans';

interface ArtisanCardProps {
  artisan: Artisan;
  onViewProfile: (artisan: Artisan) => void;
  onContactArtisan: (artisan: Artisan) => void;
}

const ArtisanCard: React.FC<ArtisanCardProps> = ({ artisan, onViewProfile, onContactArtisan }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105">
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

        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
          {artisan.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1 text-gray-500">
            <Users className="w-4 h-4" />
            <span className="text-sm">{artisan.reviews} reviews</span>
          </div>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => onViewProfile(artisan)}
            className="flex-1 bg-blue-50 text-blue-900 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
          >
            View Profile
          </button>
          <button
            onClick={() => onContactArtisan(artisan)}
            className="bg-blue-900 text-white p-2 rounded-full hover:bg-blue-800 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtisanCard;