import { Router } from 'express';
import { createOneItem, deleteAllItems } from '../item/item.controller';
import { deleteOneList, getOneList } from './list.controller';
import { ListModel } from './list.model';

const listRouter = Router();

listRouter.route('/').delete(deleteAllItems(ListModel));

listRouter
    .route('/:id')
    .get(getOneList(ListModel))
    .post(createOneItem(ListModel))
    .delete(deleteOneList(ListModel));

export { listRouter };
