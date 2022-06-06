import { NextFunction, Request, Response } from 'express';

export interface IUserController {
    registration: (req: Request, resp: Response, next: NextFunction) => unknown,
    login: (req: Request, res: Response, next: NextFunction) => unknown,
    check: (req: Request, res: Response, next: NextFunction) => unknown,
};