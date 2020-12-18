import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ServicioSchema = new Schema({
    nombre : { type: String },
    clave : { type: String },
    color : String
});