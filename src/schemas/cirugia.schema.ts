import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CirugiaSchema = new Schema({
    create_date: { type : Date },
    fecha_hora: { type: Date },
    consulta: { type: Schema.ObjectId, ref: 'Consulta' },
    paciente : { type: Schema.ObjectId, ref: 'Paciente'},
    medico : { type: Schema.ObjectId, ref: 'Empleado'},
    patologo : { type: Schema.ObjectId, ref: 'Empleado'},
    sucursal : { type: Schema.ObjectId, ref: 'Sucursal'},
    consecutivo: String,
    pagado : { type: Boolean, default: false },
    precio: String,
    total: String,
    materiales: [],
    biopsias: [{ type: Schema.ObjectId, ref: 'Biopsia' }],
    hasBiopsia : { type: Boolean, default: false },
    costo_biopsias: String,
    tipo_servicio: { type: Schema.ObjectId, ref: 'Servicio' },
});
