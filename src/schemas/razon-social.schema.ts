import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RazonSocialSchema = new Schema({
    rfc : { type: String },
    nombre_completo : { type: String },
    domicilio : { type: String },
    numero_exterior : { type: String },
    numero_interior : { type: String },
    colonia : { type: String },
    ciudad : { type: String },
    municipio : { type: String },
    estado : { type: String },
    codigo_postal : { type: String },
    telefono : { type: String },
    email : { type: String },
});