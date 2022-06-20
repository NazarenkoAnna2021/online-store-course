import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../error/ApiError';
import { IUserController } from './entities/IUserController';
import { User, Basket } from '../models'
import bcript from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Model } from 'sequelize/types';
import { IUser } from './entities/IUser';

class UserController implements IUserController {
    registration = async (req: Request, res: Response, next: NextFunction) => {
        const { email, password, role } = req.body;

        if (!email || !password) {
            return next(ApiError.badRequest('Incorrect email or password'));
        };

        const candidate = await User.findOne({ where: { email } });

        if (candidate) {
            return next(ApiError.badRequest('User already exist'));
        };

        const hashPassword = await bcript.hash(password, 5);
        const user: Model<IUser> = await User.create({ email, role, password: hashPassword });
        const id = user.getDataValue('id');
        const basket = await Basket.create({ userId: id });
        const token = this.generateJwt(id, email, role);

        return res.json({ token });
    }

    login = async (req: Request, res: Response, next: NextFunction) => {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'));
        }
        let comparePassword = bcript.compareSync(password, user.getDataValue('password'));
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'));
        }

        const token = this.generateJwt(user.getDataValue('id'), user.getDataValue('email'), user.getDataValue('role'));        

        return res.json({ token });
    }

    check = async (req: any, res: Response, next: NextFunction) => {
        const { user } = req.params;
        const token = this.generateJwt(user.id, user.email, user.role);

        return res.json({ token });
    }

    private generateJwt = (id: number, email: string, role: string) => jwt.sign({ id, email, role }, String(process.env.SECRET_KEY), { expiresIn: '24h' })
};

export const userController = new UserController();