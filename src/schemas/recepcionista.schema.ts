import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RecepcionistaSchema = new Schema({
    nombre : { type: String },
    numero_empleado : { type: String },
    telefono : String
});