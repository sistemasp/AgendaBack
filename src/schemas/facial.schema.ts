import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const FacialSchema = new Schema({
    create_date: { type: Date },
    fecha_hora: { type: Date },
    paciente: { type: Schema.ObjectId, ref: 'Paciente' },
    cita: { type: Schema.ObjectId, ref: 'Cta' },
    medico: { type: Schema.ObjectId, ref: 'Empleado' },
    servicio: { type: Schema.ObjectId, ref: 'Servicio' },
    tratamientos: [{}],
    areas: [{ type: Schema.ObjectId, ref: 'Area' }],
    numero_sesion: String,
    quien_agenda: { type: Schema.ObjectId, ref: 'Empleado' },
    tipo_cita: { type: Schema.ObjectId, ref: 'TipoCita' },
    medio: { type: Schema.ObjectId, ref: 'Medio' },
    quien_confirma_llamada: { type: Schema.ObjectId, ref: 'Empleado' },
    quien_confirma_asistencia: { type: Schema.ObjectId, ref: 'Empleado' },
    status: { type: Schema.ObjectId, ref: 'Status' },
    motivos: String,
    precio: String,
    tiempo: String,
    observaciones: String,
    sucursal: { type: Schema.ObjectId, ref: 'Sucursal' },
    promovendedor: { type: Schema.ObjectId, ref: 'Empleado' },
    cosmetologa: { type: Schema.ObjectId, ref: 'Empleado' },
    hora_llegada: String,
    hora_atencion: String,
    hora_salida: String,
    pagado: { type: Boolean, default: false },
    pagos: [{ type: Schema.ObjectId, ref: 'Pago' }],
    consecutivo: { type: Number },
});