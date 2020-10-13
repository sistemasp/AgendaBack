import { ConsultaDto } from "./consulta-dto";
import { PacienteDto } from "./paciente-dto";
import { EmpleadoDto } from "./empleado-dto";
import { SucursalDto } from "./sucursal-dto";
import { StatusDto } from "./status-dto";
import { ServicioDto } from "./servicio-dto";
import { PagoDto } from "./pago-dto";

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
    readonly toxinas_rellenos: [];
    readonly status: StatusDto;
    readonly servicio: ServicioDto;
    readonly pagos : PagoDto[];
}