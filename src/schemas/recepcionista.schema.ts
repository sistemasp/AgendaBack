import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RecepcionistaSchema = new Schema({
    nombre : String,
    numero_empleado : String,
    telefono : String
});