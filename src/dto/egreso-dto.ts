import { EmpleadoDto } from "./empleado-dto";
import { TipoIngresoDto } from "./tipo-ingreso-dto";
import { SucursalDto } from "./sucursal-dto";
import { FormaPagoDto } from "./forma-pago-dto";
import { TipoEgresoDto } from "./tipo-egreso-dto";

export class EgresoDto {
    readonly create_date: Date;
    readonly hora_aplicacion: Date;
    readonly recepcionista: EmpleadoDto;
    readonly concepto: String;
    readonly descripcion: String;
    readonly cantidad: String;
    readonly tipo_egreso: TipoEgresoDto;
    readonly sucursal: SucursalDto;
    readonly forma_pago: FormaPagoDto;
}