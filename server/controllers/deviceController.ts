import { NextFunction, Request, Response } from 'express';
import { IController } from "./entities/IController";
import { Device, DeviceInfo } from '../models';
import { ApiError } from '../error/ApiError';
import { v4 } from 'uuid';
import path from 'path';
import { IDevice } from './entities/IDevice';
import { Model } from 'sequelize';
import { IInfo } from './entities/IInfo';
import { TData } from './entities/TData';

class DeviceController implements IController {
    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, price, brandId, typeId, info } = req.body;
            const device: Model<IDevice> = await Device.create({ name, price, brandId, typeId, img: this.saveImg(req.files?.img) });

            this.writeInfo(info, device.getDataValue('id'));

            return res.json(device);
        } catch (e: any) {
            next(ApiError.badRequest(e.massage));
        };
    }

    getAll = async (req: Request, res: Response) => {
        const { brandId, typeId, limit, page } = req.query;
        const devices = await this.filterDevises(brandId, typeId, limit, page);

        return res.json(devices);
    }

    getOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const devices = await Device.findOne({ where: { id }, include: [{ model: DeviceInfo, as: 'info' }] });

            return res.json(devices);
        } catch (e: any) {
            next(e.massage);
        }
    }

    private saveImg = (img: any) => {
        let filename = v4() + '.jpg';
        img && img.mv(path.resolve(__dirname, '../', 'static', filename));

        return filename;
    }

    private writeInfo = (info: string, id: number) => {
        info && JSON.parse(info).forEach((element: IInfo) => DeviceInfo.create({
            title: element.title,
            description: element.description,
            deviceId: id,
        }));
    }

    private calculatePagination = (limit: TData, page: TData) => {
        const redonePage = Number(page) || 1;
        const redoneLimit = Number(limit) || 9;
        const offset = redonePage * redoneLimit - redoneLimit;

        return { redonePage, redoneLimit, offset };
    }

    private filterDevises = async (brandId: TData, typeId: TData, limit: TData, page: TData) => {
        const { redoneLimit, offset } = this.calculatePagination(limit, page);
        let devices: { rows: Model<IDevice>[]; count: number; } = { count: 0, rows: [] };

        !brandId && !typeId && (devices = await Device.findAndCountAll({ limit: redoneLimit, offset }));
        brandId && !typeId && (devices = await Device.findAndCountAll({ where: { brandId }, limit: redoneLimit, offset }));
        !brandId && typeId && (devices = await Device.findAndCountAll({ where: { typeId }, limit: redoneLimit, offset }));
        brandId && typeId && (devices = await Device.findAndCountAll({ where: { brandId, typeId }, limit: redoneLimit, offset }));

        return devices;
    }
};

export const deviceController = new DeviceController();