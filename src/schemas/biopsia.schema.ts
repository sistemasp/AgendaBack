import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const BiopsiaSchema = new Schema({
    create_date: { type : Date },
    consecutivo: String,
    fecha_realizacion: { type : Date },
    consulta: { type: Schema.ObjectId, ref: 'Consulta'},
    medico: { type: Schema.ObjectId, ref: 'Empleado'},
    paciente: { type: Schema.ObjectId, ref: 'Paciente'},
    sucursal: { type: Schema.ObjectId, ref: 'Sucursal'},
    patologo: { type: Schema.ObjectId, ref: 'Empleado'},
    con_pago: Boolean,
    fecha_entrega_patologo: { type : Date },
    quien_entrega: { type: Schema.ObjectId, ref: 'Empleado'},
    fecha_entrega_resultado: { type : Date },
    quien_recibe: { type: Schema.ObjectId, ref: 'Empleado'},
    diagnostico: String,
    status: { type: Schema.ObjectId, ref: 'Status'},
    a_quien_se_entrega: { type: Schema.ObjectId, ref: 'Empleado'},
    fecha_entrega: { type : Date },
    quien_lo_entrega: { type: Schema.ObjectId, ref: 'Empleado'},
    tipo_servicio: { type: Schema.ObjectId, ref: 'Servicio' },
    pagos: [{ type: Schema.ObjectId, ref: 'Pago' }],
});