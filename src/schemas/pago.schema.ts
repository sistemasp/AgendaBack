import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const PagoSchema = new Schema({
    fecha_pago: { type: Date },
    hora_aplicacion: { type: Date, default: new Date() },
    paciente: { type: constMongoose.ObjectId, ref: 'Paciente' },
    dermatologo: { type: constMongoose.ObjectId, ref: 'Empleado' },
    tratamientos: [{ type: constMongoose.ObjectId, ref: 'Tratamiento' }],
    quien_recibe_pago: { type: constMongoose.ObjectId, ref: 'Empleado' },
    cantidad: { type: String },
    total: { type: String },
    forma_pago: { type: constMongoose.ObjectId, ref: 'FormaPago' },
    banco: { type: constMongoose.ObjectId, ref: 'Banco' },
    tipo_tarjeta: { type: constMongoose.ObjectId, ref: 'TipoTarjeta' },
    digitos: { type: String },
    sucursal: { type: constMongoose.ObjectId, ref: 'Sucursal' },
    factura: { type: Boolean, default: false },
    deposito_confirmado: { type: Boolean, default: false },
    observaciones: { type: String },
    porcentaje_descuento_clinica: { type: String },
    descuento_clinica: { type: String },
    descuento_dermatologo: { type: String },
    tipo_servicio: { type: constMongoose.ObjectId, ref: 'Servicio' },
    servicio: { type: String },
    pago_anticipado: { type: Boolean, default: false },
    ingreso: { type: constMongoose.ObjectId, ref: 'Ingreso' },
});