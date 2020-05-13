import { TratamientoDto } from "./tratamiento-dto";
import { PacienteDto } from "./paciente-dto";
import { SucursalDto } from "./sucursal-dto";
import { EmpleadoDto } from "./empleado-dto";

export class CitaDto {
    readonly hora : String;
    readonly fecha : String;
    readonly paciente : PacienteDto;
    readonly dermatologo : String;
    readonly servicio : String;
    readonly tratamientos : TratamientoDto[];
    readonly numero_sesion : String;
    readonly quien_agenda : EmpleadoDto;
    readonly tipo_cita : String;
    readonly confirmo : String;
    readonly quien_confirma : EmpleadoDto;
    readonly asistio : String;
    readonly motivos : String;
    readonly precio : String;
    readonly tiempo : String;
    readonly observaciones : String;
    readonly sucursal : SucursalDto;
    readonly promovendedor : EmpleadoDto;
    readonly cosmetologa : EmpleadoDto;
}