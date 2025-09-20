import React from 'react';
import { Search, Bot } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onAIAssistant: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, onSearchChange, onAIAssistant }) => {
  const aiSuggestions = [
    "Find handmade pottery for my kitchen",
    "Show me wooden furniture",
    "I need a unique gift under $100",
    "Find local jewelry makers"
  ];

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative">
        <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search products, artisans, or ask AI for help..."
          className="w-full pl-12 pr-16 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
        />
        <button
          onClick={onAIAssistant}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded-xl hover:bg-blue-800 transition-colors"
        >
          <Bot className="w-5 h-5" />
        </button>
      </div>
      
      {searchQuery && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-2xl mt-2 shadow-lg z-10">
          <div className="p-4">
            <p className="text-sm text-gray-600 mb-2">AI Suggestions:</p>
            {aiSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => onSearchChange(suggestion)}
                className="block w-full text-left p-2 hover:bg-blue-50 rounded-lg text-sm text-gray-700 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;