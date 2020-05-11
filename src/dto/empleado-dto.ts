import { RolDto } from "./rol-dto";

export class EmpleadoDto {
    readonly nombre : String;
    readonly numero_empleado : String;
    readonly telefono : String;
    readonly password : String;
    readonly rol : RolDto;
}