import { TratamientoI } from "./tratamiento.interface";
import { PacienteI } from "./paciente.interface";
import { SucursalI } from "./sucursal.interface";
import { EmpleadoI } from "./empleado.interface";
import { TipoCitaI } from "./tipo-cita.interface";
import { StatusI } from "./status.interface";
import { ServicioI } from "./servicio.interface";

export interface CitaI {
    fecha_hora : Date;
    paciente : PacienteI;
    medico : EmpleadoI;
    servicio : ServicioI;
    tratamientos : TratamientoI[];
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
}