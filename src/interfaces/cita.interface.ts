import { TratamientoI } from "./tratamiento.interface";
import { PacienteI } from "./paciente.interface";
import { SucursalI } from "./sucursal.interface";
import { EmpleadoI } from "./empleado.interface";

export interface CitaI {
    hora : String;
    fecha : String;
    paciente : PacienteI;
    dermatologo : String;
    servicio : String;
    tratamientos : TratamientoI[];
    numero_sesion : String;
    quien_agenda : EmpleadoI;
    tipo_cita : String;
    confirmo : String;
    quien_confirma : EmpleadoI;
    asistio : String;
    precio : String;
    tiempo : String;
    sucursal : SucursalI;
}