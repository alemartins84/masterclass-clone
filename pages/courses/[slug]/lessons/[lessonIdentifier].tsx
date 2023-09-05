// pages/courses/[slug]/lessons/[lessonIdentifier].tsx

import { client as sanityClient } from '../../../../sanity/lib/client';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { Lesson } from '../../../../types/sharedTypes';  // Import your Lesson type

interface LessonPageProps {
  lesson: Lesson;  // Explicitly define the type here
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  

  // Type checking to make sure params exist
  if (!context.params || !('slug' in context.params) || !('lessonIdentifier' in context.params)) {
    return {
      notFound: true,
    };
  }
  
  // Find the specific lesson using the index (lessonIdentifier)
  const slug = context.params.slug as string; // Type cast as string
  const lessonIdentifier = context.params.lessonIdentifier as string; // Type cast as string

  if (!slug || !lessonIdentifier) {
    return {
      notFound: true,
    };
  }

  // Fetch the course data based on the slug
  const courseData = await sanityClient.fetch(
    `*[_type == "course" && slug.current == $slug][0]{
      title,
      slug,
      lessons
    }`,
    { slug }
  );

  const lessonIndex = parseInt(lessonIdentifier, 10); // Convert the string to a number
  const lesson = courseData?.lessons[lessonIndex];



  if (!lesson) {
    return {
      notFound: true,
    };
  }

  return {
    props: { lesson },
    
  };
};

const LessonPage: React.FC<LessonPageProps> = ({ lesson }) => {
  
  console.log("Returning props:", { lesson });
  return (
    <div>
      <h1>{lesson.meta.title}</h1>
      <p>{lesson.description}</p>
      <video src={lesson.videoUrl} controls />
      {/* Add other lesson details here */}
    </div>
  );
};

export default LessonPage;

