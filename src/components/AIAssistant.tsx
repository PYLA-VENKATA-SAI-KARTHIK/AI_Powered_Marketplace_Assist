import React, { useState } from 'react';
import { Bot, Send, MessageCircle, X } from 'lucide-react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const suggestions = [
    "Find handmade pottery for my kitchen",
    "Show me local jewelry makers",
    "I need a custom wooden table",
    "Find eco-friendly textile artists"
  ];

  return (
    <>
      {/* Floating AI Assistant Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 hover:scale-110 z-40"
      >
        <Bot className="w-6 h-6" />
      </button>

      {/* AI Assistant Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-6">
          <div className="bg-white rounded-2xl shadow-2xl w-96 h-[500px] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-900 p-2 rounded-full">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">AI Assistant</h3>
                  <p className="text-sm text-green-600">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-6 space-y-4 overflow-y-auto">
              <div className="bg-blue-50 p-4 rounded-2xl rounded-bl-sm">
                <p className="text-gray-800">
                  Hi! I'm your AI shopping assistant. I can help you find the perfect artisan products. 
                  What are you looking for today?
                </p>
              </div>

              {/* Suggestions */}
              <div className="space-y-2">
                <p className="text-sm text-gray-600 font-medium">Try asking me:</p>
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => setMessage(suggestion)}
                    className="w-full text-left p-3 bg-gray-50 hover:bg-blue-50 rounded-lg text-sm text-gray-700 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-6 border-t border-gray-100">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask me anything about artisan products..."
                  className="flex-1 p-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-900 text-white p-3 rounded-full hover:bg-blue-800 transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;