import { TratamientoI } from "./tratamiento.interface";
import { PacienteI } from "./paciente.interface";
import { SucursalI } from "./sucursal.interface";
import { EmpleadoI } from "./empleado.interface";
import { TipoCitaI } from "./tipo-cita.interface";
import { StatusI } from "./status.interface";
import { ServicioI } from "./servicio.interface";
import { PagoI } from "./pago.interface";
import { TratamientoPrecioI } from "./tratamiento-precio.interface";

export interface CitaI {
    fecha_hora : Date;
    paciente : PacienteI;
    medico : EmpleadoI;
    servicio : ServicioI;
    numero_sesion : String;
    quien_agenda : EmpleadoI;
    tipo_cita : TipoCitaI;
    quien_confirma : EmpleadoI;
    status : StatusI;
    motivos : String;
    precio : String;
    tiempo : String;
    observaciones : String;
    sucursal : SucursalI;
    promovendedor : EmpleadoI;
    cosmetologa : EmpleadoI;
    hora_llegada: String;
    hora_atencion: String;
    hora_salida: String;
    pagado: Boolean;
    pagos: PagoI[];
    consecutivo : String;
    tratamientos : [];
}