import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SucursalSchema = new Schema({
    nombre : String,
    direccion : String,
    telefonos : [String],
    servicios : [{ type: Schema.ObjectId, ref: 'Servicio'}],
});