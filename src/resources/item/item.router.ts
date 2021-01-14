import { Router } from 'express';
import {
    getAllItems,
    getOneItem,
    updateOneItem,
    createOneItem,
    deleteOneItem
} from './item.controller';

const itemsRouter = Router();

// /items/
itemsRouter.route('/').get(getAllItems);

itemsRouter
    .route('/:id')
    .get(getOneItem)
    .put(updateOneItem)
    .post(createOneItem)
    .delete(deleteOneItem);

export { itemsRouter };
