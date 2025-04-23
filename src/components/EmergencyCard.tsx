import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

interface EmergencyCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isWarning?: boolean;
}

const EmergencyCard: React.FC<EmergencyCardProps> = ({ 
  title, 
  description, 
  icon,
  isWarning = false
}) => {
  return (
    <div className={`rounded-lg p-5 shadow-md transition-transform hover:-translate-y-1 ${
      isWarning 
        ? 'bg-red-50 border-l-4 border-red-500 dark:bg-red-900/30 dark:border-red-600' 
        : 'bg-white border-l-4 border-emerald-500 dark:bg-gray-800 dark:border-emerald-600'
    }`}>
      <div className="flex items-start">
        <div className={`flex-shrink-0 p-2 rounded-full ${
          isWarning ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400' : 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400'
        }`}>
          {icon}
        </div>
        
        <div className="ml-4">
          <h3 className={`text-lg font-bold ${
            isWarning ? 'text-red-700 dark:text-red-400' : 'text-gray-800 dark:text-white'
          }`}>
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCard;