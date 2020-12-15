import { ConsultaDto } from "./consulta-dto";
import { PacienteDto } from "./paciente-dto";
import { EmpleadoDto } from "./empleado-dto";
import { SucursalDto } from "./sucursal-dto";
import { StatusDto } from "./status-dto";
import { ServicioDto } from "./servicio-dto";
import { PagoDto } from "./pago-dto";
import { ProductoDto } from "./producto-dto";

export class EsteticaDto {
    readonly create_date: Date;
    readonly hora_aplicacion: Date;
    readonly fecha_hora: Date;
    readonly pagado: Boolean;
    readonly consulta: ConsultaDto;
    readonly paciente: PacienteDto;
    readonly dermatologo: EmpleadoDto;
    readonly quien_agenda : EmpleadoDto;
    readonly quien_confirma: EmpleadoDto;
    readonly sucursal: SucursalDto;
    readonly consecutivo: Number;
    readonly precio: String;
    readonly total: String;
    readonly materiales: [];
    readonly toxinas_rellenos: [];
    readonly status: StatusDto;
    readonly servicio: ServicioDto;
    readonly pagos : PagoDto[];
    readonly hora_llegada : String;
    readonly hora_atencion : String;
    readonly hora_salida : String;
    readonly producto: ProductoDto;
}