import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TratamientoSchema = new Schema({
    nombre : String,
    clave : String,
    servicio : String,
    tiempo : String,
    precio : String
});