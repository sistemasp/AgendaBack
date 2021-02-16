import * as mongoose from 'mongoose';

const constMongoose = require('mongoose');
const Schema = mongoose.Schema;

export const FacturaSchema = new Schema({
    fecha_hora : { type : Date },
    paciente : { type: constMongoose.ObjectId, ref: 'Paciente'},
    razon_social : { type: constMongoose.ObjectId, ref: 'RazonSocial'},
    uso_cfdi : { type: constMongoose.ObjectId, ref: 'UsoCfdi'},
    pago : { type: constMongoose.ObjectId, ref: 'Pago'},
    forma_pago : { type: constMongoose.ObjectId, ref: 'FormaPago'},
    ultimos_4_digitos : { type: String },
    cantidad : { type: String },
    sucursal : { type: constMongoose.ObjectId, ref: 'Sucursal'},
    tipo_servicio: { type: constMongoose.ObjectId, ref: 'Servicio' },
    servicio: { type: String },
});