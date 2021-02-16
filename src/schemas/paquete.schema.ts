import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const PaqueteSchema = new Schema({
    nombre : { type: String },
    clave : { type: String },
    tratamientos : [{ type: constMongoose.ObjectId, ref: 'Tratamiento' }],
    precio : { type: String },
    tiempo : String
});