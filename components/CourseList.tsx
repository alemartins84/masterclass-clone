// components/CourseList.tsx
import React from 'react';

import { Course } from '../types/course';

interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div>
      {courses.map(course => (
        <div key={course.id}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          {/* Other course details... */}
        </div>
      ))}
    </div>
  );
};

export default CourseList;