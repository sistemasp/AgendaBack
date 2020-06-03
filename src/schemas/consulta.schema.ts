import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ConsultaSchema = new Schema({
    hora : String,
    fecha : String,
    paciente : { type: Schema.ObjectId, ref: 'Paciente'},
    medico : { type: Schema.ObjectId, ref: 'Empleado'},
    quien_agenda : { type: Schema.ObjectId, ref: 'Empleado'},
    tipo_cita : String,
    quien_confirma : { type: Schema.ObjectId, ref: 'Empleado'},
    estado : String,
    motivos : String,
    precio : String,
    hora_atencion : String,
    hora_salida : String,
    tiempo : String,
    observaciones : String,
    sucursal : { type: Schema.ObjectId, ref: 'Sucursal'},
    promovendedor : { type: Schema.ObjectId, ref: 'Empleado'},
});