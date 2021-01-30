import { Router } from 'express';
import {
    createOneList,
    deleteAllLists,
    deleteOneList,
    readOneList,
    updateOneList
} from './list.controller';
import { ListModel } from './list.model';

const listRouter = Router();

// --> /list/
listRouter.route('/').delete(deleteAllLists(ListModel));

// --> /list/:title
listRouter
    .route('/:title')
    .post(createOneList(ListModel)) // C
    .get(readOneList(ListModel)) // R
    .put(updateOneList(ListModel)) // U
    .delete(deleteOneList(ListModel)); // D

export { listRouter };
