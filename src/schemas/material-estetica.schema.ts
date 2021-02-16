import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const MaterialEsteticaSchema = new Schema({
    nombre : { type: String },
    precio : { type: String },
    tipo_estetica : { type: constMongoose.ObjectId, ref: 'TipoEstetica'},
    iva: { type: Boolean, default: false },
});