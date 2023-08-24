// components/CourseCard.tsx
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

type CourseCardProps = {
  course: {
    _id: string;
    imageUrl: string;
    title: string;
  };
  isFirst: boolean;
};

function CourseCard({ course, isFirst }: CourseCardProps) {
  return (
    <div className={`course-card w-full rounded-lg overflow-hidden ${isFirst ? '' : 'ml-4'}`}>
      <div className="relative pb-[56.25%]">  {/* 16:9 Aspect Ratio */}
        <Image 
          src={course.imageUrl} 
          alt={course.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"  // Rounded top corners
        />
      </div>
      <div className="pt-4">
        <h2 className="text-xl text-white font-bold">{course.title}</h2>
      </div>
  </div>
  );
}

export default CourseCard;
