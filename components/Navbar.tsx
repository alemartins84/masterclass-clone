// components/Navbar.tsx
import { useRouter } from 'next/router';
import Link from 'next/link';

import LearnAnythingIcon from '../components/icons/LearnAnythingIcon';
import DiscoverIcon from '../components/icons/DiscoverIcon';
import MyProgressIcon from '../components/icons/MyProgressIcon';
import LibraryIcon from '../components/icons/LibraryIcon';
import ArrowDownIcon from '../components/icons/ArrowDownIcon';
import Image from 'next/image';

import React, { useState, useEffect, useRef } from 'react';

const UserDropdown: React.FC = () => {
  // Sample user data (replace with real data as appropriate)
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    initials: 'J',
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);  

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="flex items-center space-x-2">        
        <span>{user.firstName}</span>
        {/* Replace this with an actual user avatar if available */}
        <div className="h-8 w-8 bg-sky-600 rounded-full flex items-center justify-center">
          {user.initials}
        </div>
        <ArrowDownIcon className={`text-white transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isDropdownOpen && (
        <div className="absolute top-full w-72 border right-0 mt-7 w-48 bg-indigo-900 border-indigo-700 rounded shadow-sm shadow-indigo-700/50 z-10">
          <a href="/profile" className="block px-4 py-2 text-white hover:bg-indigo-700">Edit Profile</a>
          <a href="/settings" className="block px-4 py-2 text-white hover:bg-indigo-700">Settings</a>          
          <button className="block w-full text-left px-4 py-2 text-white hover:bg-indigo-700">Sign Out</button>
        </div>
      )}
    </div>
  );
}

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between px-6 px-9 bg-indigo-900 text-white">
      <div className="flex-shrink-0">
        <a href='/'>
          <Image src="/mc-logo.svg" width={169} height={25} alt="Your Brand Name" className="h-8 w-auto" />
        </a>
      </div>
      <div className="flex items-center justify-center flex-grow hidden md:flex space-x-4">
        <a href="/"
          className={`flex items-center h-full space-x-2 px-4 py-6 text-white/75 hover:text-white transition-colors ${router.pathname === "/" ? "border-b-4 border-fuchsia-600" : ""}`}>
          <LearnAnythingIcon className="w-6 h-6" />
          <span>Learn Anything</span>
        </a>
        <a href="#" className="flex items-center space-x-2 px-4 py-6 text-white/75 hover:text-white transition-colors">
          <DiscoverIcon className="w-6 h-6" />
          <span>Discover</span>
        </a>
        <a href="#" className="flex items-center space-x-2 px-4 py-6 text-white/75 hover:text-white transition-colors">
        <MyProgressIcon className="w-6 h-6" />
          <span>My Progress</span>
        </a>
        <Link href="/library" 
              className={`flex items-center h-full space-x-2 px-4 py-6 text-white/75 hover:text-white transition-colors ${router.pathname === "/library" ? "border-b-4 border-fuchsia-600" : ""}`}
        >
          <LibraryIcon className="w-6 h-6" />
            <span>Library</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4 w-48"> 
        <UserDropdown />
      </div>
    </nav>
  );
}

export default Navbar;
