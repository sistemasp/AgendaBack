import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CitaSchema = new Schema({
    fecha_hora : { type : Date },
    paciente : { type: Schema.ObjectId, ref: 'Paciente'},
    medico : { type: Schema.ObjectId, ref: 'Empleado'},
    servicio : { type: Schema.ObjectId, ref: 'Servicio'},
    tratamientos : [{ type: Schema.ObjectId, ref: 'Tratamiento'}],
    numero_sesion : String,
    quien_agenda : { type: Schema.ObjectId, ref: 'Empleado'},
    tipo_cita : { type: Schema.ObjectId, ref: 'TipoCita'},
    quien_confirma : { type: Schema.ObjectId, ref: 'Empleado'},
    status : { type: Schema.ObjectId, ref: 'Status'},
    motivos : String,
    precio : String,
    tiempo : String,
    observaciones : String,
    sucursal : { type: Schema.ObjectId, ref: 'Sucursal'},
    promovendedor : { type: Schema.ObjectId, ref: 'Empleado'},
    cosmetologa : { type: Schema.ObjectId, ref: 'Empleado'},
});