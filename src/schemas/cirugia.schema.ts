import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CirugiaSchema = new Schema({
    create_date: { type: Date },
    hora_aplicacion: { type: Date },
    fecha_hora: { type: Date },
    consulta: { type: Schema.ObjectId, ref: 'Consulta' },
    paciente: { type: Schema.ObjectId, ref: 'Paciente' },
    dermatologo: { type: Schema.ObjectId, ref: 'Empleado' },
    quien_agenda: { type: Schema.ObjectId, ref: 'Empleado' },
    quien_confirma: { type: Schema.ObjectId, ref: 'Empleado' },
    patologo: { type: Schema.ObjectId, ref: 'Empleado' },
    sucursal: { type: Schema.ObjectId, ref: 'Sucursal' },
    status: { type: Schema.ObjectId, ref: 'Status' },
    consecutivo: { type: Number },
    pagado: { type: Boolean, default: false },
    precio: String,
    total: String,
    hora_llegada: String,
    hora_atencion: String,
    hora_salida: String,
    materiales: [],
    biopsias: [{ type: Schema.ObjectId, ref: 'Biopsia' }],
    hasBiopsia: { type: Boolean, default: false },
    costo_biopsias: String,
    servicio: { type: Schema.ObjectId, ref: 'Servicio' },
    pagos: [{ type: Schema.ObjectId, ref: 'Pago' }],
});
