import { Request, Response } from 'express';
import { ApiError } from '../error/ApiError';
import { IUserController } from './entities/IUserController'

class UserController implements IUserController {
    registration = async (req: Request, res: Response) => {

    }

    login = async (req: Request, res: Response) => {

    }
    check = async (req: Request, res: Response, next: any) => {
        const { id } = req.query;

        !id ? next(ApiError.badRequest('No id')) : res.json(id);
    }
};

export const userController = new UserController();