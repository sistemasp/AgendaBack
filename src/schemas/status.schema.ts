import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const StatusSchema = new Schema({
    nombre : String,
    color : String,
    confirmacion : { type: Boolean, default: false }
});