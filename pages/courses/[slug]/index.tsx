// pages/courses/[id].tsx
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';
import { client as sanityClient } from '../../../sanity/lib/client';
import { Course } from '../../../types/sharedTypes';
import CourseBanner from '../../../components/course/CourseBanner';
import LessonList from '../../../components/course/LessonList';


type CourseProps= {
  course: Course;
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  console.log('Context Params:', context.params);

  const { slug } = context.params as { slug: string };
  
  // Fetch the course data from Sanity based on the slug
  const course = await sanityClient.fetch(`*[_type == "course" && slug.current == $slug][0]{
    ...,
    image{..., asset->},
    "lessons": lessons[] {
      meta {
        title,
        duration,
        image {
          asset-> {
            url
          }
        }
      },
      description,
      videoUrl
    }
  }`, { slug });

  console.log('Fetched course:', course);

  // If course not found, return a 404 page
  if (!course) {
    return {
      notFound: true,
    };
  }

  return {
    props: { course },
  };
};


const SingleCoursePage: React.FC<CourseProps> = ({ course }) => {
  
  return (
    <div>
      {/* Course Banner */}
      <CourseBanner
        course={course}
      />      

      {/* Course Series List */}      
      <LessonList lessons={course.lessons} courseSlug={course.slug.current} />
    </div>
  );
};

export default SingleCoursePage;
