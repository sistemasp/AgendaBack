import { EmpleadoDto } from "./empleado-dto";
import { TipoIngresoDto } from "./tipo-ingreso-dto";
import { SucursalDto } from "./sucursal-dto";
import { MetodoPagoDto } from "./metodo-pago-dto";

export class IngresoDto {
    readonly create_date: Date;
    readonly recepcionista: EmpleadoDto;
    readonly concepto: String;
    readonly cantidad: String;
    readonly tipo_ingreso: TipoIngresoDto;
    readonly sucursal: SucursalDto;
    readonly metodo_pago: MetodoPagoDto;
}