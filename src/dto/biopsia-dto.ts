import { EmpleadoDto } from "./empleado-dto";
import { PacienteDto } from "./paciente-dto";
import { SucursalDto } from "./sucursal-dto";
import { StatusDto } from "./status-dto";
import { ConsultaDto } from "./consulta-dto";

export class BiopsiaDto {
    readonly consecutivo: String;
    readonly fecha_realizacion: Date;
    readonly consulta: ConsultaDto;
    readonly medico: EmpleadoDto;
    readonly paciente: PacienteDto;
    readonly sucursal: SucursalDto;
    readonly patologo: EmpleadoDto;
    readonly con_pago: Boolean;
    readonly fecha_entrega_patologo: Date;
    readonly quien_entrega: EmpleadoDto;
    readonly fecha_entrega_resultado: Date;
    readonly quien_recibe: EmpleadoDto;
    readonly diagnostico: String;
    readonly status: StatusDto;
    readonly a_quien_se_entrega: EmpleadoDto;
    readonly fecha_entrega: Date;
    readonly quien_lo_entrega: EmpleadoDto;
}