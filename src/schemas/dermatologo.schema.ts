import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const DermatologoSchema = new Schema({
    nombre : { type: String },
    clave : { type: String },
    telefono : String
});