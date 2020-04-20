import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const DermatologoSchema = new Schema({
    nombre : String,
    clave : String,
    telefono : String
});