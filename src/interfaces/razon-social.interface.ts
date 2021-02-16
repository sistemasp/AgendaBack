import { Document } from "mongoose";

export interface RazonSocialI extends Document {
    rfc: String;
    nombre_completo: String;
    domicilio: String;
    numero_exterior: String;
    numero_interior: String;
    colonia: String;
    ciudad: String;
    municipio: String;
    estado: String;
    codigo_postal: String;
    telefono: String;
    email: String;
}