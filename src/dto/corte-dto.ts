import { Document } from "mongoose";
import { EgresoDto } from "./egreso-dto";
import { EmpleadoDto } from "./empleado-dto";
import { IngresoDto } from "./ingreso-dto";
import { SucursalDto } from "./sucursal-dto";

export class CorteDto extends Document {
    readonly create_date: Date;
    readonly hora_apertura: Date;
    readonly hora_cierre: Date;
    readonly turno: String;
    readonly ingresos: IngresoDto[];
    readonly pagos_anticipados: IngresoDto[];
    readonly egresos: EgresoDto[];
    readonly recepcionista: EmpleadoDto;
    readonly sucursal: SucursalDto;
    readonly generado: Boolean;
}