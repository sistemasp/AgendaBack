import { PacienteDto } from "./paciente-dto";
import { SucursalDto } from "./sucursal-dto";
import { EmpleadoDto } from "./empleado-dto";
import { TipoCitaDto } from "./tipo-cita-dto";
import { StatusDto } from "./status-dto";
import { ServicioDto } from "./servicio-dto";
import { PagoDto } from "./pago-dto";
import { AreaDto } from "./area-dto";
import { MedioDto } from "./medio-dto";
import { ConsultaDto } from "./consulta-dto";
import { ProductoDto } from "./producto-dto";
import { FrecuenciaDto } from "./frecuencia-dto";
import { FacturaDto } from "./factura-dto";

export class DermapenDto {
    readonly create_date: Date;
    readonly hora_aplicacion: Date;
    readonly fecha_hora: Date;
    readonly consulta: ConsultaDto;
    readonly paciente: PacienteDto;
    readonly dermatologo: EmpleadoDto;
    readonly servicio: ServicioDto;
    readonly tratamientos : [];
    readonly areas : AreaDto[];
    readonly quien_agenda: EmpleadoDto;
    readonly tipo_cita: TipoCitaDto;
    readonly medio: MedioDto;
    readonly quien_confirma_llamada: EmpleadoDto;
    readonly quien_confirma_asistencia: EmpleadoDto;
    readonly status: StatusDto;
    readonly motivos: String;
    readonly precio: String;
    readonly costo: String;
    readonly total: String;
    readonly pago_dermatologo: String;
    readonly tiempo: String;
    readonly observaciones: String;
    readonly sucursal: SucursalDto;
    readonly promovendedor: EmpleadoDto;
    readonly hora_llegada: String;
    readonly hora_atencion: String;
    readonly hora_salida: String;
    readonly pagado: Boolean;
    readonly factura: FacturaDto;
    readonly pagos: PagoDto[];
    readonly consecutivo : Number;
    readonly materiales: [];
    readonly frecuencia: FrecuenciaDto;
    readonly producto: ProductoDto;
}