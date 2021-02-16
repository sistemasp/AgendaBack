import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const HorarioSchema = new Schema({
    hora : { type: String },
    servicio : { type: constMongoose.ObjectId, ref: 'Servicio'},
    sucursal : { type: constMongoose.ObjectId, ref: 'Sucursal'}
});