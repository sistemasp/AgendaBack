import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const HorarioSchema = new Schema({
    hora : { type: String },
    servicio : { type: Schema.ObjectId, ref: 'Servicio'},
    sucursal : { type: Schema.ObjectId, ref: 'Sucursal'}
});