// pages/library.tsx
import SearchBar from '../components/SearchBar';

const Library = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Search Bar */}
      <SearchBar 
        placeholder="Search Instructors, Classes, Topics and more" 
        onSearch={(query) => {
            console.log("User searched for:", query);
            // Here, you can handle the search, like making an API call.
        }}
        
      />
    </div>
  );
}

export default Library;
