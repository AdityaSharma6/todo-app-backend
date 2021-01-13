import express, { response } from 'express';
import { request } from 'http';

let itemsRouter = express.Router();

// This will represent the Route (/items)
// Create Read Update Delete
itemsRouter.get('/', (request, response) => {
  response.send({ data: 'Welcome to the "GET /items" route' });
});

export default itemsRouter;
