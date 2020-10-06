import { ConsultaDto } from "./consulta-dto";
import { PacienteDto } from "./paciente-dto";
import { EmpleadoDto } from "./empleado-dto";
import { SucursalDto } from "./sucursal-dto";

export class EsteticaDto {
    readonly create_date: Date;
    readonly fecha_hora: Date;
    readonly pagado: Boolean;
    readonly consulta: ConsultaDto;
    readonly paciente: PacienteDto;
    readonly medico: EmpleadoDto;
    readonly sucursal: SucursalDto;
    readonly consecutivo: String;
    readonly precio: String;
    readonly total: String;
    readonly materiales: [];
}