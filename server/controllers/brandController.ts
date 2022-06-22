import { NextFunction, Request, Response } from 'express';
import { IController } from './entities/IController';
import { Brand } from '../models/index';
import { ApiError } from '../error/ApiError';

class BrandController implements IController {
    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name } = req.body;
            const brand = await Brand.create({ name });

            return res.json(brand);
        } catch (e: any) {
            next(ApiError.badRequest(e.massage));
        }
    }

    getAll = async (req: Request, res: Response) => {
        const brands = await Brand.findAll();

        return res.json(brands);
    }
};

export const brandController = new BrandController();