import { Request, Response } from 'express';
import { ItemModel } from './item.model';

// Get One Item - Need to test
export const getOneItem = (itemModel: typeof ItemModel) => {
    return async (request: Request, response: Response) => {
        const item = request.body;
        try {
            const document = await itemModel.findById({ _id: item._id });
            console.log('Getting 1 Item...');
            return response.status(200).json({
                message: 'The specified item has been found',
                data: document
            });
        } catch (error) {
            return response.status(400).send(error);
        }
    };
};

// Create One Item
export const createOneItem = (itemModel: typeof ItemModel) => {
    return async (request: Request, response: Response) => {
        const item = request.body;
        try {
            const document = await itemModel.create(item);
            console.log('Creating 1 Item...');
            return response.status(200).json({
                message: 'Item Successfully Created',
                data: document
            });
        } catch (err) {
            return response.status(400).send(err);
        }
    };
};

// GET Request
export const readAllItemsFromList = (itemModel: typeof ItemModel) => {
    return async (request: Request, response: Response) => {
        try {
            // const document = await itemModel.find().populate('List', {
            //     match: { _id: { $eq: request.body._listId } }
            // });
            // Why didn't populate work?
            const document = await itemModel.find({
                _listId: request.query._listId
            });
            if (document) {
                console.log('Retrieving all items');
                return response.status(200).json({
                    message:
                        'All items within this particular list have been retrieved',
                    data: document
                });
            }
        } catch (error) {
            return response.status(400).send(error);
        }
    };
};

// Update One Item - Need to test
export const updateOneItem = (itemModel: typeof ItemModel) => {
    return async (request: Request, response: Response) => {
        const item = request.body;
        try {
            const document = await itemModel.findOneAndUpdate(
                item.itemId,
                item,
                { new: true }
            );
            console.log('Updating 1 Item..');
            return response.status(200).json({
                message: 'The specified item has been updated!',
                data: document
            });
        } catch (error) {
            return response.status(400).send(error);
        }
    };
};

// Delete One Item
export const deleteOneItem = (itemModel: typeof ItemModel) => {
    return async (request: Request, response: Response) => {
        try {
            const item = request.body;
            const document = await itemModel.deleteOne({ ...item });
            console.log('Deleting 1 Item...');
            return response.status(200).json({
                message: 'The specified item has successfully been deleted',
                data: { ...item }
            });
        } catch (error) {
            return response.status(400).send(error);
        }
    };
};

export const deleteAllItems = (itemModel: typeof ItemModel) => {
    return async (request: Request, response: Response) => {
        try {
            const document = await itemModel.deleteMany({});
            console.log('Deleting All Items...');
            return response.json({ message: 'All Items have been deleted' });
        } catch (err) {
            return response.status(400).send(err);
        }
    };
};
