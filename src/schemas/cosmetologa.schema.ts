import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CosmetologaSchema = new Schema({
    nombre : { type: String },
    numero_empleado : { type: String },
    telefono : String
});