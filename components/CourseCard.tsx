// components/CourseCard.tsx
import Image from 'next/image';
import { urlFor} from '../sanity/lib/image';
import { Course } from '../types/sharedTypes';

import Link from 'next/link';

type CourseCardProps = {
  course: Course;
};

const defaultImageUrl = "https://fakeimg.pl/640x360/?text=Default";

function CourseCard({ course }: CourseCardProps) {

  const slug = course.slug?.current || "";
  const imageUrl = course.image ? urlFor(course.image).width(600).url() : defaultImageUrl;
  
  return (
    <div className="course-card w-full rounded-lg overflow-hidden">
      <div className="relative pb-[56.25%]">  {/* 16:9 Aspect Ratio */}
        <Link href={`/courses/${slug}`} passHref>
          <Image 
            src={imageUrl}
            alt={course.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"  // Rounded top corners
          />
        </Link>
      </div>
      <div className="pt-4">
        <h2 className="text-xl text-white font-bold">{course.instructor}</h2>
        <h2 className="text-md text-white font-bold">{course.title}</h2>
      </div>
  </div>
  );
}

export default CourseCard;
