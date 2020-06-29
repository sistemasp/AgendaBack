import { TratamientoI } from "./tratamiento.interface";
import { PacienteI } from "./paciente.interface";
import { SucursalI } from "./sucursal.interface";
import { EmpleadoI } from "./empleado.interface";
import { ServicioI } from "./servicio.interface";
import { BancoI } from "./banco.interface";
import { TipoTarjetaI } from "./tipo-tarjeta.interface";
import { MetodoPagoI } from "./metodo-pago.interface";

export interface PagoI {
    fecha_pago: Date;
    paciente: PacienteI;
    medico: EmpleadoI;
    servicio: ServicioI;
    tratamientos: TratamientoI[];
    quien_recibe_pago: EmpleadoI;
    cantidad: String;
    porcentaje_comision: String;
    comision: String;
    total: String;
    metodo_pago : MetodoPagoI;
    banco: BancoI;
    tipo_tarjeta: TipoTarjetaI;
    digitos: String;
    sucursal: SucursalI;
    factura: Boolean;
    deposito_confirmado: Boolean;
    observaciones: String;
}