import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from '../../../../utils/mongodb';

const postCategories = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await connectToDb();
    const collection = db.collection('categories');
    const { label, iconURL } = req.body;
    const categories = await collection.insertOne({ label, iconURL });
    
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch categories' });
  } 
 
};

export default postCategories;
