import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CorteSchema = new Schema({
    create_date: { type: Date },
    turno: String,
    ingresos: [{ type: Schema.ObjectId, ref: 'Ingreso' }],
    egresos: [{ type: Schema.ObjectId, ref: 'Egreso' }],
    recepcionista: { type: Schema.ObjectId, ref: 'Empleado' },
    sucursal: { type: Schema.ObjectId, ref: 'Sucursal' },
});