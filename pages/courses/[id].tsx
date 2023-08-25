// pages/courses/[id].tsx

import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { Course } from '../../types/course';
import CourseBanner from '../../components/course/CourseBanner';

type CourseProps = {
  initialCourse: {
    _id: string;
    title: string;
    instructorName: string;
    description: string;
    imageUrl: string;
  };
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses/${id}`);
  const initialCourse = await res.json();
  return {
    props: { initialCourse },
  };
};


const SingleCoursePage: React.FC<CourseProps> = ({ initialCourse }) => {
  
  const [course, setCourse] = useState(initialCourse);

  useEffect(() => {
    console.log("Course in useEffect: ", course);
    const fetchData = async () => {
      if (course && course._id) {
        const res = await fetch(`/api/courses/${course._id}`);
        const updatedCourse = await res.json();
        setCourse(updatedCourse);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this useEffect runs once when the component mounts
  
  return (
    <div>
      {/* Course Banner */}
      <CourseBanner
        title={course.title}
        instructorName={course.instructorName}
        description={course.description}
        imageUrl={course.imageUrl}
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
