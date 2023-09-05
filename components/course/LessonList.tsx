// components/LessonList.tsx
import { Lesson } from '../../types/sharedTypes';

import LessonCard from './LessonCard';

type LessonListProps = {
  lessons: Lesson[];
  courseSlug: string; // Add this
};

const LessonList: React.FC<LessonListProps> = ({ lessons, courseSlug }) => {
  return (
    <div className="container mx-auto p-4 w-1/2">
      <div className="flex flex-col">
        {lessons.map((lesson, index) => (
          <div key={index} className="mb-4">
            <LessonCard key={index} lesson={lesson} courseSlug={courseSlug} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonList;