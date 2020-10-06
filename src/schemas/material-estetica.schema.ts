import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MaterialEsteticaSchema = new Schema({
    nombre : String,
    precio : String,
    tipo_estetica : { type: Schema.ObjectId, ref: 'TipoEstetica'},
});