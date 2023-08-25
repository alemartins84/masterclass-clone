import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';
import { connectToDb } from '../../../../utils/mongodb';

const editCourse = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { title, description, imageUrl, instructorName } = req.body;

  try {
    const db = await connectToDb();  // Use the centralized connectToDb function
    const collection = db.collection('courses');

    const updatedCourse = await collection.findOneAndUpdate(
      { _id: new ObjectId(id as string) },
      { $set: { title, description, imageUrl, instructorName } },
      { returnDocument: 'after' } // Return the updated document
    );

    res.status(200).json(updatedCourse.value);
    } catch (error) {
      console.error("Error editing course:", error);
      res.status(500).json({ error: 'Error editing course' });
    } 
};

export default editCourse;
