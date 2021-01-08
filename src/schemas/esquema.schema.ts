import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const EsquemaSchema = new Schema({
    nombre: { type: String },
    descripcion: { type: String },
    porcentaje_consulta: { type: String },
    porcentaje_cirugias: { type: String },
    porcentaje_dermocosmetica: { type: String },
    porcentaje_reconsulta: { type: String },
    porcentaje_laser: { type: String },
    create_date: { type: Date },
    is_active: { type: Boolean, default: true },
});