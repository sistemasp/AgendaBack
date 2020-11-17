import { EmpleadoDto } from "./empleado-dto";
import { TipoIngresoDto } from "./tipo-ingreso-dto";
import { SucursalDto } from "./sucursal-dto";
import { MetodoPagoDto } from "./metodo-pago-dto";
import { PagoDto } from "./pago-dto";

export class IngresoDto {
    readonly create_date: Date;
    readonly hora_aplicacion: Date;
    readonly recepcionista: EmpleadoDto;
    readonly concepto: String;
    readonly cantidad: String;
    readonly tipo_ingreso: TipoIngresoDto;
    readonly sucursal: SucursalDto;
    readonly metodo_pago: MetodoPagoDto;
    readonly pago: PagoDto;
    readonly pago_anticipado: Boolean;
}