// pages/courses/[id].tsx

import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import { client as sanityClient } from '../../sanity/lib/client';

import { useEffect, useState } from 'react';
import CourseBanner from '../../components/course/CourseBanner';

type CourseProps = {
  initialCourse: {
    _id: string;
    slug: string;
    title: string;
    instructorName: string;
    description: string;
    imageUrl: string;
  };
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { slug } = context.params as { slug: string };
  
  // Fetch the course data from Sanity based on the slug
  const course = await sanityClient.fetch('*[_type == "course" && slug.current == $slug][0]', { slug });

  // If course not found, return a 404 page
  if (!course) {
    return {
      notFound: true,
    };
  }

  return {
    props: { initialCourse: course },
  };
};

const SingleCoursePage: React.FC<CourseProps> = ({ initialCourse }) => {
  
  const [course] = useState(initialCourse);
  
  return (
    <div>
      {/* Course Banner */}
      <CourseBanner
        title={course?.title}
        instructorName={course?.instructorName}
        description={course?.description}
        imageUrl={course?.imageUrl}
      />
      

      {/* Course Series List 
      <div className="grid grid-cols-2 gap-4 p-8">
        {course.lessons.map((lesson, index) => (
          <div key={index} className="bg-white p-4 rounded-lg">
            <img src={lesson.thumbnail} alt={lesson.title} className="w-full h-32 object-cover rounded-t-lg" />
            <h2 className="text-xl font-bold mt-2">{lesson.title}</h2>
          </div>
        ))}
      </div>
      */}
    </div>
  );
};

export default SingleCoursePage;
