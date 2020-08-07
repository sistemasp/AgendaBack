import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PacienteSchema = new Schema({
    nombres: String,
    apellidos: String,
    fecha_nacimiento: { type: String },
    direccion: String,
    telefono: String,
    sexo: { type: Schema.ObjectId, ref: 'Sexo' },
    ocupacion: String,
    alerta_medica: Boolean,
    estado: String,
    municipio: String,
    colonia: String,
    cp: String,
});