import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const EmpleadoSchema = new Schema({
    nombre: String,
    numero_empleado: String,
    telefono: String,
    password: String,
    rol: { type: Schema.ObjectId, ref: 'Rol' },
    color: String,
    cedula: String,
    fecha_ingreso: { type: Date },
    fecha_baja: { type: Date },
    disponible: { type: Boolean, default: true },
    porcentaje: String,
    porcentaje_estetica: String,
});