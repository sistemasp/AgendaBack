import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MetodoPagoSchema = new Schema({
    nombre : String
});