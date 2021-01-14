import express, { Router } from 'express';
import { itemsRouter } from './resources/item/item.router';
import connection from './utils/database';

require('dotenv').config();
const app = express();
const router = Router();

app.use(express.json());

app.use('/items', itemsRouter);

const startServer = async () => {
    console.log('Starting Server Process...');
    try {
        await connection();
        app.listen(process.env.DEV_APP_PORT, () => {
            console.log(
                `Server has started on http://localhost:${process.env.DEV_APP_PORT}`
            );
        });
    } catch (error) {
        console.error(error);
    }
};

export default startServer;
