import React from 'react';
import { Heart, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
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
              <span className="font-bold text-xl text-white">SnakeWise</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Providing educational information about snakes and first aid for snake bites.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-400 transition">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-emerald-400 transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition">Home</Link>
              </li>
              <li>
                <Link to="/snakes" className="hover:text-emerald-400 transition">Snake Catalog</Link>
              </li>
              <li>
                <Link to="/emergency" className="hover:text-emerald-400 transition">Emergency Information</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition">About Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Emergency Contacts</h3>
            <ul className="space-y-2">
              <li>
                <strong>USA:</strong> Poison Control - 1-800-222-1222
              </li>
              <li>
                <strong>Australia:</strong> Poison Info Center - 13 11 26
              </li>
              <li>
                <strong>UK:</strong> NHS - 111
              </li>
              <li>
                <Link to="/emergency" className="text-emerald-400 hover:underline">
                  View All Emergency Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SnakeWise. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0 flex items-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> for educational purposes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;