import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';
import { connectToDb } from '../../../../utils/mongodb';
import { getCourseBySlug } from '../../handlers/courses/getCourseBySlug';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await connectToDb();
  const courseSlug = req.query.slug as string;

  switch (req.method) {
    case 'GET':
      try {
        const course = await getCourseBySlug(db, courseSlug);
        return res.status(200).json(course);
      } catch (error) {
        return res.status(404).json({ message: 'Course not found' });
      }

    // Handle other HTTP methods (PUT, DELETE, etc.) if needed
    default:
      res.status(400).json({ success: false });
  }
};
