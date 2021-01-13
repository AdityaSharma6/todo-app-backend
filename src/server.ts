import express from 'express';
import connection from './utils/database';
import itemsRouter from './resources/item/item.router';

require('dotenv').config();

const app = express();
const mainRouter = express.Router();

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
