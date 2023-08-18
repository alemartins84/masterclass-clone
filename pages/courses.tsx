// pages/courses.tsx

import { useState, useEffect } from 'react';
import CourseForm from '../components/CourseForm';
import CourseList from '../components/CourseList';
import { Course } from '../types/course';

const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Fetch all courses when the component mounts
    fetch('/api/courses')
      .then(response => response.json())
      .then(data => setCourses(data));
  }, []);

  const handleCourseCreation = (courseData: any) => {
    fetch('/api/courses/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(courseData),
    })
      .then(response => response.json())
      .then(newCourse => {
        setCourses(prevCourses => [...prevCourses, newCourse]);
      });
  };

  return (
    <div>
      <h1>Courses</h1>
      <CourseForm onSubmit={handleCourseCreation} />
      <CourseList courses={courses} />
    </div>
  );
};

export default CoursesPage;
