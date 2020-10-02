import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AreaSchema = new Schema({
    nombre: String,
    servicio: { type: Schema.ObjectId, ref: 'Servicio' },
    tratamiento: { type: Schema.ObjectId, ref: 'Tratamiento' },
    tiempo: String,
    precio_ma: String,
    precio_oc: String,
    precio_fe: String,
    comision_derivado: String,
    comision_revisado: String,
    comision_realizado: String,
});