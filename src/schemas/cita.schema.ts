import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const CitaSchema = new Schema({
    create_date: { type: Date },
    hora_aplicacion: { type: Date },
    fecha_hora: { type: Date },
    paciente: { type: constMongoose.ObjectId, ref: 'Paciente' },
    cita: { type: constMongoose.ObjectId, ref: 'Cita' },
    dermatologo: { type: constMongoose.ObjectId, ref: 'Empleado' },
    servicio: { type: constMongoose.ObjectId, ref: 'Servicio' },
    tratamientos: [{}],
    areas: [{ type: constMongoose.ObjectId, ref: 'Area' }],
    numero_sesion: { type: String },
    quien_agenda: { type: constMongoose.ObjectId, ref: 'Empleado' },
    tipo_cita: { type: constMongoose.ObjectId, ref: 'TipoCita' },
    medio: { type: constMongoose.ObjectId, ref: 'Medio' },
    quien_confirma_llamada: { type: constMongoose.ObjectId, ref: 'Empleado' },
    quien_confirma_asistencia: { type: constMongoose.ObjectId, ref: 'Empleado' },
    status: { type: constMongoose.ObjectId, ref: 'Status' },
    motivos: { type: String },
    precio: { type: String },
    tiempo: { type: String },
    observaciones: { type: String },
    sucursal: { type: constMongoose.ObjectId, ref: 'Sucursal' },
    promovendedor: { type: constMongoose.ObjectId, ref: 'Empleado' },
    cosmetologa: { type: constMongoose.ObjectId, ref: 'Empleado' },
    hora_llegada: { type: String },
    hora_atencion: { type: String },
    hora_salida: { type: String },
    pagado: { type: Boolean, default: false },
    pagos: [{ type: constMongoose.ObjectId, ref: 'Pago' }],
    consecutivo: { type: Number },
});