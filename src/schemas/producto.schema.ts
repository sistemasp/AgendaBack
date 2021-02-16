import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const ProductoSchema = new Schema({
    nombre: { type: String },
    servicio: { type: constMongoose.ObjectId, ref: 'Servicio' },
});