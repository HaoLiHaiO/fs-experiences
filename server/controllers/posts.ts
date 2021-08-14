import { Request, Response } from 'express';
import PostMessage from '../models/postMessage';

export const getPosts = async (req: Request, res: Response) => {
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);

        res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json( { message: error.message })
    }
}

export const createPost = ((req: Request, res: Response) => {
    res.send('Post Creation');
})