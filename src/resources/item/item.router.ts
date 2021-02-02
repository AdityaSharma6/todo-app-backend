import { Router } from 'express';
import {
    updateOneItem,
    createOneItem,
    readAllItemsFromList
} from './item.controller';
import { ItemModel } from './item.model';

const itemsRouter = Router();

itemsRouter.route('/').get(readAllItemsFromList(ItemModel));

itemsRouter
    .route('/:_id')
    .put(updateOneItem(ItemModel))
    .post(createOneItem(ItemModel));

export { itemsRouter };
