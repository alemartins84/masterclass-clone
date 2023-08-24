import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from '../../../utils/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const db = await connectToDb();
  const collection = db.collection('courses');

  switch (req.method) {
    case 'GET':
      try {
        const course = await collection.findOne({ _id: new ObjectId(id as string) });
        if (!course) return res.status(404).send('Course not found');
        return res.status(200).json(course);
      } catch (error) {
        return res.status(500).json({ error: 'Unable to fetch course' });
      }

    case 'PUT':
      const { title, description, imageURL } = req.body;

      try {
        const updatedCourse = await collection.findOneAndUpdate(
          { _id: new ObjectId(id as string) },
          { $set: { title, description, imageURL } },
          { returnDocument: 'after' } // Returns the updated document
        );

        if (!updatedCourse.value) return res.status(404).send('Course not found');
        return res.status(200).json(updatedCourse.value);
      } catch (error) {
        return res.status(500).json({ error: 'Unable to update category' });
      }
        
      case 'DELETE':
        try {
          await db.collection('courses').deleteOne({ _id: new ObjectId(id as string) });
          res.status(200).json({ message: 'Course deleted successfully.' });
        } catch (error) {
          res.status(500).json({ error: 'Error deleting course.' });
        }

      default:
        return res.status(405).end(); // Method Not Allowed
    }
}
