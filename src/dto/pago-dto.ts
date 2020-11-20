import { TratamientoDto } from "./tratamiento-dto";
import { PacienteDto } from "./paciente-dto";
import { SucursalDto } from "./sucursal-dto";
import { EmpleadoDto } from "./empleado-dto";
import { ServicioDto } from "./servicio-dto";
import { BancoDto } from "./banco-dto";
import { TipoTarjetaDto } from "./tipo-tarjeta-dto";
import { MetodoPagoDto } from "./metodo-pago-dto";
import { CitaDto } from "./cita-dto";
import { IngresoDto } from "./ingreso-dto";

export class PagoDto {
    readonly fecha_pago: Date;
    readonly hora_aplicacion: Date;
    readonly paciente: PacienteDto;
    readonly cita: CitaDto;
    readonly dermatologo: EmpleadoDto;
    readonly tratamientos: TratamientoDto[];
    readonly quien_recibe_pago: EmpleadoDto;
    readonly cantidad: String;
    readonly total: String;
    readonly metodo_pago: MetodoPagoDto;
    readonly banco: BancoDto;
    readonly tipo_tarjeta: TipoTarjetaDto;
    readonly digitos: String;
    readonly sucursal: SucursalDto;
    readonly factura: Boolean;
    readonly deposito_confirmado: Boolean;
    readonly observaciones: String;
    readonly porcentaje_descuento: String;
    readonly descuento: String;
    readonly tipo_servicio: ServicioDto;
    readonly servicio: String;
    readonly pago_anticipado: Boolean;
    readonly ingreso: IngresoDto;
}