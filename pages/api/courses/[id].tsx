import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from '../../../utils/mongodb';
import getCourseById from '../handlers/courses/getCourseById';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = await connectToDb();
  const courseId = req.query.id as string;
  
  const collection = db.collection('courses');

  switch (req.method) {
    case 'GET':
      try {
        const course = await getCourseById(db, courseId);
        return res.status(200).json(course);
      } catch (error) {
        return res.status(404).json({ message: 'Course not found' });
      }

    case 'PUT':
      const { title, description, imageUrl } = req.body;

      try {
        const updatedCourse = await collection.findOneAndUpdate(
          { _id: new ObjectId(courseId as string) },
          { $set: { title, description, imageUrl } },
          { returnDocument: 'after' } // Returns the updated document
        );

        if (!updatedCourse.value) return res.status(404).send('Course not found');
        return res.status(200).json(updatedCourse.value);
      } catch (error) {
        return res.status(500).json({ error: 'Unable to update category' });
      }
        
      case 'DELETE':
        try {
          await db.collection('courses').deleteOne({ _id: new ObjectId(courseId as string) });
          res.status(200).json({ message: 'Course deleted successfully.' });
        } catch (error) {
          res.status(500).json({ error: 'Error deleting course.' });
        }

      default:
      res.status(400).json({ success: false });
    }
}
