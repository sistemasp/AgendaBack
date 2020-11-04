import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const EgresoSchema = new Schema({
    create_date: { type: Date },
    hora_aplicacion: { type: Date },
    recepcionista: { type: Schema.ObjectId, ref: 'Empleado' },
    concepto: String,
    cantidad: String,
    tipo_egreso: { type: Schema.ObjectId, ref: 'TipoEgreso' },
    sucursal: { type: Schema.ObjectId, ref: 'Sucursal' },
    metodo_pago: { type: Schema.ObjectId, ref: 'MetodoPago' },
});