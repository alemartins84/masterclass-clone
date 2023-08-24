import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';
import { connectToDb } from '../../../../utils/mongodb';

const deleteCourse = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {

    const { id } = req.query;
    const db = await connectToDb();
    const collection = db.collection('courses');

    await collection.deleteOne({ _id: new ObjectId(id as string) });

    res.status(200).json({ message: 'Course deleted successfully.' });
  } else {
    res.status(405).end();  // Method Not Allowed
  }
};

export default deleteCourse;
