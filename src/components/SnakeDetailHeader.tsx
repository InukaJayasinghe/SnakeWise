import React from 'react';
import { AlertCircle, MapPin, FileText } from 'lucide-react';
import { Snake } from '../types';

interface SnakeDetailHeaderProps {
  snake: Snake;
}

const SnakeDetailHeader: React.FC<SnakeDetailHeaderProps> = ({ snake }) => {
  const getDangerBadgeColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-green-100 text-green-800 border-green-200';
      case 2: return 'bg-blue-100 text-blue-800 border-blue-200';
      case 3: return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 4: return 'bg-orange-100 text-orange-800 border-orange-200';
      case 5: return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getDangerText = (level: number) => {
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
    <div className="relative">
      <div className="w-full h-[40vh] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        <img 
          src={snake.imageUrl} 
          alt={snake.commonName} 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 text-white">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-end justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {snake.commonName}
                </h1>
                <p className="text-lg md:text-xl italic text-gray-200 mb-4">
                  {snake.scientificName}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getDangerBadgeColor(snake.dangerLevel)}`}>
                    <AlertCircle size={16} className="mr-1" /> 
                    {getDangerText(snake.dangerLevel)}
                  </span>
                  
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 border border-white/30 backdrop-blur-sm">
                    <FileText size={16} className="mr-1" /> 
                    {snake.venomLevel}
                  </span>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0">
                <div className="flex items-center text-sm text-gray-200">
                  <MapPin size={16} className="mr-1" />
                  <span>Habitat: {snake.habitat.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnakeDetailHeader;