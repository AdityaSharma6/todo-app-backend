import mongoose from 'mongoose';
import { model, Schema } from 'mongoose';

export const ItemSchema: Schema = new Schema({
    listId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'List',
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30
    },
    description: {
        type: String,
        trim: true,
        maxlength: 50
    },
    creationDate: {
        type: Date,
        default: Date.now()
    },
    dueDate: {
        type: Date
    }
});

export const ItemModel = model('Item', ItemSchema);
