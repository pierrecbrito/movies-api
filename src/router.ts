import {Router, Request, Response} from 'express';
import {createMovie, findMovieById} from './controllers/movieControllers';
import {validate} from './middleware/handleValidator';
import {movieCreateValidation} from './middleware/movieValidation';

const router = Router();

router.post('/movie', movieCreateValidation(), validate, createMovie)
   .get('/movie/:id', findMovieById);

export default router;