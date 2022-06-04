import { Request, Response } from 'express';
import { IController } from "./entities/IController";
import { Type } from '../models/index';

class TypeController implements IController {
    create = async (req: Request, res: Response) => {
        const {name} = req.body;
        const type = await Type.create({name});

        return res.json(type);
    }

    getAll = async (req: Request, res: Response) => {
        const types = await Type.findAll();

        return res.json(types);
    }
};

export const typeController = new TypeController();