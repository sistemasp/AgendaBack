import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ServicioSchema = new Schema({
    nombre : String,
    clave : String,
    color : String
});