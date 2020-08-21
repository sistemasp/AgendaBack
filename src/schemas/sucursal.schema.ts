import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SucursalSchema = new Schema({
    clave: String,
    nombre: String,
    direccion: String,
    telefonos: [String],
    servicios: [{ type: Schema.ObjectId, ref: 'Servicio' }],
    precio_matutino: String,
    precio_vespertino: String,
    precio_sabado_matutino: String,
    precio_sabado_vespertino: String,
    precio_festivo: String,
});