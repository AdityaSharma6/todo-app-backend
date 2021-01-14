import mongoose from 'mongoose';
import { model, Model, Schema, Document } from 'mongoose';

export interface IItem extends Document {
    itemId: number;
    listId: number;
    task: string;
    description?: string;
    creationDate: Date;
    dueDate: Date;
}

export const ItemSchema: Schema = new Schema({
    itemId: {
        type: Number,
        required: true
    },
    listId: {
        type: Number,
        required: true
    },
    task: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    creationDate: {
        type: Date
    },
    dueDate: {
        type: Date
    }
});

export const ItemModel: Model<IItem> = model('Item', ItemSchema);
