import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from '../../../../utils/mongodb';
import { Category } from '../../../../types/category';

const getCategories = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await connectToDb();
    const collection = db.collection('categories');
    const categories = await db.collection('categories').find({}).toArray();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch categories' });
  } 
 
};

export default getCategories;
