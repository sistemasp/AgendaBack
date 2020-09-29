import { PacienteDto } from "./paciente-dto";
import { EmpleadoDto } from "./empleado-dto";
import { SucursalDto } from "./sucursal-dto";
import { ConsultaDto } from "./consulta-dto";
import { ServicioDto } from "./servicio-dto";

export class CabinaDto {
    readonly nombre: String;
    readonly cosmetologa: EmpleadoDto;
    readonly paciente: PacienteDto;
    readonly tipo_servicio: ServicioDto;
    readonly servicio: String;
    readonly sucursal: SucursalDto;
    readonly disponible: Boolean;
}