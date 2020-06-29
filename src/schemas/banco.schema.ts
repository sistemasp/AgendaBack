import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const BancoSchema = new Schema({
    nombre : String
});