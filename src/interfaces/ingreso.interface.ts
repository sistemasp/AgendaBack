import { EmpleadoI } from "./empleado.interface";
import { TipoIngresoI } from "./tipo-ingreso.interface";
import { SucursalI } from "./sucursal.interface";
import { FormaPagoI } from "./forma-pago.interface";
import { PagoI } from "./pago.interface";

export interface IngresoI {
    create_date: Date;
    hora_aplicacion: Date;
    recepcionista: EmpleadoI;
    concepto: String;
    cantidad: String;
    tipo_ingreso: TipoIngresoI;
    sucursal: SucursalI;
    forma_pago: FormaPagoI;
    pago: PagoI;
    pago_anticipado: Boolean;
}