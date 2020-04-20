import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PaqueteSchema = new Schema({
    nombre : String,
    clave : String,
    tratamientos : [{ type: Schema.ObjectId, ref: 'Tratamiento' }],
    precio : String,
    tiempo : String
});