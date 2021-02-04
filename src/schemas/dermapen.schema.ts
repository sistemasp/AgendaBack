import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const DermapenSchema = new Schema({
    create_date: { type: Date },
    hora_aplicacion: { type: Date },
    fecha_hora: { type: Date },
    consulta: { type: Schema.ObjectId, ref: 'Consulta' },
    paciente: { type: Schema.ObjectId, ref: 'Paciente' },
    dermatologo: { type: Schema.ObjectId, ref: 'Empleado' },
    servicio: { type: Schema.ObjectId, ref: 'Servicio' },
    tratamientos: [{}],
    areas: [{ type: Schema.ObjectId, ref: 'Area' }],
    quien_agenda: { type: Schema.ObjectId, ref: 'Empleado' },
    tipo_cita: { type: Schema.ObjectId, ref: 'TipoCita' },
    medio: { type: Schema.ObjectId, ref: 'Medio' },
    quien_confirma_llamada: { type: Schema.ObjectId, ref: 'Empleado' },
    quien_confirma_asistencia: { type: Schema.ObjectId, ref: 'Empleado' },
    status: { type: Schema.ObjectId, ref: 'Status' },
    motivos: { type: String },
    precio: { type: String },
    costo: { type: String },
    pago_dermatologo: { type: String },
    total: { type: String },
    tiempo: { type: String },
    observaciones: { type: String },
    sucursal: { type: Schema.ObjectId, ref: 'Sucursal' },
    promovendedor: { type: Schema.ObjectId, ref: 'Empleado' },
    hora_llegada: { type: String },
    hora_atencion: { type: String },
    hora_salida: { type: String },
    factura: { type: Schema.ObjectId, ref: 'Factura' },
    pagado: { type: Boolean, default: false },
    pagos: [{ type: Schema.ObjectId, ref: 'Pago' }],
    materiales: [],
    consecutivo: { type: Number },
    producto: { type: Schema.ObjectId, ref: 'Producto' },
    frecuencia: { type: Schema.ObjectId, ref: 'Frecuencia' },
    total_aplicacion: { type: String },
    porcentaje_descuento_clinica: { type: String },
    has_descuento_dermatologo: { type: Boolean, default: false },
    descuento_clinica: { type: String },
    descuento_dermatologo: { type: String },
});