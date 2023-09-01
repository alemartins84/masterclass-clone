// components/CourseCard.tsx
import { useRouter } from 'next/router';
import Image from 'next/image';
import { urlFor} from '../sanity/lib/image';
import Link from 'next/link';

type CourseCardProps = {
  course: {
    _id: string;
    slug: String;
    imageUrl: any;
    title: string;
    instructorName: string;
  };
};

function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="course-card w-full rounded-lg overflow-hidden">
      <div className="relative pb-[56.25%]">  {/* 16:9 Aspect Ratio */}
        <Link href={`/courses/${course.slug}`}>
          <Image 
            src={urlFor(imageUrl).width(300).url() || ''}
            alt={course.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"  // Rounded top corners
          />
        </Link>
      </div>
      <div className="pt-4">
        <h2 className="text-xl text-white font-bold">{course.instructorName}</h2>
        <h2 className="text-md text-white font-bold">{course.title}</h2>
      </div>
  </div>
  );
}

export default CourseCard;
