import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TipoIngresoSchema = new Schema({
    nombre : String
});