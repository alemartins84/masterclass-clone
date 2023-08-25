// pages/courses/[id].tsx

import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  
  const slug  = context.params?.slug as string;;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses/slug/${slug}`);
  const initialCourse = await res.json();
  console.log(initialCourse);
  return {
    props: { initialCourse },
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
