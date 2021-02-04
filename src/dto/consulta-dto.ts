import { PacienteDto } from "./paciente-dto";
import { SucursalDto } from "./sucursal-dto";
import { EmpleadoDto } from "./empleado-dto";
import { StatusDto } from "./status-dto";
import { TipoCitaDto } from "./tipo-cita-dto";
import { PagoDto } from "./pago-dto";
import { FrecuenciaDto } from "./frecuencia-dto";
import { ServicioDto } from "./servicio-dto";
import { MedioDto } from "./medio-dto";
import { ProductoDto } from "./producto-dto";
import { FacturaDto } from "./factura-dto";

export class ConsultaDto {
    readonly create_date: Date;
    readonly hora_aplicacion: Date;
    readonly folio: String;
    readonly fecha_hora: Date;
    readonly paciente: PacienteDto;
    readonly dermatologo: EmpleadoDto;
    readonly quien_agenda: EmpleadoDto;
    readonly tipo_cita: TipoCitaDto;
    readonly medio: MedioDto;
    readonly quien_confirma_llamada: EmpleadoDto;
    readonly quien_confirma_asistencia: EmpleadoDto;
    readonly status: StatusDto;
    readonly motivos: String;
    readonly precio: String;
    readonly total: String;
    readonly pago_dermatologo: String;
    readonly hora_llegada: String;
    readonly hora_atencion: String;
    readonly hora_salida: String;
    readonly tiempo: String;
    readonly observaciones: String;
    readonly sucursal: SucursalDto;
    readonly promovendedor: EmpleadoDto;
    readonly pagado: Boolean;
    readonly factura: FacturaDto;
    readonly pagos: PagoDto[];
    readonly consecutivo: Number;
    readonly frecuencia: FrecuenciaDto;
    readonly servicio: ServicioDto;
    readonly producto: ProductoDto;
    readonly porcentaje_descuento_clinica: String;
    readonly has_descuento_dermatologo: Boolean;
    readonly descuento_clinica: String;
    readonly descuento_dermatologo: String;
}