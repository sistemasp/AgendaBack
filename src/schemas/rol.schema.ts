import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RolSchema = new Schema({
    nombre : { type: String },
    permisos : [String],
});