import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Bookmark, AlertCircle } from 'lucide-react';
import { snakes } from '../data/snakes';
import { FilterOptions, Snake } from '../types';
import SearchFilter from '../components/SearchFilter';
import SnakeCard from '../components/SnakeCard';

const SnakesPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredSnakes, setFilteredSnakes] = useState<Snake[]>(snakes);
  const [isShowingBookmarks, setIsShowingBookmarks] = useState(false);
  const [bookmarkedSnakes, setBookmarkedSnakes] = useState<Snake[]>([]);
  
  // Extract search query from URL if present
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('search');
    
    if (searchTerm) {
      handleFilterChange({
        searchTerm,
        region: '',
        venomLevel: ''
      });
    }
  }, [location.search]);
  
  // Update bookmarked snakes when showing bookmarks
  useEffect(() => {
    if (isShowingBookmarks) {
      const bookmarks = JSON.parse(localStorage.getItem('snakeBookmarks') || '[]');
      const bookmarkedSnakes = snakes.filter(snake => bookmarks.includes(snake.id));
      setBookmarkedSnakes(bookmarkedSnakes);
    }
  }, [isShowingBookmarks]);
  
  const handleFilterChange = (filters: FilterOptions) => {
    // Update URL with search term if present
    if (filters.searchTerm) {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set('search', filters.searchTerm);
      navigate({
        pathname: location.pathname,
        search: searchParams.toString()
      }, { replace: true });
    } else if (location.search) {
      // Clear search params if search term is empty
      navigate(location.pathname, { replace: true });
    }
  
    let results = snakes;
    
    // Filter by search term
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      results = results.filter(snake => 
        snake.commonName.toLowerCase().includes(searchLower) ||
        snake.scientificName.toLowerCase().includes(searchLower) ||
        snake.description.toLowerCase().includes(searchLower)
      );
    }
    
    // Filter by region
    if (filters.region) {
      results = results.filter(snake => 
        snake.regions.includes(filters.region)
      );
    }
    
    // Filter by venom level
    if (filters.venomLevel) {
      results = results.filter(snake => 
        snake.venomLevel === filters.venomLevel
      );
    }
    
    setFilteredSnakes(results);
  };
  
  const toggleBookmarksView = () => {
    setIsShowingBookmarks(!isShowingBookmarks);
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 dark:text-white">Snake Catalog</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Explore detailed information about snake species from around the world.
            </p>
          </div>
          
          <button
            onClick={toggleBookmarksView}
            className={`mt-4 md:mt-0 flex items-center px-4 py-2 rounded-lg transition ${
              isShowingBookmarks 
                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            <Bookmark size={18} className="mr-2" />
            {isShowingBookmarks ? 'Show All Snakes' : 'Show Bookmarks'}
          </button>
        </div>
        
        <SearchFilter onFilterChange={handleFilterChange} />
        
        {isShowingBookmarks ? (
          bookmarkedSnakes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookmarkedSnakes.map(snake => (
                <SnakeCard key={snake.id} snake={snake} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex justify-center items-center w-16 h-16 bg-gray-100 rounded-full mb-4 dark:bg-gray-800">
                <Bookmark size={24} className="text-gray-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">No Bookmarks Yet</h3>
              <p className="text-gray-600 max-w-md mx-auto mb-6 dark:text-gray-400">
                Save your favorite snake species for quick reference by clicking the bookmark icon on any snake detail page.
              </p>
            </div>
          )
        ) : filteredSnakes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSnakes.map(snake => (
              <SnakeCard key={snake.id} snake={snake} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex justify-center items-center w-16 h-16 bg-gray-100 rounded-full mb-4 dark:bg-gray-800">
              <AlertCircle size={24} className="text-gray-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">No Snakes Found</h3>
            <p className="text-gray-600 max-w-md mx-auto dark:text-gray-400">
              No snake species match your current search criteria. Try adjusting your filters or search term.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SnakesPage;