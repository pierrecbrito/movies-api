import {body} from 'express-validator';

export const movieCreateValidation = (): any => {
    return [
        body('title').isString().notEmpty().withMessage('Title is required'),
        body('year').isNumeric().notEmpty().withMessage('Year is required'),
        body('rating').isNumeric().notEmpty().withMessage('Rating is required'),
        body('genres').isArray().notEmpty().withMessage('Genres is required'),
        body('director').isString().notEmpty().withMessage('Director is required'),
        body('poster').isString().notEmpty().withMessage('Poster is required'),
    ]
}