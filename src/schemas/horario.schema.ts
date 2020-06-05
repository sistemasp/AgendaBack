import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const HorarioSchema = new Schema({
    hora : String,
    servicio : { type: Schema.ObjectId, ref: 'Servicio'}
});