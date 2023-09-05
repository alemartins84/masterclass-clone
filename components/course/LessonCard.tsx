// components/LessonCard.tsx

import { urlFor} from '../../sanity/lib/image';
import Link from 'next/link';
import { Lesson } from '../../types/sharedTypes';

type LessonCardProps = {
  lesson: Lesson;
  index: number; 
  courseSlug: string;
};

const LessonCard: React.FC<LessonCardProps> = ({ lesson, index, courseSlug }) => {
  return (
    <div className="flex items-center mx-auto mb-4">
      <Link href={`/courses/${courseSlug}/lessons/${index}`} passHref>
      <div className="relative flex-none w-1/3">
        <img 
          src={lesson.meta.image?.asset?.url || 'default-image-url'} 
          alt={lesson.meta.title}
          className="aspect-video rounded-lg"
        />
      </div>
      <div className="ml-4 flex-grow">
        <h3 className="text-2xl font-medium text-white">{lesson.meta.title}</h3>
        <p className="text-sm text-white">{lesson.meta.duration}</p>
        <p className="text-base text-white">{lesson.description}</p>
      </div>
      </Link>
    </div>
  );
};

export default LessonCard;