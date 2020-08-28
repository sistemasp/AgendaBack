import { ConsultaDto } from "./consulta-dto";
import { MaterialDto } from "./material-dto";
import { BiopsiaDto } from "./biopsia-dto";
import { PacienteDto } from "./paciente-dto";
import { EmpleadoDto } from "./empleado-dto";
import { SucursalDto } from "./sucursal-dto";

export class CirugiaDto {
    readonly fecha_hora: Date;
    readonly pagado: Boolean;
    readonly consulta: ConsultaDto;
    readonly paciente: PacienteDto;
    readonly medico: EmpleadoDto;
    readonly patologo: EmpleadoDto;
    readonly sucursal: SucursalDto;
    readonly consecutivo: String;
    readonly precio: String;
    readonly total: String;
    readonly materiales: [];
    readonly biopsias: BiopsiaDto[];
    readonly hasBiopsia: Boolean;
    readonly costo_biopsias: String;
}