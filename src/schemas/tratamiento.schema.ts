import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const TratamientoSchema = new Schema({
    nombre: { type: String },
    servicio: { type: constMongoose.ObjectId, ref: 'Servicio' },
});