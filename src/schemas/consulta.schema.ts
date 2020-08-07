import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ConsultaSchema = new Schema({
    folio : String,
    fecha_hora : { type : Date },
    paciente : { type: Schema.ObjectId, ref: 'Paciente'},
    medico : { type: Schema.ObjectId, ref: 'Empleado'},
    quien_agenda : { type: Schema.ObjectId, ref: 'Empleado'},
    tipo_cita : { type: Schema.ObjectId, ref: 'TipoCita'},
    quien_confirma : { type: Schema.ObjectId, ref: 'Empleado'},
    status : { type: Schema.ObjectId, ref: 'Status'},
    motivos : String,
    precio : String,
    hora_llegada : String,
    hora_atencion : String,
    hora_salida : String,
    tiempo : String,
    observaciones : String,
    sucursal : { type: Schema.ObjectId, ref: 'Sucursal'},
    promovendedor : { type: Schema.ObjectId, ref: 'Empleado'},
    pagado : { type: Boolean, default: false },
    pagos : [{ type: Schema.ObjectId, ref: 'Pago'}],
    consecutivo : String,
    frecuencia : { type: Schema.ObjectId, ref: 'Frecuencia'},
});