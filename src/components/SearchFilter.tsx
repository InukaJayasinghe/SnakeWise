import React, { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { regions } from '../data/regions';
import { FilterOptions, VenomLevel } from '../types';

interface SearchFilterProps {
  onFilterChange: (filters: FilterOptions) => void;
}

const venomLevels: VenomLevel[] = [
  'Non-venomous',
  'Mildly venomous',
  'Moderately venomous',
  'Highly venomous',
  'Deadly venomous'
];

const SearchFilter: React.FC<SearchFilterProps> = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedVenomLevel, setSelectedVenomLevel] = useState<VenomLevel | ''>('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Debounce search term change
    const handler = setTimeout(() => {
      onFilterChange({
        searchTerm,
        region: selectedRegion,
        venomLevel: selectedVenomLevel
      });
    }, 300);

    return () => clearTimeout(handler);
  }, [searchTerm, selectedRegion, selectedVenomLevel, onFilterChange]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedRegion('');
    setSelectedVenomLevel('');
    onFilterChange({
      searchTerm: '',
      region: '',
      venomLevel: ''
    });
  };

  const hasActiveFilters = searchTerm || selectedRegion || selectedVenomLevel;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for snakes..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center px-3 py-2 border rounded-lg transition ${
              showFilters 
                ? 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-900 dark:text-emerald-300 dark:border-emerald-800' 
                : 'border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700'
            }`}
          >
            <Filter size={18} className="mr-1" />
            <span className="text-sm font-medium">Filters</span>
          </button>
          
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="flex items-center px-3 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition dark:text-red-400 dark:border-red-900 dark:hover:bg-red-900/30"
            >
              <X size={18} className="mr-1" />
              <span className="text-sm font-medium">Clear</span>
            </button>
          )}
        </div>
      </div>
      
      {showFilters && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Region</label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="">All Regions</option>
              {regions.map((region) => (
                <option key={region.name} value={region.name}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Venom Level</label>
            <select
              value={selectedVenomLevel}
              onChange={(e) => setSelectedVenomLevel(e.target.value as VenomLevel | '')}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="">All Venom Levels</option>
              {venomLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilter;