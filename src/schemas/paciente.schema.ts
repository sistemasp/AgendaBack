import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PacienteSchema = new Schema({
    nombres : String,
    apellidos : String,
    fecha_nacimiento : { type : String },
    direccion : String,
    telefono : String
});