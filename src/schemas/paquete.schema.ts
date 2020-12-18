import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PaqueteSchema = new Schema({
    nombre : { type: String },
    clave : { type: String },
    tratamientos : [{ type: Schema.ObjectId, ref: 'Tratamiento' }],
    precio : { type: String },
    tiempo : String
});