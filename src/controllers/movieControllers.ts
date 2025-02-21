import {Request, Response} from 'express';
import {MovieModel} from '../models/Movie';
import Logger from '../../config/logger';


export  async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body
        const movie = await MovieModel.create(data);
        res.status(201).json(movie);
    } catch (error) {
        Logger.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
}

export async function findMovieById(req: Request, res: Response): Promise<any> {
    try {
        const {id} = req.params;
        const movie = await MovieModel.findById(id);
        if (!movie) {
            return res.status(404).json({message: 'Movie not found'});
        }
        res.status(200).json(movie);
    } catch (error) {
        Logger.error(error);
        res.status(500).json({message: 'Internal server error'});
    }
}