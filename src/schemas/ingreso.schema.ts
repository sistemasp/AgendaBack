import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const IngresoSchema = new Schema({
    create_date: { type: Date },
    hora_aplicacion: { type: Date, default: new Date() },
    recepcionista: { type: Schema.ObjectId, ref: 'Empleado' },
    concepto: String,
    cantidad: String,
    tipo_ingreso: { type: Schema.ObjectId, ref: 'TipoIngreso' },
    sucursal: { type: Schema.ObjectId, ref: 'Sucursal' },
    metodo_pago: { type: Schema.ObjectId, ref: 'MetodoPago' },
    pago: { type: Schema.ObjectId, ref: 'Pago' },
    pago_anticipado: { type: Boolean, default: false },
});