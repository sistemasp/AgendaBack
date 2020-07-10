import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const FacturaSchema = new Schema({
    fecha_hora : { type : Date },
    paciente : { type: Schema.ObjectId, ref: 'Paciente'},
    razon_social : { type: Schema.ObjectId, ref: 'RazonSocial'},
    uso_cfdi : { type: Schema.ObjectId, ref: 'UsoCfdi'},
    pago : { type: Schema.ObjectId, ref: 'Pago'},
    metodo_pago : { type: Schema.ObjectId, ref: 'MetodoPago'},
    ultimos_4_digitos : String,
    cantidad : String,
    sucursal : { type: Schema.ObjectId, ref: 'Sucursal'},
});