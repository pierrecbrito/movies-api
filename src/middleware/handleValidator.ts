import {Request, Response, NextFunction} from 'express';
import {validationResult} from 'express-validator';
import Logger from '../../config/logger';


export const validate = (req: Request, res: Response, next: NextFunction): any => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next();
    }

    const extractedErrors: object[] = [];
    errors.array().map(err => extractedErrors.push(err));
    return res.status(422).json({
        errors: extractedErrors,
    });
}