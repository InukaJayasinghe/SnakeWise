import React, { useState, useEffect } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';

interface BookmarkButtonProps {
  snakeId: string;
  size?: 'sm' | 'md' | 'lg';
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ snakeId, size = 'md' }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Check if snake is bookmarked in localStorage
    const bookmarks = JSON.parse(localStorage.getItem('snakeBookmarks') || '[]');
    setIsBookmarked(bookmarks.includes(snakeId));
  }, [snakeId]);
  
  const toggleBookmark = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
    
    const bookmarks = JSON.parse(localStorage.getItem('snakeBookmarks') || '[]');
    
    if (isBookmarked) {
      // Remove bookmark
      const updatedBookmarks = bookmarks.filter((id: string) => id !== snakeId);
      localStorage.setItem('snakeBookmarks', JSON.stringify(updatedBookmarks));
      setIsBookmarked(false);
    } else {
      // Add bookmark
      const updatedBookmarks = [...bookmarks, snakeId];
      localStorage.setItem('snakeBookmarks', JSON.stringify(updatedBookmarks));
      setIsBookmarked(true);
    }
  };
  
  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'p-1.5 text-sm';
      case 'lg': return 'p-3 text-lg';
      default: return 'p-2';
    }
  };
  
  return (
    <button 
      onClick={toggleBookmark}
      className={`${getSizeClasses()} rounded-full transition-all ${
        isBookmarked 
          ? 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-400 dark:hover:bg-emerald-900' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
      } ${isAnimating ? 'scale-125' : 'scale-100'}`}
      aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
    >
      {isBookmarked ? <BookmarkCheck /> : <Bookmark />}
    </button>
  );
};

export default BookmarkButton;