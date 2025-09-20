import React from 'react';
import { X, Heart, ShoppingBag, Star, MapPin } from 'lucide-react';
import { Product } from '../data/products';
import { artisans } from '../data/artisans';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onViewArtisan: (artisanId: number) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose, onViewArtisan }) => {
  if (!isOpen || !product) return null;

  const artisan = artisans.find(a => a.id === product.artisanId);

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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-2xl"
              />
              {product.originalPrice && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Sale
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-3xl font-bold text-blue-900">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
                <span className="inline-block bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              {/* Tags */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Artisan Info */}
              {artisan && (
                <div className="border-t pt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">About the Artisan</h3>
                  <div className="flex items-center space-x-4 mb-3">
                    <img
                      src={artisan.image}
                      alt={artisan.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <button
                        onClick={() => onViewArtisan(artisan.id)}
                        className="font-semibold text-blue-900 hover:text-blue-700"
                      >
                        {artisan.name}
                      </button>
                      <p className="text-sm text-gray-600">{artisan.specialty}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{artisan.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{artisan.rating} ({artisan.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex space-x-4 pt-6">
                <button className="flex-1 bg-blue-900 text-white py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2">
                  <ShoppingBag className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
                <button className="bg-gray-100 text-gray-700 p-3 rounded-full hover:bg-gray-200 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;