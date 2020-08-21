import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MaterialSchema = new Schema({
    nombre : String
});