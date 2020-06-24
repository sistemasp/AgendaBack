import { PacienteDto } from "./paciente-dto";
import { EmpleadoDto } from "./empleado-dto";
import { SucursalDto } from "./sucursal-dto";
import { ConsultaDto } from "./consulta-dto";

export class ConsultorioDto {
    readonly nombre : String;
    readonly medico : EmpleadoDto;
    readonly paciente : PacienteDto;
    readonly consulta : ConsultaDto;
    readonly sucursal : SucursalDto;
    readonly disponible : Boolean;
}