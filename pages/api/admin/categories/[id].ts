import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from '../../../../utils/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    const db = await connectToDb();
    const collection = db.collection('categories');

    switch (req.method) {
        case 'GET':
            try {
                const category = await collection.findOne({ _id: new ObjectId(id as string) });
                if (!category) return res.status(404).send('Category not found');
                return res.status(200).json(category);
            } catch (error) {
                return res.status(500).json({ error: 'Unable to fetch category' });
            }

        case 'PUT':
            const { label, iconURL } = req.body;

            try {
                const updatedCategory = await collection.findOneAndUpdate(
                    { _id: new ObjectId(id as string) },
                    { $set: { label, iconURL } },
                    { returnDocument: 'after' } // Returns the updated document
                );

                if (!updatedCategory.value) return res.status(404).send('Category not found');
                return res.status(200).json(updatedCategory.value);
            } catch (error) {
                return res.status(500).json({ error: 'Unable to update category' });
            }
        
        case 'DELETE':
            try {
                await db.collection('categories').deleteOne({ _id: new ObjectId(id as string) });
                res.status(200).json({ message: 'Category deleted successfully.' });
            } catch (error) {
                res.status(500).json({ error: 'Error deleting category.' });
            }

        default:
            return res.status(405).end(); // Method Not Allowed
    }
}
