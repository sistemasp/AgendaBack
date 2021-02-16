import { Document } from "mongoose";
import { EgresoI } from "./egreso.interface";
import { EmpleadoI } from "./empleado.interface";
import { IngresoI } from "./ingreso.interface";
import { SucursalI } from "./sucursal.interface";

export interface CorteI extends Document {
    create_date: Date;
    hora_apertura: Date;
    hora_cierre: Date;
    turno: String;
    ingresos: IngresoI[];
    pagos_anticipados: IngresoI[];
    egresos: EgresoI[];
    recepcionista: EmpleadoI;
    sucursal: SucursalI;
    generado: Boolean;
}