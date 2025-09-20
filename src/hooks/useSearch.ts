import { useState, useMemo } from 'react';
import { products, Product } from '../data/products';
import { artisans, Artisan } from '../data/artisans';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query)) ||
        product.artisanName.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const searchArtisans = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return artisans.filter(artisan =>
      artisan.name.toLowerCase().includes(query) ||
      artisan.specialty.toLowerCase().includes(query) ||
      artisan.location.toLowerCase().includes(query) ||
      artisan.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const categories = ['All', 'Pottery', 'Furniture', 'Textiles', 'Jewelry'];

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
    searchArtisans,
    categories
  };
};