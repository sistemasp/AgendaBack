import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TratamientoSchema = new Schema({
    nombre: { type: String },
    servicio: { type: Schema.ObjectId, ref: 'Servicio' },
});