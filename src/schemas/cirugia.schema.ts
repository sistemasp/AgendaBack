import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CirugiaSchema = new Schema({
    fecha_hora: { type: Date },
    consulta: { type: Schema.ObjectId, ref: 'Consulta' },
    paciente : { type: Schema.ObjectId, ref: 'Paciente'},
    medico : { type: Schema.ObjectId, ref: 'Empleado'},
    consecutivo: String,
    pagado : { type: Boolean, default: false },
    precio: String,
    total: String,
    materiales: [],
    biopsias: [{ type: Schema.ObjectId, ref: 'Biopsia' }],
});