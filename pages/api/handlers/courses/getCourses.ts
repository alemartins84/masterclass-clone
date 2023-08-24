import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from '../../../../utils/mongodb';

const getCourses = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await connectToDb();
    const collection = db.collection('courses');
    const courses = await db.collection("courses").find({}).toArray();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch courses' });
  } 
};

export default getCourses;
