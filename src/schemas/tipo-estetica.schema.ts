import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TipoEsteticaSchema = new Schema({
    nombre : String
});