// pages/library.tsx
import { InferGetStaticPropsType } from 'next';
import { client as sanityClient } from '../sanity/lib/client';
import SearchBar from '../components/SearchBar';
import CategoryBar from '../components/CategoriesBar';
import CourseCard from '../components/CourseCard';

export const getStaticProps = async () => {
  const courses = await sanityClient.fetch('*[_type == "course"]{..., image{..., asset->}}');

  return {
    props: { courses }, // will be passed to the page component as props
    revalidate: 10 // data revalidation time in seconds
  };
};

const Library = ({ courses }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
        {courses.map((course: any) => (
          <CourseCard key={course._id} course={course}/>
        ))}
      </div>

    </div>
  );
}

export default Library;
