import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, AlertTriangle, ArrowLeft } from 'lucide-react';
import { snakes } from '../data/snakes';
import { Snake } from '../types';
import SnakeDetailHeader from '../components/SnakeDetailHeader';
import BookmarkButton from '../components/BookmarkButton';

const SnakeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [snake, setSnake] = useState<Snake | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'emergency'>('overview');
  
  useEffect(() => {
    const foundSnake = snakes.find(s => s.id === id);
    
    if (foundSnake) {
      setSnake(foundSnake);
      // Update page title with snake name
      document.title = `${foundSnake.commonName} | SnakeWise`;
    } else {
      navigate('/snakes', { replace: true });
    }
    
    return () => {
      // Reset title when leaving page
      document.title = 'SnakeWise';
    };
  }, [id, navigate]);
  
  if (!snake) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse rounded-md bg-gray-200 dark:bg-gray-800 h-6 w-24"></div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pb-16">
      <SnakeDetailHeader snake={snake} />
      
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <ArrowLeft size={20} className="mr-1" />
            <span>Back</span>
          </button>
          
          <BookmarkButton snakeId={snake.id} />
        </div>
        
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <div className="flex -mb-px">
            <button
              onClick={() => setActiveTab('overview')}
              className={`mr-4 py-3 px-1 border-b-2 font-medium text-sm transition ${
                activeTab === 'overview'
                  ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('emergency')}
              className={`py-3 px-1 border-b-2 font-medium text-sm transition flex items-center ${
                activeTab === 'emergency'
                  ? 'border-red-500 text-red-600 dark:text-red-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <span>Emergency Information</span>
              {snake.dangerLevel >= 3 && (
                <AlertTriangle size={16} className="ml-1 text-red-500" />
              )}
            </button>
          </div>
        </div>
        
        {/* Tab Content */}
        {activeTab === 'overview' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">About This Species</h2>
                <p className="text-gray-700 mb-4 leading-relaxed dark:text-gray-300">{snake.description}</p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Appearance</h2>
                <p className="text-gray-700 mb-4 leading-relaxed dark:text-gray-300">{snake.appearance}</p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Behavior</h2>
                <p className="text-gray-700 mb-4 leading-relaxed dark:text-gray-300">{snake.behavior}</p>
              </section>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 dark:text-white">Quick Facts</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-24 font-medium text-gray-600 dark:text-gray-400">Common Name</div>
                    <div className="flex-1 text-gray-800 dark:text-white">{snake.commonName}</div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-24 font-medium text-gray-600 dark:text-gray-400">Scientific</div>
                    <div className="flex-1 italic text-gray-800 dark:text-white">{snake.scientificName}</div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-24 font-medium text-gray-600 dark:text-gray-400">Venom</div>
                    <div className="flex-1 text-gray-800 dark:text-white">{snake.venomLevel}</div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-24 font-medium text-gray-600 dark:text-gray-400">Habitat</div>
                    <div className="flex-1 text-gray-800 dark:text-white">
                      {snake.habitat.join(', ')}
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-24 font-medium text-gray-600 dark:text-gray-400">Regions</div>
                    <div className="flex-1 text-gray-800 dark:text-white">
                      {snake.regions.join(', ')}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium mb-2 flex items-center dark:text-white">
                    <MapPin size={16} className="mr-1" />
                    Geographic Distribution
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    This species can be found in {snake.regions.join(', ')}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className={`p-4 mb-6 rounded-lg border-l-4 ${
                snake.dangerLevel >= 3 
                  ? 'bg-red-50 border-red-500 dark:bg-red-900/20 dark:border-red-600' 
                  : 'bg-blue-50 border-blue-500 dark:bg-blue-900/20 dark:border-blue-600'
              }`}>
                <h3 className={`text-lg font-bold mb-2 ${
                  snake.dangerLevel >= 3 ? 'text-red-700 dark:text-red-400' : 'text-blue-700 dark:text-blue-400'
                }`}>
                  {snake.dangerLevel >= 3 
                    ? 'Warning: Potentially Dangerous Snake' 
                    : 'Low-Risk Snake Species'}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{snake.emergencyInfo}</p>
              </div>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">First Aid for Bites</h2>
                <ul className="space-y-2">
                  {snake.firstAid.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 dark:bg-emerald-900 dark:text-emerald-400">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{step}</span>
                    </li>
                  ))}
                </ul>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Important Notes</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg dark:bg-yellow-900/20 dark:border-yellow-600">
                  <p className="text-gray-700 dark:text-gray-300">
                    Always seek professional medical help immediately for any snake bite, even if you believe the snake to be non-venomous. Identification can be difficult and some "harmless" bites can still cause complications.
                  </p>
                </div>
              </section>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 dark:text-white">Emergency Contacts</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">United States</h4>
                    <p className="text-gray-600 dark:text-gray-400">Poison Control: 1-800-222-1222</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">Australia</h4>
                    <p className="text-gray-600 dark:text-gray-400">Poison Information Center: 13 11 26</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">General Emergency</h4>
                    <p className="text-gray-600 dark:text-gray-400">Call your local emergency services</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium mb-2 dark:text-white">What to tell emergency services:</h4>
                  <ul className="text-sm space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• The time of the bite</li>
                    <li>• Description of the snake (if possible)</li>
                    <li>• Symptoms you're experiencing</li>
                    <li>• Your exact location</li>
                    <li>• Any first aid measures already taken</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SnakeDetailPage;