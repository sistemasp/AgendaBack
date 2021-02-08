import { EmpleadoDto } from "./empleado-dto";
import { BiopsiaDto } from "./biopsia-dto";

export class PagoPatologoDto {
    readonly create_date: Date;
    readonly fecha_pago: Date;
    readonly patologo: EmpleadoDto;
    readonly biopsias: BiopsiaDto[];
    readonly turno: String;
    readonly retencion: String;
    readonly total: String;
    readonly pagado: Boolean;
}