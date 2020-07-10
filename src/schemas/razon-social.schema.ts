import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RazonSocialSchema = new Schema({
    rfc : String,
    nombre_completo : String,
    domicilio : String,
    numero : String,
    colonia : String,
    ciudad : String,
    municipio : String,
    estado : String,
    codigo_postal : String,
    telefono : String,
    email : String,
});