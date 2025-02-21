import {Request, Response, NextFunction} from 'express';
import {validationResult, ValidationError} from 'express-validator';
import Logger from '../../config/logger';


export const validate = (req: Request, res: Response, next: NextFunction): any => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next(); // Passa para o próximo middleware ou controlador
    }

    // Extrai as mensagens de erro
    const extractedErrors: string[] = errors.array().map(err => err.msg);

    // Retorna os erros com status 422
    return res.status(422).json({
        errors: extractedErrors,
    });
}