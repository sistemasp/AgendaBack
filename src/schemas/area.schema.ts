import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const AreaSchema = new Schema({
    nombre: { type: String },
    servicio: { type: constMongoose.ObjectId, ref: 'Servicio' },
    tratamiento: { type: constMongoose.ObjectId, ref: 'Tratamiento' },
    tiempo: { type: String },
    precio_ma: { type: String },
    precio_rd: { type: String },
    precio_oc: { type: String },
    precio_fe: { type: String },
    comision_derivado: { type: String },
    comision_revisado: { type: String },
    comision_realizado: { type: String },
    comision_derivado_ma: { type: String },
    comision_revisado_ma: { type: String },
    comision_realizado_ma: { type: String },
    comision_derivado_rd: { type: String },
    comision_revisado_rd: { type: String },
    comision_realizado_rd: { type: String },
    iva: { type: Boolean, default: false },
});