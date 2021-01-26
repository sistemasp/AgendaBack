import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MaterialEsteticaSchema = new Schema({
    nombre : { type: String },
    precio : { type: String },
    tipo_estetica : { type: Schema.ObjectId, ref: 'TipoEstetica'},
    iva: { type: Boolean, default: false },
});