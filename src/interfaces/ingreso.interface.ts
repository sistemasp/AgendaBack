import { EmpleadoI } from "./empleado.interface";
import { TipoIngresoI } from "./tipo-ingreso.interface";
import { SucursalI } from "./sucursal.interface";
import { FormaPagoI } from "./forma-pago.interface";
import { Document } from "mongoose";

export interface IngresoI extends Document {
    create_date: Date;
    hora_aplicacion: Date;
    turno: String;
    recepcionista: EmpleadoI;
    concepto: String;
    cantidad: String;
    tipo_ingreso: TipoIngresoI;
    sucursal: SucursalI;
    forma_pago: FormaPagoI;
    pago_anticipado: Boolean;
}