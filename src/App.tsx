import React, { useState } from 'react';
import { Bot, Filter } from 'lucide-react';
import { useSearch } from './hooks/useSearch';
import { Product } from './data/products';
import { Artisan, artisans } from './data/artisans';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';
import ArtisanCard from './components/ArtisanCard';
import ProductModal from './components/ProductModal';
import ArtisanModal from './components/ArtisanModal';
import ContactModal from './components/ContactModal';
import AIAssistant from './components/AIAssistant';

function App() {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
    searchArtisans,
    categories
  } = useSearch();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedArtisan, setSelectedArtisan] = useState<Artisan | null>(null);
  const [contactArtisan, setContactArtisan] = useState<Artisan | null>(null);
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleViewArtisan = (artisanId: number) => {
    const artisan = artisans.find(a => a.id === artisanId);
    if (artisan) {
      setSelectedArtisan(artisan);
    }
  };

  const handleContactArtisan = (artisan: Artisan) => {
    setContactArtisan(artisan);
  };

  const featuredArtisans = artisans.filter(a => a.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-900 p-2 rounded-lg">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-blue-900">ArtisanAI</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#marketplace" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
                Marketplace
              </a>
              <a href="#artisans" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
                Artisans
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">
                About
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Local <span className="text-blue-900">Artisans</span>
            <br />with AI Magic
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Connect with talented local craftspeople through our intelligent marketplace. 
            Find unique handmade products and the artisans who create them.
          </p>
          
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onAIAssistant={() => setShowAIAssistant(true)}
          />
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Results or Featured Content */}
        {searchQuery ? (
          <div className="space-y-12">
            {/* Artisan Results */}
            {searchArtisans.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Artisans ({searchArtisans.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {searchArtisans.map((artisan) => (
                    <ArtisanCard
                      key={artisan.id}
                      artisan={artisan}
                      onViewProfile={setSelectedArtisan}
                      onContactArtisan={handleContactArtisan}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Product Results */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Products ({filteredProducts.length})
                </h2>
                
                {/* Category Filter */}
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onViewProduct={handleViewProduct}
                      onViewArtisan={handleViewArtisan}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-4">No products found for your search.</p>
                  <button
                    onClick={() => setShowAIAssistant(true)}
                    className="bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors"
                  >
                    Ask AI for Help
                  </button>
                </div>
              )}
            </section>
          </div>
        ) : (
          <div className="space-y-16">
            {/* Featured Artisans */}
            <section id="artisans">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Featured Local Artisans
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredArtisans.map((artisan) => (
                  <ArtisanCard
                    key={artisan.id}
                    artisan={artisan}
                    onViewProfile={setSelectedArtisan}
                    onContactArtisan={handleContactArtisan}
                  />
                ))}
              </div>
            </section>

            {/* Featured Products */}
            <section id="marketplace">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Discover Unique Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.slice(0, 6).map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewProduct={handleViewProduct}
                    onViewArtisan={handleViewArtisan}
                  />
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Modals */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onViewArtisan={handleViewArtisan}
      />

      <ArtisanModal
        artisan={selectedArtisan}
        isOpen={!!selectedArtisan}
        onClose={() => setSelectedArtisan(null)}
        onContactArtisan={handleContactArtisan}
      />

      <ContactModal
        artisan={contactArtisan}
        isOpen={!!contactArtisan}
        onClose={() => setContactArtisan(null)}
      />

      {/* AI Assistant */}
      {showAIAssistant && (
        <AIAssistant />
      )}

      {/* Floating AI Button */}
      <button
        onClick={() => setShowAIAssistant(true)}
        className="fixed bottom-6 right-6 bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 hover:scale-110 z-30"
      >
        <Bot className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;