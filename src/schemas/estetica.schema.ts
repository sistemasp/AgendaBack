import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const EsteticaSchema = new Schema({
    create_date: { type: Date },
    hora_aplicacion: { type: Date },
    fecha_hora: { type: Date },
    consulta: { type: Schema.ObjectId, ref: 'Consulta' },
    paciente: { type: Schema.ObjectId, ref: 'Paciente' },
    dermatologo: { type: Schema.ObjectId, ref: 'Empleado' },
    quien_agenda: { type: Schema.ObjectId, ref: 'Empleado' },
    quien_confirma: { type: Schema.ObjectId, ref: 'Empleado' },
    sucursal: { type: Schema.ObjectId, ref: 'Sucursal' },
    consecutivo: { type: Number },
    pagado: { type: Boolean, default: false },
    hora_llegada: String,
    hora_atencion: String,
    hora_salida: String,
    precio: String,
    total: String,
    materiales: [],
    toxinas_rellenos: [],
    status: { type: Schema.ObjectId, ref: 'Status' },
    servicio: { type: Schema.ObjectId, ref: 'Servicio' },
    pagos: [{ type: Schema.ObjectId, ref: 'Pago' }],
    producto: { type: Schema.ObjectId, ref: 'Producto' },
});
