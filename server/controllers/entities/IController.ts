import { NextFunction, Request, Response } from 'express';

export interface IController {
    create: (req: Request, resp: Response, next: NextFunction) => unknown,
    getAll: (req: Request, resp: Response) => unknown,
};