import { urlFor} from '../../sanity/lib/image';
import { Course } from '../../types/sharedTypes';
import Image from 'next/image';


type CourseBannerProps= {
  course: Course;
};

const defaultImageUrl = "https://fakeimg.pl/640x360/?text=Default";

function CourseBanner({ course }: CourseBannerProps) {

  const imageUrl = course.image ? urlFor(course.image).url() : defaultImageUrl;

  return (
    <div className="relative h-[700px]">
      {/* Background Image */}
      <Image 
        src={imageUrl}
        alt={course.title}
        layout="fill"
        objectFit="cover"
        className="absolute w-full h-full object-cover"  // Rounded top corners
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
        <div className="mx-14 text-white w-1/3">
          {/* Instructor */}
          <h2 className="text-6xl font-semibold text-center mb-2">{course.instructor}</h2>
          {/* Divider */}
          <div className="mx-auto h-[1px] bg-white w-[30px] mb-2"></div>
          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-2">{course.title}</h1>
          {/* Description */}
          <p className="mt-2 text-md text-center mb-4">{course.description}</p>
          {/* Buttons */}
          <div className="ml-4 text-center">
            <button className="bg-blue-500 px-4 py-2 rounded text-white">Start Class</button>
            <button className="bg-white px-4 py-2 rounded text-black ml-2">Trailer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;
