import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PagoSchema = new Schema({
    fecha_pago: { type: Date },
    hora_aplicacion: { type: Date, default: new Date() },
    paciente: { type: Schema.ObjectId, ref: 'Paciente' },
    cita: { type: Schema.ObjectId, ref: 'Cita' },
    dermatologo: { type: Schema.ObjectId, ref: 'Empleado' },
    tratamientos: [{ type: Schema.ObjectId, ref: 'Tratamiento' }],
    quien_recibe_pago: { type: Schema.ObjectId, ref: 'Empleado' },
    cantidad: { type: String },
    total: { type: String },
    forma_pago: { type: Schema.ObjectId, ref: 'FormaPago' },
    banco: { type: Schema.ObjectId, ref: 'Banco' },
    tipo_tarjeta: { type: Schema.ObjectId, ref: 'TipoTarjeta' },
    digitos: { type: String },
    sucursal: { type: Schema.ObjectId, ref: 'Sucursal' },
    factura: { type: Boolean, default: false },
    deposito_confirmado: { type: Boolean, default: false },
    observaciones: { type: String },
    porcentaje_descuento_clinica: { type: String },
    descuento_clinica: { type: String },
    descuento_dermatologo: { type: String },
    tipo_servicio: { type: Schema.ObjectId, ref: 'Servicio' },
    servicio: { type: String },
    pago_anticipado: { type: Boolean, default: false },
    ingreso: { type: Schema.ObjectId, ref: 'Ingreso' },
});