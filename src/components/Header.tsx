import React, { useState, useEffect } from 'react';
import { Menu, Search, Moon, Sun, BookOpen, AlertTriangle, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-white"
              >
                <path d="M10.5 8.5c0 1.5-2 3-2 3l4-1 2 .5"></path>
                <path d="M3 12c0 4.4 4.5 8 10 8s9-3.6 9-8-3-8-9-8-10 3.6-10 8Z"></path>
                <path d="M11.5 3.5c.5-1.7.8-2.5 2-2.5s1.5 0 2 2c.5 0 .8.5.8.8s-.3.7-.8.7c-2 0-2.5-.5-3-1"></path>
              </svg>
            </div>
            <span className="font-bold text-xl text-emerald-800 dark:text-emerald-400">SnakeWise</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`hover:text-emerald-600 font-medium transition ${location.pathname === '/' ? 'text-emerald-700 dark:text-emerald-500' : 'text-gray-700 dark:text-gray-300'}`}>
              <span className="flex items-center gap-1"><Home size={18} /> Home</span>
            </Link>
            <Link to="/snakes" className={`hover:text-emerald-600 font-medium transition ${location.pathname.includes('/snakes') ? 'text-emerald-700 dark:text-emerald-500' : 'text-gray-700 dark:text-gray-300'}`}>
              <span className="flex items-center gap-1"><BookOpen size={18} /> Snake Catalog</span>
            </Link>
            <Link to="/emergency" className={`hover:text-emerald-600 font-medium transition ${location.pathname === '/emergency' ? 'text-emerald-700 dark:text-emerald-500' : 'text-gray-700 dark:text-gray-300'}`}>
              <span className="flex items-center gap-1"><AlertTriangle size={18} /> Emergency</span>
            </Link>
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition mr-2"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white dark:bg-gray-900 border-t dark:border-gray-800">
            <nav className="flex flex-col space-y-4 px-4">
              <Link to="/" className={`py-2 px-3 rounded-md ${location.pathname === '/' ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-400' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                <span className="flex items-center gap-2"><Home size={18} /> Home</span>
              </Link>
              <Link to="/snakes" className={`py-2 px-3 rounded-md ${location.pathname.includes('/snakes') ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-400' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                <span className="flex items-center gap-2"><BookOpen size={18} /> Snake Catalog</span>
              </Link>
              <Link to="/emergency" className={`py-2 px-3 rounded-md ${location.pathname === '/emergency' ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-400' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                <span className="flex items-center gap-2"><AlertTriangle size={18} /> Emergency</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;