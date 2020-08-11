import { PacienteDto } from "./paciente-dto";
import { SucursalDto } from "./sucursal-dto";
import { EmpleadoDto } from "./empleado-dto";
import { StatusDto } from "./status-dto";
import { TipoCitaDto } from "./tipo-cita-dto";
import { PagoDto } from "./pago-dto";
import { FrecuenciaDto } from "./frecuencia-dto";

export class ConsultaDto {
    readonly folio : String;
    readonly fecha_hora : Date;
    readonly paciente : PacienteDto;
    readonly medico : EmpleadoDto;
    readonly quien_agenda : EmpleadoDto;
    readonly tipo_cita : TipoCitaDto;
    readonly quien_confirma_llamada: EmpleadoDto;
    readonly quien_confirma_asistencia: EmpleadoDto;
    readonly status : StatusDto;
    readonly motivos : String;
    readonly precio : String;
    readonly hora_llegada : String;
    readonly hora_atencion : String;
    readonly hora_salida : String;
    readonly tiempo : String;
    readonly observaciones : String;
    readonly sucursal : SucursalDto;
    readonly promovendedor : EmpleadoDto;
    readonly pagado : Boolean;
    readonly pagos : PagoDto[];
    readonly consecutivo : String;
    readonly frecuencia : FrecuenciaDto;
}