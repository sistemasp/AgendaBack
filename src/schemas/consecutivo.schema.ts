import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ConsecutivoSchema = new Schema({
    consecutivo: String,
    tipo_servicio: { type: Schema.ObjectId, ref: 'Servicio' },
    servicio: String,
    sucursal: { type: Schema.ObjectId, ref: 'Sucursal' },
    fecha_hora: { type: Date },
    status: { type: Schema.ObjectId, ref: 'Status' },
});