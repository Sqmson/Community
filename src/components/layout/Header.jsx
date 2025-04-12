import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              RisePoint
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-1">
              {['Home', 'About', 'Programs', 'Dashboard'].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="relative px-4 py-2 rounded-md text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <div className="relative group px-4 py-2 rounded-md text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50 cursor-pointer flex items-center">
                  <span>Resources</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                  <div className="absolute top-full left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48">
                    <Link to="/blog" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      Blog
                    </Link>
                    <Link to="/faq" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      FAQ
                    </Link>
                    <Link to="/support" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      Support
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Link to="/login" className="hidden md:flex items-center px-4 py-2 text-gray-700 font-medium border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <User className="mr-2 h-4 w-4" />
              Log In
            </Link>
            <Link to="/signup" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg">
              Sign Up
            </Link>
            <button 
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-2">
          <nav className="py-2">
            <ul className="space-y-2">
              {['Home', 'About', 'Programs', 'Dashboard', 'Resources'].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="block px-4 py-2 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-md"
                    onClick={toggleMenu}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4 flex flex-col space-y-2">
            <Link 
              to="/login"
              className="w-full px-4 py-2 text-center text-gray-700 font-medium border border-gray-300 rounded-md"
              onClick={toggleMenu}
            >
              Log In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;