import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const TratamientoPrecioSchema = new Schema({
    Tratamiento : { type: constMongoose.ObjectId, ref: 'Tratamiento'},
    precio : String
});