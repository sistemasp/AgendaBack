import { EmpleadoI } from "./empleado.interface";
import { SucursalI } from "./sucursal.interface";
import { MetodoPagoI } from "./metodo-pago.interface";
import { TipoEgresoI } from "./tipo-egreso.interface";

export interface EgresoI {
    create_date: Date;
    hora_aplicacion: Date;
    recepcionista: EmpleadoI;
    concepto: String;
    cantidad: String;
    tipo_egreso: TipoEgresoI;
    sucursal: SucursalI;
    metodo_pago: MetodoPagoI;
}