import mongoose, { Schema, Document, Model, model } from 'mongoose';
import { Tracing } from 'trace_events';
import { IItem } from '../item/item.model';

export interface IList extends Document {
    listId: number;
    listTitle: string;
    listDescription?: string;
    itemCollection: IItem[];
    creationDate: Date;
}

export const ListSchema: Schema = new Schema({
    listId: {
        type: Number,
        required: true,
        unique: true
    },
    listTitle: {
        type: String,
        required: true
    },
    listDescription: {
        type: String
    },
    creationDate: {
        type: Date,
        required: true
    }
});
