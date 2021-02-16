import { Document } from "mongoose";

export class RazonSocialDto extends Document {
    readonly rfc: String;
    readonly nombre_completo: String;
    readonly domicilio: String;
    readonly numero_exterior: String;
    readonly numero_interior: String;
    readonly colonia: String;
    readonly ciudad: String;
    readonly municipio: String;
    readonly estado: String;
    readonly codigo_postal: String;
    readonly telefono: String;
    readonly email: String;
}