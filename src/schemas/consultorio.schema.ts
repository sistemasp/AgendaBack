import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const ConsultorioSchema = new Schema({
    nombre : { type: String },
    dermatologo : { type: constMongoose.ObjectId, ref: 'Empleado'},
    paciente : { type: constMongoose.ObjectId, ref: 'Paciente'},
    tipo_servicio : { type: constMongoose.ObjectId, ref: 'Servicio'},
    servicio : { type: String },
    sucursal : { type: constMongoose.ObjectId, ref: 'Sucursal'},
    disponible : { type: Boolean, default: true },
    consulta : { type: constMongoose.ObjectId, ref: 'Consulta'}
});