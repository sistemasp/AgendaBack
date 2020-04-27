import { RolDto } from "./rol-dto";

export class EmpleadoDto {
    readonly nombre : String;
    readonly numero_empleado : String;
    readonly telefono : String;
    readonly rol : RolDto;
}