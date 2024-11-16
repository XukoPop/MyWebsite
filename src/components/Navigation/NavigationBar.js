import React from 'react';
import { 
  Home, 
  Layout, 
  Code, 
  Phone, 
  Clock 
} from 'lucide-react';

const NavigationBar = ({ currentPage, handlePageChange }) => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black p-4 flex items-center justify-center border-b border-blue-900">
      <div className="container max-w-6xl mx-auto flex items-center space-x-20">
        <span className="text-blue-400 font-bold text-xl hover:text-blue-300 transition-colors duration-300">
          Xuko
        </span>
        <div className="flex space-x-4">
          {[
            { name: 'Home', icon: <Home size={18} /> },
            { name: 'Portfolio', icon: <Layout size={18} /> },
            { name: 'Services', icon: <Code size={18} /> }, 
            { name: 'Contact', icon: <Phone size={18} /> },
            { name: 'Timeline', icon: <Clock size={18} /> },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => handlePageChange(item.name.toLowerCase())}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transform hover:scale-105 transition-all duration-300
                ${currentPage === item.name.toLowerCase() 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white' 
                  : 'text-gray-300 hover:bg-gray-800'}`}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;