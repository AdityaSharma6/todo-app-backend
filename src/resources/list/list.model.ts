import { Schema, model } from 'mongoose';
export const ListSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30,
        unique: true
    },
    description: {
        type: String,
        trim: true,
        maxlength: 50
    },
    creationDate: {
        type: Date,
        required: true
    }
});

ListSchema.index({ title: 1 }, { unique: true });

export const ListModel = model('List', ListSchema);
