import { Document } from "mongoose";
import { EsquemaDto } from "./esquema-dto";
import { RolDto } from "./rol-dto";

export class EmpleadoDto extends Document {
    readonly nombre: String;
    readonly numero_empleado: String;
    readonly telefono: String;
    readonly password: String;
    readonly rol: RolDto;
    readonly color: String;
    readonly cedula: String;
    readonly fecha_ingreso: Date;
    readonly fecha_baja: Date;
    readonly disponible: Boolean;
    readonly pago_completo: Boolean;
    readonly porcentaje: String;
    readonly porcentaje_estetica: String;
    readonly porcentaje_reconsulta: String;
    readonly esquema: EsquemaDto;
    readonly is_active: Boolean;
}