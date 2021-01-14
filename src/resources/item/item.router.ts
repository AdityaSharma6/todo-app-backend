import { Router } from 'express';
import {
    deleteAllItems,
    getOneItem,
    updateOneItem,
    createOneItem,
    deleteOneItem
} from './item.controller';
import { ItemModel } from './item.model';

const itemsRouter = Router();

// /items/
itemsRouter.route('/').delete(deleteAllItems(ItemModel));

itemsRouter
    .route('/:id')
    .get(getOneItem)
    .put(updateOneItem)
    .post(createOneItem(ItemModel))
    .delete(deleteOneItem);

export { itemsRouter };
