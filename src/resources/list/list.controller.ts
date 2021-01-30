import { Request, Response } from 'express';
import { ListModel } from './list.model';

export const createOneList = (listModel: typeof ListModel) => {
    return async (request: Request, response: Response) => {
        const list = request.body;
        try {
            const document = await listModel.create({ ...list });
            return response.status(200).json({
                message: 'This list has successfully been created',
                data: document
            });
        } catch (error) {
            return response.status(400).send(error);
        }
    };
};

export const readOneList = (listModel: typeof ListModel) => {
    return async (request: Request, response: Response) => {
        const list = request.params;
        console.log(request.params);

        try {
            const document = await listModel.findOne(list);
            if (document) {
                console.log(document);
                return response.status(200).json({
                    message:
                        'This requested list has successfully been retrieved.',
                    data: document
                });
            }

            return response.status(400).json({
                message: 'The requested list does not exist'
            });
        } catch (error) {
            return response.status(400).send(error);
        }
    };
};

export const updateOneList = (listModel: typeof ListModel) => {
    return async (request: Request, response: Response) => {
        const list = request.body;
        try {
            const document = await listModel.findByIdAndUpdate(list._id, list, {
                new: true
            });
            if (document) {
                return response.status(200).json({
                    message: 'The specified list has successfully been updated',
                    data: document
                });
            }

            return response.status(400).json({
                message: 'The specified list was unable to be updated.'
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
            const document = await listModel.findByIdAndDelete(list._id);
            if (document !== null) {
                return response.status(200).json({
                    message:
                        'The specified list has successfully been deleted.',
                    data: document
                });
            } else {
                return response.status(400).json({
                    message:
                        'The specified list has already been deleted in the past'
                });
            }
        } catch (error) {
            return response.status(400).send(error);
        }
    };
};

export const deleteAllLists = (listModel: typeof ListModel) => {
    return async (request: Request, response: Response) => {
        try {
            const document = await listModel.deleteMany({});
            return response.status(200).json({
                message: 'All lists have successfully been deleted',
                data: document
            });
        } catch (error) {
            return response.status(400).send(error);
        }
    };
};
