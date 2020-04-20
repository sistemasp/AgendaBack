import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CitaSchema = new Schema({
    hora : String,
    fecha : String,
    paciente : { type: Schema.ObjectId, ref: 'Paciente'},
    dermatologo : String,
    servicio : String,
    tratamientos : [{ type: Schema.ObjectId, ref: 'Tratamiento'}],
    numero_sesion : String,
    recepcionista : String,
    tipo_cita : String,
    confirmo : String,
    quien_confirma : String,
    asistio : String,
    precio : String,
    tiempo : String,
    sucursal : { type: Schema.ObjectId, ref: 'Sucursal'}
});