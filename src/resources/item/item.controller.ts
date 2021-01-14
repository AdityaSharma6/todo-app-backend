import { Request, Response } from 'express';
import { request } from 'http';
import { IItem, ItemSchema, ItemModel } from './item.model';

export const getAllItems = (request: Request, response: Response) => {
    response.send('Route: /items \n Verb: GET \n Function: Gets All Items');
};

// Get One Item
export const getOneItem = (request: Request, response: Response) => {
    console.log(request.params);
    console.log(request.body);
    console.log(request.query);
    console.log(request.headers);
    response.send(
        'Route: /items/:id \n Verb: GET \n Function: Get One Item By Id'
    );
};

// Update One Item
export const updateOneItem = (request: Request, response: Response) => {
    response.send(
        'Route: /items/:id \n Verb: UPDATE \n Function: Update One Item '
    );
};

// Create One Item
export const createOneItem = (request: Request, response: Response) => {
    response.send(
        'Route: /items/:id \n Verb: POST \n Function: Create One Item'
    );
};

// Delete One Item
export const deleteOneItem = (request: Request, response: Response) => {
    response.send('Route /items/:id \n Verb: DELETE Function: Delete One Item');
};
