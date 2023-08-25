import { ObjectId, Db } from 'mongodb';

export const getCourseById = async (db: Db, id: string) => {

  const collection = db.collection("courses");  

  try {
    const course = await collection.findOne({ _id: new ObjectId(id as string) });
    return course;
  } catch (error) {
    console.error("Error fetching course by ID:", error);
    return null;
  }
};

export default getCourseById;
