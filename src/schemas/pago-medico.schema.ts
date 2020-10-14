import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PagoMedicoSchema = new Schema({
    create_date: { type: Date },
    fecha_pago: { type: Date },
    medico: { type: Schema.ObjectId, ref: 'Empleado' },
    consultas: [{ type: Schema.ObjectId, ref: 'Consulta' }],
    cirugias: [{ type: Schema.ObjectId, ref: 'Cirugia' }],
    tratamientos: [{ type: Schema.ObjectId, ref: 'Area' }],
    esteticas: [{ type: Schema.ObjectId, ref: 'Estetica' }],
    sucursal: { type: Schema.ObjectId, ref: 'Sucursal' },
    turno: String,
    retencion: String,
    total: String,
    pagado: Boolean,
});