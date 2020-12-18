import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ConsecutivoSchema = new Schema({
    consecutivo: { type: Number },
    tipo_servicio: { type: Schema.ObjectId, ref: 'Servicio' },
    servicio: { type: String },
    sucursal: { type: Schema.ObjectId, ref: 'Sucursal' },
    fecha_hora: { type: Date },
    status: { type: Schema.ObjectId, ref: 'Status' },
});