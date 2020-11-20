import * as mongoose from 'mongoose';
import { CirugiaDto } from 'src/dto/cirugia-dto';

const Schema = mongoose.Schema;

export const SalaCirugiaSchema = new Schema({
    nombre: String,
    dermatologo: { type: Schema.ObjectId, ref: 'Empleado' },
    paciente: { type: Schema.ObjectId, ref: 'Paciente' },
    tipo_servicio: { type: Schema.ObjectId, ref: 'Servicio' },
    servicio: String,
    sucursal: { type: Schema.ObjectId, ref: 'Sucursal' },
    disponible: { type: Boolean, default: true },
    cirugia: { type: Schema.ObjectId, ref: 'Cirugia' }
});