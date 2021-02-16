import { Document } from "mongoose";
import { SexoDto } from "./sexo-dto";

export class PacienteDto extends Document {
    readonly create_date: Date;
    readonly nombres : string;
    readonly apellidos : string;
    readonly fecha_nacimiento : string;
    readonly direccion : string;
    readonly telefono : string;
    readonly sexo : SexoDto;
    readonly ocupacion : string;
    readonly alerta_medica : boolean;
    readonly estado : string;
    readonly municipio : string;
    readonly colonia : string;
    readonly cp : string;
}