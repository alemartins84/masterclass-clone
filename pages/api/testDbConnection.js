import { connectToDatabase } from '../../utils/db';

export default async (req, res) => {
    try {
        const { db } = await connectToDatabase();
        const data = await db.collection('test').findOne({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Unable to connect to database' });
    }
};
