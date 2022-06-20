import { NextFunction, Request, Response } from 'express';
import { IController } from "./entities/IController";
import { Type } from '../models/index';
import { ApiError } from '../error/ApiError';

class TypeController implements IController {
    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name } = req.body;
            const type = await Type.create({ name });

            return res.json(type);
        } catch (e: any) {
            next(ApiError.badRequest(e.massage));
        }
    }

    getAll = async (req: Request, res: Response) => {
        const types = await Type.findAll();

        return res.json(types);
    }
};

export const typeController = new TypeController();