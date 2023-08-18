// pages/api/courses/[id].tsx
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../utils/db';
import { ObjectId } from 'mongodb';
import { Course } from '../../../types/course';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    const { db } = await connectToDatabase();
    const { id } = req.query;

    try {
        const course: Course = await db.collection('courses').findOne({ _id: new ObjectId(id as string) });
        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }
        res.status(200).json(course);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};
