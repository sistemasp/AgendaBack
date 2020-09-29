import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CabinaSchema = new Schema({
    nombre : String,
    cosmetologa : { type: Schema.ObjectId, ref: 'Empleado'},
    paciente : { type: Schema.ObjectId, ref: 'Paciente'},
    tipo_servicio : { type: Schema.ObjectId, ref: 'Servicio'},
    servicio : String,
    sucursal : { type: Schema.ObjectId, ref: 'Sucursal'},
    disponible : { type: Boolean, default: true }
});