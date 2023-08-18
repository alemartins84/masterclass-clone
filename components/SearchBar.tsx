// components/SearchBar.tsx
import { FC, useState } from 'react';  // Directly import useState and FC
import SearchIcon from './icons/SearchIcon';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ placeholder = "Search...", onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleSearch = () => {
      if (onSearch) {
          onSearch(searchQuery);
      }
  };

  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <SearchIcon className={`absolute left-0 top-1/2 transform -translate-y-1/2 ${isFocused ? 'text-black' : 'text-gray-600'}`} />
      </div>
      <input 
        type="text" 
        placeholder={placeholder}
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full pl-12 p-4 border rounded border-indigo-900 bg-indigo-950 focus:bg-white focus:text-black focus:shadow-outline" 
      />
    </div>
  );
}

export default SearchBar;