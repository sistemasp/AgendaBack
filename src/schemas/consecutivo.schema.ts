import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const ConsecutivoSchema = new Schema({
    consecutivo: { type: Number },
    tipo_servicio: { type: constMongoose.ObjectId, ref: 'Servicio' },
    servicio: { type: String },
    sucursal: { type: constMongoose.ObjectId, ref: 'Sucursal' },
    fecha_hora: { type: Date },
    status: { type: constMongoose.ObjectId, ref: 'Status' },
});