import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Search, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';
import { snakes } from '../data/snakes';
import SnakeCard from '../components/SnakeCard';
import { Snake } from '../types';

const HomePage: React.FC = () => {
  const [featuredSnakes, setFeaturedSnakes] = useState<Snake[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    // Get 3 random snakes for the featured section
    const randomSnakes = [...snakes]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    
    setFeaturedSnakes(randomSnakes);
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/45246/green-tree-python-python-tree-python-green-45246.jpeg" 
            alt="Hero background with snake" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Learn, Identify, Stay Safe
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Your comprehensive guide to snake species, identification, and emergency response information.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/snakes" 
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Search size={18} className="mr-2" />
                Explore Snake Species
              </Link>
              <Link 
                to="/emergency" 
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <AlertTriangle size={18} className="mr-2" />
                Emergency Information
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Search Section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">
              Quick Snake Search
            </h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter snake name (e.g., Cobra, Rattlesnake, Python...)"
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
              <Link
                to={`/snakes?search=${searchTerm}`}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
              >
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Snakes Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold dark:text-white">Featured Snake Species</h2>
            <Link 
              to="/snakes" 
              className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center dark:text-emerald-400"
            >
              View All
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSnakes.map((snake) => (
              <SnakeCard key={snake.id} snake={snake} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Educational Info Section */}
      <section className="py-16 bg-emerald-50 dark:bg-emerald-900/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 dark:text-white">
              Know Your Local Snakes
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Understanding the snakes in your area can help you stay safe and appreciate these fascinating creatures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4 dark:bg-emerald-900">
                <BookOpen size={24} className="text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Learn to Identify</h3>
              <p className="text-gray-600 mb-4 dark:text-gray-300">
                Discover key physical characteristics that can help you identify common snake species in your region.
              </p>
              <Link 
                to="/snakes" 
                className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center dark:text-emerald-400"
              >
                Explore Species
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4 dark:bg-red-900">
                <AlertTriangle size={24} className="text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Emergency Response</h3>
              <p className="text-gray-600 mb-4 dark:text-gray-300">
                Learn the proper first aid techniques for snake bites and what to do in case of an emergency.
              </p>
              <Link 
                to="/emergency" 
                className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center dark:text-emerald-400"
              >
                First Aid Guide
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 dark:bg-blue-900">
                <ExternalLink size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Expert Resources</h3>
              <p className="text-gray-600 mb-4 dark:text-gray-300">
                Access professional resources and contacts for snake education and emergency situations.
              </p>
              <Link 
                to="/emergency" 
                className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center dark:text-emerald-400"
              >
                View Resources
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Emergency CTA Banner */}
      <section className="bg-red-600 py-10 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Emergency Snake Bite?</h2>
              <p className="text-white/90">
                Quick access to emergency information and first aid procedures.
              </p>
            </div>
            <Link 
              to="/emergency" 
              className="mt-4 md:mt-0 px-6 py-3 bg-white text-red-600 font-medium rounded-lg hover:bg-gray-100 transition shadow-lg"
            >
              Emergency Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;