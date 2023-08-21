import { NextApiRequest, NextApiResponse } from 'next';
import getCategories from '../handlers/categories/getCategories';
import postCategory from '../handlers/categories/postCategory';
import editCategory from '../handlers/categories/editCategory';
import deleteCategory from '../handlers/categories/deleteCategory';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            return getCategories(req, res);
        case 'POST':
            return postCategory(req, res);
        case 'PUT':
            return editCategory(req, res);
        case 'DELETE':
            return deleteCategory(req, res);
        default:
            return res.status(405).end();  // Method Not Allowed
    }
};
