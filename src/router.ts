import {Router, Request, Response} from 'express';
import {createMovie} from './controllers/movieControllers';

const router = Router();

router.get('/test', (req: Request, res: Response) => {
    res.status(200).json({message: 'Hello, world!'});
}).post('/movie', createMovie);

export default router;