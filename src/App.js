import React, { useState } from 'react';
import { 
  Globe, 
  Home, 
  User, 
  Phone, 
  Clock, 
  Music, 
  Shield, 
  Layout, 
  Mail, 
  Instagram, 
  Github, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Code, 
  Terminal, 
  Brain, 
  CheckCircle2, 
  ChartLineUp, 
  Rocket, 
  ChevronRight,
  Bot, 
  MessageSquare, 
  ClipboardList, 
  CheckCircle, 
  HeartHandshake, 
  Check
} from 'lucide-react';

// Updated import paths to match your file structure
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import TimelinePage from './pages/TimelinePage';
import ServicesPage from './pages/ServicesPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isPageChanging, setIsPageChanging] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right');

  const pageOrder = ['home', 'portfolio', 'services', 'contact', 'timeline'];

  const handlePageChange = (newPage) => {
    const currentIndex = pageOrder.indexOf(currentPage);
    const newIndex = pageOrder.indexOf(newPage);
    setSlideDirection(newIndex > currentIndex ? 'left' : 'right');
    
    setIsPageChanging(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsPageChanging(false);
    }, 300);
  };

  const pages = {
    home: <HomePage />,
    portfolio: <PortfolioPage />,
    services: <ServicesPage />,
    contact: <ContactPage />,
    timeline: <TimelinePage />
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <NavigationBar 
        currentPage={currentPage} 
        handlePageChange={handlePageChange} 
      />
      <main className="relative min-h-screen">
        <div 
          className={`
            absolute w-full transition-all duration-300 transform
            ${isPageChanging 
              ? slideDirection === 'left'
                ? '-translate-x-full opacity-0'
                : 'translate-x-full opacity-0'
              : 'translate-x-0 opacity-100'
            }
          `}
        >
          {pages[currentPage]}
        </div>
      </main>

      {/* Animation Styles */}
      <style jsx global>{`
        .fade-slide-in {
          animation: fadeSlideIn 0.5s ease-out;
        }

        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out;
          animation-fill-mode: both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default App;