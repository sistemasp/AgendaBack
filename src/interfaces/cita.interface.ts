import { TratamientoI } from "./tratamiento.interface";
import { PacienteI } from "./paciente.interface";
import { SucursalI } from "./sucursal.interface";

export interface CitaI {
    hora : String;
    fecha : String;
    paciente : PacienteI;
    dermatologo : String;
    servicio : String;
    tratamientos : TratamientoI[];
    numero_sesion : String;
    recepcionista : String;
    tipo_cita : String;
    confirmo : String;
    quien_confirma : String;
    asistio : String;
    precio : String;
    tiempo : String;
    sucursal : SucursalI;
}