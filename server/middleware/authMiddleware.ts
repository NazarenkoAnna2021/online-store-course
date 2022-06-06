import { NextFunction } from "express";
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: any, res: any, next: NextFunction) => {
    if (req.method === "OPTIONS") {
        next();
    };

    try {
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(401).json({ massage: 'Not authorize' });
        }

        const decoded = jwt.verify(token, String(process.env.SECRET_KEY));

        req.user = decoded;
        next();
    } catch (e) {
        res.status(401).json({ massage: 'Not authorize' });
    }
};