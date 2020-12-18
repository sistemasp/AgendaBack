import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UsoCfdiSchema = new Schema({
    clave : { type: String },
    descripcion : String
});