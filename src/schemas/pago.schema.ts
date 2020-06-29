import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PagoSchema = new Schema({
    fecha_pago : { type : Date },
    paciente : { type: Schema.ObjectId, ref: 'Paciente'},
    medico : { type: Schema.ObjectId, ref: 'Empleado'},
    servicio : { type: Schema.ObjectId, ref: 'Servicio'},
    tratamientos : [{ type: Schema.ObjectId, ref: 'Tratamiento'}],
    quien_recibe_pago : { type: Schema.ObjectId, ref: 'Empleado'},
    cantidad : String,
    porcentaje_comision : String,
    comision : String,
    total : String,
    metodo_pago : { type: Schema.ObjectId, ref: 'MetodoPago'},
    banco : { type: Schema.ObjectId, ref: 'Banco'},
    tipo_tarjeta : { type: Schema.ObjectId, ref: 'TipoTarjeta'},
    digitos : String,
    sucursal : { type: Schema.ObjectId, ref: 'Sucursal'},
    factura : { type: Boolean, default: false },
    deposito_confirmado : { type: Boolean, default: false },
    observaciones : String,
});