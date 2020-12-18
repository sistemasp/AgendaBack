import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ConsultaSchema = new Schema({
    create_date: { type : Date },
    hora_aplicacion: { type: Date },
    folio : { type: String },
    fecha_hora : { type : Date },
    paciente : { type: Schema.ObjectId, ref: 'Paciente'},
    dermatologo : { type: Schema.ObjectId, ref: 'Empleado'},
    quien_agenda : { type: Schema.ObjectId, ref: 'Empleado'},
    tipo_cita : { type: Schema.ObjectId, ref: 'TipoCita'},
    medio: { type: Schema.ObjectId, ref: 'Medio' },
    quien_confirma_llamada: { type: Schema.ObjectId, ref: 'Empleado' },
    quien_confirma_asistencia: { type: Schema.ObjectId, ref: 'Empleado' },
    status : { type: Schema.ObjectId, ref: 'Status'},
    motivos : { type: String },
    precio : { type: String },
    hora_llegada : { type: String },
    hora_atencion : { type: String },
    hora_salida : { type: String },
    tiempo : { type: String },
    observaciones : { type: String },
    sucursal : { type: Schema.ObjectId, ref: 'Sucursal'},
    promovendedor : { type: Schema.ObjectId, ref: 'Empleado'},
    pagado : { type: Boolean, default: false },
    pagos : [{ type: Schema.ObjectId, ref: 'Pago'}],
    consecutivo : { type: Number },
    frecuencia : { type: Schema.ObjectId, ref: 'Frecuencia'},
    servicio: { type: Schema.ObjectId, ref: 'Servicio' },
    producto: { type: Schema.ObjectId, ref: 'Producto' },
});