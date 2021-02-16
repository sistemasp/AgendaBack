import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const PagoPatologoSchema = new Schema({
    create_date: { type: Date },
    fecha_pago: { type: Date },
    patologo: { type: constMongoose.ObjectId, ref: 'Empleado' },
    biopsias: [{ type: constMongoose.ObjectId, ref: 'Biopsia' }],
    sucursal: { type: constMongoose.ObjectId, ref: 'Sucursal' },
    turno: { type: String },
    retencion: { type: String },
    total: { type: String },
    pagado: Boolean,
});