import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PagoMedicoSchema = new Schema({
    create_date: { type: Date },
    fecha_pago: { type: Date },
    medico: { type: Schema.ObjectId, ref: 'Empleado' },
    consultas: [{ type: Schema.ObjectId, ref: 'Consulta' }],
    cirugias: [{ type: Schema.ObjectId, ref: 'Cirugia' }],
    faciales: [{ type: Schema.ObjectId, ref: 'Facial' }],
    lasers: [{ type: Schema.ObjectId, ref: 'Laser' }],
    aparatologias: [{ type: Schema.ObjectId, ref: 'Aparatologia' }],
    esteticas: [{ type: Schema.ObjectId, ref: 'Estetica' }],
    sucursal: { type: Schema.ObjectId, ref: 'Sucursal' },
    turno: String,
    retencion: String,
    total: String,
    pagado: Boolean,
});