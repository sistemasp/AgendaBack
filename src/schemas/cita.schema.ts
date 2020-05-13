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
    quien_agenda : { type: Schema.ObjectId, ref: 'Empleado'},
    tipo_cita : String,
    confirmo : String,
    quien_confirma : { type: Schema.ObjectId, ref: 'Empleado'},
    asistio : String,
    motivos : String,
    precio : String,
    tiempo : String,
    observaciones : String,
    sucursal : { type: Schema.ObjectId, ref: 'Sucursal'},
    promovendedor : { type: Schema.ObjectId, ref: 'Empleado'},
    cosmetologa : { type: Schema.ObjectId, ref: 'Empleado'},
});