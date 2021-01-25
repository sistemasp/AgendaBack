import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const EgresoSchema = new Schema({
    create_date: { type: Date },
    turno: { type: String },
    hora_aplicacion: { type: Date, default: new Date() },
    recepcionista: { type: Schema.ObjectId, ref: 'Empleado' },
    concepto: { type: String },
    descripcion: { type: String },
    cantidad: { type: String },
    retencion: { type: String },
    tipo_egreso: { type: Schema.ObjectId, ref: 'TipoEgreso' },
    sucursal: { type: Schema.ObjectId, ref: 'Sucursal' },
    forma_pago: { type: Schema.ObjectId, ref: 'FormaPago' },
});