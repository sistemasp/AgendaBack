import { EmpleadoDto } from "./empleado-dto";

export class ClaveSupervisorDto {
    readonly clave : String;
    readonly supervisor: EmpleadoDto;
    readonly is_active: Boolean;
}