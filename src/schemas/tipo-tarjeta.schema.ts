import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TipoTarjetaSchema = new Schema({
    nombre : String
});