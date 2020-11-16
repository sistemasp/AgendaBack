import { EmpleadoDto } from "./empleado-dto";
import { ConsultaDto } from "./consulta-dto";
import { CirugiaDto } from "./cirugia-dto";
import { EsteticaDto } from "./estetica-dto";
import { FacialDto } from "./facial-dto";
import { LaserDto } from "./laser-dto";
import { AparatologiaDto } from "./aparatologia-dto";
import { DermapenDto } from "./dermapen-dto";

export class PagoMedicoDto {
    readonly create_date: Date;
    readonly fecha_pago: Date;
    readonly medico: EmpleadoDto;
    readonly consultas: ConsultaDto[];
    readonly cirugias: CirugiaDto[];
    readonly faciales: FacialDto[];
    readonly dermapens: DermapenDto[];
    readonly lasers: LaserDto[];
    readonly aparatologias: AparatologiaDto[];
    readonly esteticas: EsteticaDto[];
    readonly turno: String;
    readonly retencion: String;
    readonly total: String;
    readonly pagado: Boolean;
}