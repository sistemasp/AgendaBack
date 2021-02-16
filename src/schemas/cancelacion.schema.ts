import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const CancelacionSchema = new Schema({
    supervisor: { type: constMongoose.ObjectId, ref: 'Empleado' },
    recepcionista: { type: constMongoose.ObjectId, ref: 'Empleado' },
    create_date: { type: Date, default: new Date() },
    tipo_servicio: { type: constMongoose.ObjectId, ref: 'Servicio' },
    servicio: { type: String },
    hora_llegada: { type: String },
    hora_salida: { type: String },
    status: { type: constMongoose.ObjectId, ref: 'Status' },
});