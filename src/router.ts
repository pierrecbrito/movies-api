import {Router, Request, Response} from 'express';
import {createMovie, findMovieById, getAllMovies, removeMovie} from './controllers/movieControllers';
import {validate} from './middleware/handleValidator';
import {movieCreateValidation} from './middleware/movieValidation';

const router = Router();

router.post('/movie', movieCreateValidation(), validate, createMovie)
   .get('/movie/:id', findMovieById)
   .get('/movie', getAllMovies)
   .delete('/movie/:id', removeMovie);

export default router;