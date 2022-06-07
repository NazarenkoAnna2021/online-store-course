import { Request, Response } from 'express';
import { ApiError } from '../error/ApiError';

export const ErrorHandler = (err: Error, req: Request, res: Response) => {
    return err instanceof ApiError
        ? res.status(err.status).json({ massage: err.message })
        : res.status(500).json({ massage: 'Unexpected error!' });
};