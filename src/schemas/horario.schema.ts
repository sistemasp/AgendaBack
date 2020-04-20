import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const HorarioSchema = new Schema({
    hora : String,
    clave_tratamiento : String
});