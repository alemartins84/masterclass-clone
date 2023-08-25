import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from '../../../../utils/mongodb';

const postCourse = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await connectToDb();
    const collection = db.collection('courses');
    const { title, description, imageUrl, instructorName } = req.body;
    const courses = await collection.insertOne({ title, description, imageUrl, instructorName });
    
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch categories' });
  }  
};

export default postCourse;
