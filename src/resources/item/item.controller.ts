import { json, Request, Response } from 'express';
import { request } from 'http';
import { CallbackError } from 'mongoose';
import { IItem, ItemSchema, ItemModel } from './item.model';

// Get One Item - Need to test
export const getOneItem = (itemModel: typeof ItemModel) => {
    return async (request: Request, response: Response) => {
        const item: IItem = request.body;
        try {
            const document = await itemModel.findById({ _id: item._id });
            console.log('Getting 1 Item...');
            return response.status(200).json({
                message: 'The specified item has been found'
            });
        } catch (error) {
            return response.status(200).send(error);
        }
    };
};

// Update One Item - Need to test
export const updateOneItem = (itemModel: typeof ItemModel) => {
    return async (request: Request, response: Response) => {
        const item: IItem = request.body;
        try {
            const document = await itemModel.findOneAndUpdate(
                {
                    _id: item._id
                },
                { ...item }
            );
            console.log('Updating 1 Item..');
            return response.status(200).json({
                message: 'The specified item has been updated!',
                data: { ...document }
            });
        } catch (error) {
            return response.status(400).send(error);
        }
    };
};

// Create One Item
export const createOneItem = (itemModel: typeof ItemModel) => {
    return async (request: Request, response: Response) => {
        const item: IItem = request.body;
        try {
            const document = await itemModel.create({ ...item });
            console.log('Creating 1 Item...');
            return response.status(200).json({
                message: 'Item Successfully Created',
                data: { ...item }
            });
        } catch (err) {
            return response.status(400).send(err);
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
