import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SucursalSchema = new Schema({
    clave: { type: String },
    nombre: { type: String },
    direccion: { type: String },
    telefonos: [String],
    servicios: [{ type: Schema.ObjectId, ref: 'Servicio' }],
    precio_matutino: { type: String },
    precio_vespertino: { type: String },
    precio_sabado_matutino: { type: String },
    precio_sabado_vespertino: { type: String },
    precio_festivo: { type: String },
});