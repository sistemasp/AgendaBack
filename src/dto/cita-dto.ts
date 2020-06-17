import { TratamientoDto } from "./tratamiento-dto";
import { PacienteDto } from "./paciente-dto";
import { SucursalDto } from "./sucursal-dto";
import { EmpleadoDto } from "./empleado-dto";
import { TipoCitaDto } from "./tipo-cita-dto";
import { StatusDto } from "./status-dto";
import { ServicioDto } from "./servicio-dto";

export class CitaDto {
    readonly fecha_hora : Date;
    readonly paciente : PacienteDto;
    readonly medico : EmpleadoDto;
    readonly servicio : ServicioDto;
    readonly tratamientos : TratamientoDto[];
    readonly numero_sesion : String;
    readonly quien_agenda : EmpleadoDto;
    readonly tipo_cita : TipoCitaDto;
    readonly quien_confirma : EmpleadoDto;
    readonly status : StatusDto;
    readonly motivos : String;
    readonly precio : String;
    readonly tiempo : String;
    readonly observaciones : String;
    readonly sucursal : SucursalDto;
    readonly promovendedor : EmpleadoDto;
    readonly cosmetologa : EmpleadoDto;
}