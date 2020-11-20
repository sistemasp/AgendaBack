import { TratamientoI } from "./tratamiento.interface";
import { PacienteI } from "./paciente.interface";
import { SucursalI } from "./sucursal.interface";
import { EmpleadoI } from "./empleado.interface";
import { ServicioI } from "./servicio.interface";
import { BancoI } from "./banco.interface";
import { TipoTarjetaI } from "./tipo-tarjeta.interface";
import { FormaPagoI } from "./forma-pago.interface";
import { CitaI } from "./cita.interface";
import { IngresoI } from "./ingreso.interface";

export interface PagoI {
    fecha_pago: Date;
    hora_aplicacion: Date;
    paciente: PacienteI;
    cita: CitaI;
    dermatologo: EmpleadoI;
    tratamientos: TratamientoI[];
    quien_recibe_pago: EmpleadoI;
    cantidad: String;
    total: String;
    forma_pago: FormaPagoI;
    banco: BancoI;
    tipo_tarjeta: TipoTarjetaI;
    digitos: String;
    sucursal: SucursalI;
    factura: Boolean;
    deposito_confirmado: Boolean;
    observaciones: String;
    porcentaje_descuento: String;
    descuento: String;
    tipo_servicio: ServicioI;
    servicio: String;
    pago_anticipado: Boolean;
    ingreso: IngresoI;
}