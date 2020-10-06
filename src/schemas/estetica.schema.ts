import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const EsteticaSchema = new Schema({
    create_date: { type : Date },
    fecha_hora: { type: Date },
    consulta: { type: Schema.ObjectId, ref: 'Consulta' },
    paciente : { type: Schema.ObjectId, ref: 'Paciente'},
    medico : { type: Schema.ObjectId, ref: 'Empleado'},
    sucursal : { type: Schema.ObjectId, ref: 'Sucursal'},
    consecutivo: String,
    pagado : { type: Boolean, default: false },
    precio: String,
    total: String,
    materiales: [],
});
