// pages/library.tsx
import SearchBar from '../components/SearchBar';
import CategoryBar from '../components/CategoriesBar';

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
      {/* Category Bar */}
      <div className='mt-6 pb-2 border-b border-indigo-900'>
        <CategoryBar />
      </div>
    </div>
  );
}

export default Library;
