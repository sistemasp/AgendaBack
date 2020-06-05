import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ConsultorioSchema = new Schema({
    nombre : String,
    medico : { type: Schema.ObjectId, ref: 'Empleado'},
    paciente : { type: Schema.ObjectId, ref: 'Paciente'},
    sucursal : { type: Schema.ObjectId, ref: 'Sucursal'}
});