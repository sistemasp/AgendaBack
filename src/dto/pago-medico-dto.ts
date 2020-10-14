import { EmpleadoDto } from "./empleado-dto";
import { ConsultaDto } from "./consulta-dto";
import { CirugiaDto } from "./cirugia-dto";
import { AreaDto } from "./area-dto";
import { EsteticaDto } from "./estetica-dto";

export class PagoMedicoDto {
    readonly create_date: Date;
    readonly fecha_pago: Date;
    readonly medico: EmpleadoDto;
    readonly consultas: ConsultaDto[];
    readonly cirugias: CirugiaDto[];
    readonly tratamientos: AreaDto[];
    readonly esteticas: EsteticaDto[];
    readonly turno: String;
    readonly retencion: String;
    readonly total: String;
    readonly pagado: Boolean;
}