
import { ObjectId, Db } from 'mongodb';

export const getCourseBySlug = async (db: Db, slug: string) => {

  const collection = db.collection("courses");  
  
  try {
    const course = await db.collection('courses').findOne({ slug });
    return course;
  } catch (error) {
    console.error("Error fetching course by ID:", error);
    return null;
  }

};

export default getCourseBySlug;