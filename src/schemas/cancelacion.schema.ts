import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CancelacionSchema = new Schema({
    supervisor: { type: Schema.ObjectId, ref: 'Empleado' },
    recepcionista: { type: Schema.ObjectId, ref: 'Empleado' },
    create_date: { type: Date, default: new Date() },
    tipo_servicio: { type: Schema.ObjectId, ref: 'Servicio' },
    servicio: { type: String },
    hora_llegada: { type: String },
    hora_salida: { type: String },
    status: { type: Schema.ObjectId, ref: 'Status' },
});