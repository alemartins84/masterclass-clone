// pages/library.tsx
import SearchBar from '../components/SearchBar';
import CategoryBar from '../components/CategoriesBar';
import CourseCard from '../components/CourseCard';
import { useState, useEffect } from 'react';
import { Course } from '../types/course';


const Library = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch('/api/courses')
        .then(response => response.json())
        .then(data => setCourses(data));
  }, []);

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
      <div className="py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Course Cards go here */}
        {courses.map((course, index) => <CourseCard key={course._id} course={course} isFirst={index === 0} />)}
      </div>

    </div>
  );
}

export default Library;
