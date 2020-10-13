import { EmpleadoDto } from "./empleado-dto";
import { TipoIngresoDto } from "./tipo-ingreso-dto";
import { SucursalDto } from "./sucursal-dto";
import { MetodoPagoDto } from "./metodo-pago-dto";
import { TipoEgresoDto } from "./tipo-egreso-dto";

export class EgresoDto {
    readonly create_date: Date;
    readonly recepcionista: EmpleadoDto;
    readonly concepto: String;
    readonly cantidad: String;
    readonly tipo_egreso: TipoEgresoDto;
    readonly sucursal: SucursalDto;
    readonly metodo_pago: MetodoPagoDto;
}