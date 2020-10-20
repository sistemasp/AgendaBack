import { EgresoDto } from "./egreso-dto";
import { EmpleadoDto } from "./empleado-dto";
import { IngresoDto } from "./ingreso-dto";
import { SucursalDto } from "./sucursal-dto";

export class CorteDto {
    readonly create_date: Date;
    readonly turno: String;
    readonly ingresos: IngresoDto[];
    readonly egresos: EgresoDto[];
    readonly recepcionista: EmpleadoDto;
    readonly sucursal: SucursalDto;
}