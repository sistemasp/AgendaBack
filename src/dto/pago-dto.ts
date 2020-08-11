import { TratamientoDto } from "./tratamiento-dto";
import { PacienteDto } from "./paciente-dto";
import { SucursalDto } from "./sucursal-dto";
import { EmpleadoDto } from "./empleado-dto";
import { ServicioDto } from "./servicio-dto";
import { BancoDto } from "./banco-dto";
import { TipoTarjetaDto } from "./tipo-tarjeta-dto";
import { MetodoPagoDto } from "./metodo-pago-dto";
import { CitaDto } from "./cita-dto";

export class PagoDto {
    readonly fecha_pago : Date;
    readonly paciente : PacienteDto;
    readonly cita : CitaDto;
    readonly medico : EmpleadoDto;
    readonly servicio : ServicioDto;
    readonly tratamientos : TratamientoDto[];
    readonly quien_recibe_pago : EmpleadoDto;
    readonly cantidad : String;
    readonly porcentaje_comision : String;
    readonly comision : String;
    readonly total : String;
    readonly metodo_pago : MetodoPagoDto;
    readonly banco : BancoDto;
    readonly tipo_tarjeta : TipoTarjetaDto;
    readonly digitos : String;
    readonly sucursal : SucursalDto;
    readonly factura : Boolean;
    readonly deposito_confirmado : Boolean;
    readonly observaciones : String;
    readonly porcentaje_descuento : String;
    readonly descuento : String;
}