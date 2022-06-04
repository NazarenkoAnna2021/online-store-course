import { Request, Response } from 'express';
import { IController } from './entities/IController';
import {Brand} from '../models/index';

class BrandController implements IController {
    create = async (req: Request, res: Response) => {
        const {name} = req.body;
        const brand = await Brand.create({name});

        return res.json(brand);
    }

    getAll = async (req: Request, res: Response) => {
        const brands = await Brand.findAll();

        return res.json(brands);
    }
};

export const brandController = new BrandController();