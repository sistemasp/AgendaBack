import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const PacienteSchema = new Schema({
    create_date: { type : Date },
    nombres: { type: String },
    apellidos: { type: String },
    fecha_nacimiento: { type: String },
    direccion: { type: String },
    telefono: { type: String },
    sexo: { type: constMongoose.ObjectId, ref: 'Sexo' },
    ocupacion: { type: String },
    alerta_medica: Boolean,
    estado: { type: String },
    municipio: { type: String },
    colonia: { type: String },
    cp: { type: String },
});