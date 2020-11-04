import { EgresoI } from "./egreso.interface";
import { EmpleadoI } from "./empleado.interface";
import { IngresoI } from "./ingreso.interface";
import { SucursalI } from "./sucursal.interface";

export interface CorteI {
    create_date: Date;
    hora_apertura: Date;
    hora_cierre: Date;
    turno: String;
    ingresos: IngresoI[];
    egresos: EgresoI[];
    recepcionista: EmpleadoI;
    sucursal: SucursalI;
}