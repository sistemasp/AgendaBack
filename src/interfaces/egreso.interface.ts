import { EmpleadoI } from "./empleado.interface";
import { SucursalI } from "./sucursal.interface";
import { FormaPagoI } from "./forma-pago.interface";
import { TipoEgresoI } from "./tipo-egreso.interface";

export interface EgresoI {
    create_date: Date;
    hora_aplicacion: Date;
    recepcionista: EmpleadoI;
    concepto: String;
    descripcion: String;
    cantidad: String;
    tipo_egreso: TipoEgresoI;
    sucursal: SucursalI;
    forma_pago: FormaPagoI;
}