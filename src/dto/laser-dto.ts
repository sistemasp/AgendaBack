import { PacienteDto } from "./paciente-dto";
import { SucursalDto } from "./sucursal-dto";
import { EmpleadoDto } from "./empleado-dto";
import { TipoCitaDto } from "./tipo-cita-dto";
import { StatusDto } from "./status-dto";
import { ServicioDto } from "./servicio-dto";
import { PagoDto } from "./pago-dto";
import { AreaDto } from "./area-dto";
import { MedioDto } from "./medio-dto";

export class LaserDto {
    readonly create_date: Date;
    readonly hora_aplicacion: Date;
    readonly fecha_hora: Date;
    readonly paciente: PacienteDto;
    readonly medico: EmpleadoDto;
    readonly servicio: ServicioDto;
    readonly areas : AreaDto[];
    readonly numero_sesion: String;
    readonly quien_agenda: EmpleadoDto;
    readonly tipo_cita: TipoCitaDto;
    readonly medio: MedioDto;
    readonly quien_confirma_llamada: EmpleadoDto;
    readonly quien_confirma_asistencia: EmpleadoDto;
    readonly status: StatusDto;
    readonly motivos: String;
    readonly precio: String;
    readonly tiempo: String;
    readonly observaciones: String;
    readonly sucursal: SucursalDto;
    readonly promovendedor: EmpleadoDto;
    readonly cosmetologa: EmpleadoDto;
    readonly hora_llegada: String;
    readonly hora_atencion: String;
    readonly hora_salida: String;
    readonly pagado: Boolean;
    readonly pagos: PagoDto[];
    readonly consecutivo : Number;
    readonly tratamientos : [];
}