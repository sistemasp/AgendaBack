import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UsoCfdiSchema = new Schema({
    clave : String,
    descripcion : String
});