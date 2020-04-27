import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const EmpleadoSchema = new Schema({
    nombre : String,
    numero_empleado : String,
    telefono : String,
    rol : { type: Schema.ObjectId, ref: 'Rol'}
});