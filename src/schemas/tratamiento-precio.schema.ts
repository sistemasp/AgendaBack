import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TratamientoPrecioSchema = new Schema({
    Tratamiento : { type: Schema.ObjectId, ref: 'Tratamiento'},
    precio : String
});