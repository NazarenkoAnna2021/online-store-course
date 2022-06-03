// require('dotenv').config();
import express, { Application, Request, Response } from 'express';
import sequelize from './db';
import cors from 'cors';
import router from '../routes';

const models = require('../models');
const PORT = process.env.PORT || "5000";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

app.get('/', (req: Request, resp: Response) => {
    resp.status(200).json({ massage: 'WORKING' });
});

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
    } catch (e) {
        console.log(e);
    };
};

start();