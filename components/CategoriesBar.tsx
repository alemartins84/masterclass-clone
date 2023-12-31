// components/CategoriesBar.tsx
import React from 'react';
import { useState, useEffect } from 'react';
import { Category } from '../types/sharedTypes';
import { client as sanityClient } from '../sanity/lib/client';


import ArrowRightIcon from './icons/ArrowRightIcon';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import CategoryCard from '../components/CategoryCard';

import { smoothScroll } from '../utils/scrollUtils';


function CategoriesBar() {

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient.fetch('*[_type == "category"]{ ..., icon{asset->{url}} }')
      .then(data => {
        setCategories(data);

      })
      .catch(error => console.error(error));
  }, []);
  
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
      {categories.map((category) => (
        <CategoryCard key={category._id} category={category} />
      ))}
      </div>
    </div>
    
  )
};

export default CategoriesBar;
