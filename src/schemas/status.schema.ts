import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const StatusSchema = new Schema({
    nombre : { type: String },
    color : { type: String },
    confirmacion : { type: Boolean, default: false }
});