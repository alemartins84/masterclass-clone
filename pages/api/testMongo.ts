import { NextApiRequest, NextApiResponse } from 'next';
import { testMongo } from '../../utils/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const testResult = await testMongo();
    res.status(200).send(testResult);
}
