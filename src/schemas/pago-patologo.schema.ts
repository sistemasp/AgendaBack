import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PagoPatologoSchema = new Schema({
    create_date: { type: Date },
    fecha_pago: { type: Date },
    patologo: { type: Schema.ObjectId, ref: 'Empleado' },
    biopsias: [{ type: Schema.ObjectId, ref: 'Biopsia' }],
    sucursal: { type: Schema.ObjectId, ref: 'Sucursal' },
    turno: { type: String },
    retencion: { type: String },
    total: { type: String },
    pagado: Boolean,
});