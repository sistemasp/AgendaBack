import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TipoEgresoSchema = new Schema({
    nombre : String
});