import { RolDto } from "./rol-dto";

export class EmpleadoDto {
    readonly nombre : String;
    readonly numero_empleado : String;
    readonly telefono : String;
    readonly password : String;
    readonly rol : RolDto;
    readonly color : String;
    readonly cedula : String;
    readonly fecha_ingreso : Date;
    readonly fecha_baja : Date;
    readonly disponible : Boolean;
    readonly porcentaje : String;
}