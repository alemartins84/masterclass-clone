import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';
import { connectToDb } from '../../../../utils/mongodb';

const editCategory = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { label, iconURL } = req.body;

  try {
    const db = await connectToDb();  // Use the centralized connectToDb function
    const collection = db.collection('categories');

    const updatedCategory = await collection.findOneAndUpdate(
      { _id: new ObjectId(id as string) },
      { $set: { label, iconURL } },
      { returnDocument: 'after' } // Return the updated document
    );

    res.status(200).json(updatedCategory.value);
    } catch (error) {
        console.error("Error editing category:", error);
        res.status(500).json({ error: 'Error editing category' });
    }
 
};

export default editCategory;
