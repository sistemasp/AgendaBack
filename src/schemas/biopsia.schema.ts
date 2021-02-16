import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const BiopsiaSchema = new Schema({
    create_date: { type : Date },
    hora_aplicacion: { type: Date },
    consecutivo: { type: Number },
    fecha_realizacion: { type : Date },
    consulta: { type: constMongoose.ObjectId, ref: 'Consulta'},
    dermatologo: { type: constMongoose.ObjectId, ref: 'Empleado'},
    paciente: { type: constMongoose.ObjectId, ref: 'Paciente'},
    sucursal: { type: constMongoose.ObjectId, ref: 'Sucursal'},
    patologo: { type: constMongoose.ObjectId, ref: 'Empleado'},
    con_pago: Boolean,
    fecha_entrega_patologo: { type : Date },
    quien_entrega: { type: constMongoose.ObjectId, ref: 'Empleado'},
    fecha_entrega_resultado: { type : Date },
    quien_recibe: { type: constMongoose.ObjectId, ref: 'Empleado'},
    diagnostico: { type: String },
    status: { type: constMongoose.ObjectId, ref: 'Status'},
    a_quien_se_entrega: { type: constMongoose.ObjectId, ref: 'Empleado'},
    fecha_entrega: { type : Date },
    quien_lo_entrega: { type: constMongoose.ObjectId, ref: 'Empleado'},
    tipo_servicio: { type: constMongoose.ObjectId, ref: 'Servicio' },
});