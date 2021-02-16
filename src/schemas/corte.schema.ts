import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const CorteSchema = new Schema({
    create_date: { type: Date },
    hora_apertura: { type: Date },
    hora_cierre: { type: Date },
    turno: { type: String },
    ingresos: [{ type: constMongoose.ObjectId, ref: 'Ingreso' }],
    pagos_anticipados: [{ type: constMongoose.ObjectId, ref: 'Ingreso' }],
    egresos: [{ type: constMongoose.ObjectId, ref: 'Egreso' }],
    recepcionista: { type: constMongoose.ObjectId, ref: 'Empleado' },
    sucursal: { type: constMongoose.ObjectId, ref: 'Sucursal' },
    generado: { type: Boolean, default: false },
});