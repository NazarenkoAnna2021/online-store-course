import { Request, Response } from 'express';

export interface IUserController {
    registration: (req: Request, resp: Response) => unknown,
    login: (req: Request, res: Response) => unknown,
    check: (req: Request, res: Response, next: unknown) => unknown,
};