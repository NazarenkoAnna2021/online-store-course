import { Request, Response } from 'express';

export interface IController {
    create: (req: Request, resp: Response, next?: unknown) => unknown,
    getAll: (req: Request, resp: Response) => unknown,
};