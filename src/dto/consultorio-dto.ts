import { PacienteDto } from "./paciente-dto";
import { EmpleadoDto } from "./empleado-dto";
import { SucursalDto } from "./sucursal-dto";

export class ConsultorioDto {
    readonly nombre : String;
    readonly medico : EmpleadoDto;
    readonly paciente : PacienteDto;
    readonly sucursal : SucursalDto;
}