// components/CategoriesBar.tsx
import React from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import CategoryCard from '../components/CategoryCard';
import CategoryIconFood from './icons/CategoryIconFood';  // Assuming you have separate SVG icon components
// ... import other icons

import { smoothScroll } from '../utils/scrollUtils';

const categories = [
  
    { icon: <CategoryIconFood />, label: 'Food' },
    { icon: <CategoryIconFood />, label: 'Arts & Entertainment' },
    { icon: <CategoryIconFood />, label: 'Music 1' },
    { icon: <CategoryIconFood />, label: 'Music 2' },
    { icon: <CategoryIconFood />, label: 'Music 3' },
    { icon: <CategoryIconFood />, label: 'Music 4' },
    { icon: <CategoryIconFood />, label: 'Music 5' },
    { icon: <CategoryIconFood />, label: 'Music 6' },
    { icon: <CategoryIconFood />, label: 'Music 7' },
    { icon: <CategoryIconFood />, label: 'Music 8' },
    { icon: <CategoryIconFood />, label: 'Music 9' },
    { icon: <CategoryIconFood />, label: 'Music 10' },
    { icon: <CategoryIconFood />, label: 'Music 11' },
    { icon: <CategoryIconFood />, label: 'Music 12' },


    // ... other categories
];

const CategoriesBar: React.FC = () => {
  
  const barRef = React.useRef<HTMLDivElement>(null);
  const scrollAmount = 200;  // The amount you want to scroll
  const duration = 300;      // Duration of the animation in milliseconds

  const scrollLeft = () => {
    if (barRef.current) {
      const target = barRef.current.scrollLeft - scrollAmount;
      smoothScroll(barRef.current, target, duration);
    }
  };

  const scrollRight = () => {
    if (barRef.current) {
        const target = barRef.current.scrollLeft + scrollAmount;
        smoothScroll(barRef.current, target, duration);
    }
  };

  return (
    <div className="relative">
      <h3 className='text-2xl text-white font-semibold'>Categories</h3>      
      <div className="absolute top-0 right-0 mt-4 z-10 flex space-x-2">
        <button onClick={scrollLeft} className="w-8 h-8 bg-indigo-950 rounded-full flex items-center justify-center text-white shadow">
          {/* Left arrow icon */}
          <ArrowLeftIcon />
        </button>
        <button onClick={scrollRight} className="w-8 h-8 bg-indigo-950 rounded-full flex items-center justify-center text-white shadow">
          {/* Right arrow icon */}
          <ArrowRightIcon />
        </button>
      </div>
      <div ref={barRef} className="flex overflow-x-scroll hide-scrollbar py-2 gap-x-2">    
        {categories.map((category, idx) => (
          <CategoryCard key={idx} icon={category.icon} label={category.label} />
        ))}
      </div>
    </div>
    
  )
};

export default CategoriesBar;
