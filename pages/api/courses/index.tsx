import { NextApiRequest, NextApiResponse } from 'next';
import getCourses from '../handlers/courses/getCourses';
import postCourse from '../handlers/courses/postCourse';
import editCourse from '../handlers/courses/editCourse';
import deleteCourse from '../handlers/courses/deleteCourse';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            return getCourses(req, res);
        case 'POST':
            return postCourse(req, res);
        case 'PUT':
            return editCourse(req, res);
        case 'DELETE':
            return deleteCourse(req, res);
        default:
            return res.status(405).end();  // Method Not Allowed
    }
};
