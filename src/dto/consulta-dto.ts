import { PacienteDto } from "./paciente-dto";
import { SucursalDto } from "./sucursal-dto";
import { EmpleadoDto } from "./empleado-dto";

export class ConsultaDto {
    readonly hora : String;
    readonly fecha : String;
    readonly paciente : PacienteDto;
    readonly medico : EmpleadoDto;
    readonly quien_agenda : EmpleadoDto;
    readonly tipo_cita : String;
    readonly quien_confirma : EmpleadoDto;
    readonly estado : String;
    readonly motivos : String;
    readonly precio : String;
    readonly hora_atencion : String;
    readonly hora_salida : String;
    readonly tiempo : String;
    readonly observaciones : String;
    readonly sucursal : SucursalDto;
    readonly promovendedor : EmpleadoDto;
}