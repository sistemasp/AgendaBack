import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const EgresoSchema = new Schema({
    create_date: { type: Date },
    turno: { type: String },
    hora_aplicacion: { type: Date, default: new Date() },
    recepcionista: { type: constMongoose.ObjectId, ref: 'Empleado' },
    concepto: { type: String },
    descripcion: { type: String },
    cantidad: { type: String },
    retencion: { type: String },
    tipo_egreso: { type: constMongoose.ObjectId, ref: 'TipoEgreso' },
    sucursal: { type: constMongoose.ObjectId, ref: 'Sucursal' },
    forma_pago: { type: constMongoose.ObjectId, ref: 'FormaPago' },
});