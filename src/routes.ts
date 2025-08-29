import { Router, Request, Response } from 'express';

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    throw new Error('This is a test error')
});

router.get('/go', (req: Request, res: Response) => {
    return res.json({ message: 'Go route is working!' });
});



export { router };