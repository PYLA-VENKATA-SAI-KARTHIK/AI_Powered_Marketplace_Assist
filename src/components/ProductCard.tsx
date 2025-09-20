import React from 'react';
import { Heart, ShoppingBag, Eye, MapPin } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onViewProduct: (product: Product) => void;
  onViewArtisan: (artisanId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewProduct, onViewArtisan }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105">
      <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
        {product.originalPrice && (
          <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Sale
          </div>
        )}
        
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100">
          <button
            onClick={() => onViewProduct(product)}
            className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors transform scale-0 group-hover:scale-100 duration-300 delay-75"
          >
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
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors">
            {product.name}
          </h3>
          <button
            onClick={() => onViewArtisan(product.artisanId)}
            className="text-sm text-blue-900 hover:text-blue-700 font-medium"
          >
            by {product.artisanName}
          </button>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

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
  );
};

export default ProductCard;