import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { IPayload } from "./entities/IPayload";

export const tokenMiddleware = (role?: string) => (req: Request, res: Response, next: NextFunction) => {
    if (req.method === "OPTIONS") {
        next();
    };

    try {
        const token = String(req.headers.authorization).split(' ')[1];

        if (!token) {
            return res.status(401).json({ massage: 'Not authorize' });
        };

        const decoded = jwt.verify(token, String(process.env.SECRET_KEY)) as IPayload;

        if (decoded.role !== role && role) {
            return res.status(403).json({ massage: 'No access' });
        };
        req.params = { user: JSON.stringify(decoded) };
        next();
    } catch (e) {
        res.status(401).json({ massage: 'Not authorize' });
    };
};