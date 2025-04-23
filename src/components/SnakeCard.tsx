import React from 'react';
import { Link } from 'react-router-dom';
import { Snake } from '../types';
import { AlertTriangle, Info } from 'lucide-react';

interface SnakeCardProps {
  snake: Snake;
}

const SnakeCard: React.FC<SnakeCardProps> = ({ snake }) => {
  const getDangerColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-green-100 text-green-800';
      case 2: return 'bg-blue-100 text-blue-800';
      case 3: return 'bg-yellow-100 text-yellow-800';
      case 4: return 'bg-orange-100 text-orange-800';
      case 5: return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDangerLabel = (level: number) => {
    switch (level) {
      case 1: return 'Harmless';
      case 2: return 'Low Risk';
      case 3: return 'Moderate Risk';
      case 4: return 'High Risk';
      case 5: return 'Extreme Risk';
      default: return 'Unknown';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Link to={`/snakes/${snake.id}`}>
          <img 
            src={snake.thumbnailUrl} 
            alt={snake.commonName} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {snake.dangerLevel >= 4 && (
            <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-md text-xs font-bold flex items-center">
              <AlertTriangle size={14} className="mr-1" />
              Dangerous
            </div>
          )}
        </Link>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold dark:text-white">
            <Link to={`/snakes/${snake.id}`} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">
              {snake.commonName}
            </Link>
          </h3>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDangerColor(snake.dangerLevel)}`}>
            {getDangerLabel(snake.dangerLevel)}
          </span>
        </div>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2">{snake.scientificName}</p>
        
        <div className="mb-3">
          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">{snake.description.substring(0, 100)}...</p>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-gray-600 dark:text-gray-400">{snake.regions.join(', ')}</span>
          <Link 
            to={`/snakes/${snake.id}`}
            className="flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-500 text-sm font-medium"
          >
            <Info size={16} className="mr-1" />
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SnakeCard;