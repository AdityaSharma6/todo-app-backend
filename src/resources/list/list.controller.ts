import { Request, Response } from 'express';
import { ListModel } from './list.model';

export const createOneList = (listModel: typeof ListModel) => {
    return async (request: Request, response: Response) => {
        const list = request.body;
        try {
            const document = await listModel.create({ ...list });
            console.log('Creating 1 List...');
            return response.status(200).json({
                message: 'This list has successfully been created',
                data: document
            });
        } catch (error) {
            return response.status(400).send(error);
        }
    };
};

export const getOneList = (listModel: typeof ListModel) => {
    return async (request: Request, response: Response) => {
        const list = request.body;
        try {
            const document = await listModel.findOne(list);
            console.log('Getting 1 List...');
            return response.status(200).json({
                message: 'This requested list has successfully been retrieved.',
                data: document
            });
        } catch (error) {
            return response.status(400).send(error);
        }
    };
};

export const deleteOneList = (listModel: typeof ListModel) => {
    return async (request: Request, response: Response) => {
        const list = request.body;
        try {
            const document = await listModel.deleteOne(list);
            console.log('Deleting 1 List...');
            return response.status(200).json({
                message: 'The specified list has successfully been deleted.',
                data: document
            });
        } catch (error) {
            return response.status(400).send(error);
        }
    };
};

export const deleteAllLists = (listModel: typeof ListModel) => {
    return async (request: Request, response: Response) => {
        try {
            const document = await listModel.deleteMany({});
            console.log('Deleting All Lists...');
            return response.status(200).json({
                message: 'All lists have successfully been deleted',
                data: document
            });
        } catch (error) {
            return response.status(400).send(error);
        }
    };
};
