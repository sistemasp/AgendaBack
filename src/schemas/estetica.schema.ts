import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const EsteticaSchema = new Schema({
    create_date: { type: Date },
    hora_aplicacion: { type: Date },
    fecha_hora: { type: Date },
    consulta: { type: constMongoose.ObjectId, ref: 'Consulta' },
    paciente: { type: constMongoose.ObjectId, ref: 'Paciente' },
    dermatologo: { type: constMongoose.ObjectId, ref: 'Empleado' },
    quien_agenda: { type: constMongoose.ObjectId, ref: 'Empleado' },
    quien_confirma: { type: constMongoose.ObjectId, ref: 'Empleado' },
    sucursal: { type: constMongoose.ObjectId, ref: 'Sucursal' },
    tipo_cita: { type: constMongoose.ObjectId, ref: 'TipoCita' },
    consecutivo: { type: Number },
    pagado: { type: Boolean, default: false },
    hora_llegada: { type: String },
    hora_atencion: { type: String },
    hora_salida: { type: String },
    precio: { type: String },
    total: { type: String },
    pago_dermatologo: { type: String },
    materiales: [],
    toxinas_rellenos: [],
    status: { type: constMongoose.ObjectId, ref: 'Status' },
    servicio: { type: constMongoose.ObjectId, ref: 'Servicio' },
    factura: { type: constMongoose.ObjectId, ref: 'Factura' },
    pagos: [{ type: constMongoose.ObjectId, ref: 'Pago' }],
    producto: { type: constMongoose.ObjectId, ref: 'Producto' },
    frecuencia: { type: constMongoose.ObjectId, ref: 'Frecuencia' },
    total_aplicacion: { type: String },
    porcentaje_descuento_clinica: { type: String },
    has_descuento_dermatologo: { type: Boolean, default: false },
    descuento_clinica: { type: String },
    descuento_dermatologo: { type: String },
});
