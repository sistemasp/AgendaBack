import { EmpleadoI } from "./empleado.interface";
import { TipoIngresoI } from "./tipo-ingreso.interface";
import { SucursalI } from "./sucursal.interface";
import { MetodoPagoI } from "./metodo-pago.interface";

export interface IngresoI {
    create_date: Date;
    hora_aplicacion: Date;
    recepcionista: EmpleadoI;
    concepto: String;
    cantidad: String;
    tipo_ingreso: TipoIngresoI;
    sucursal: SucursalI;
    metodo_pago: MetodoPagoI;
}