import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MedioSchema = new Schema({
    nombre : String
});