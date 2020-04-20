import { TratamientoDto } from "./tratamiento-dto";
import { PacienteDto } from "./paciente-dto";
import { SucursalDto } from "./sucursal-dto";

export class CitaDto {
    readonly hora : String;
    readonly fecha : String;
    readonly paciente : PacienteDto;
    readonly dermatologo : String;
    readonly servicio : String;
    readonly tratamientos : TratamientoDto[];
    readonly numero_sesion : String;
    readonly recepcionista : String;
    readonly tipo_cita : String;
    readonly confirmo : String;
    readonly quien_confirma : String;
    readonly asistio : String;
    readonly precio : String;
    readonly tiempo : String;
    readonly sucursal : SucursalDto;
}