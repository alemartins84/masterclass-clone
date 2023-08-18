import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../utils/db';
import { Course } from '../../../types/course';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const courseData: Course = req.body;

  try {
    const { db } = await connectToDatabase();
    const result = await db.collection('courses').insertOne(courseData);
    res.status(201).json(result.ops[0]);
  } catch (error) {
    if (error instanceof Error) {
        res.status(500).json({ error: error.message });
    } else {
        res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};
