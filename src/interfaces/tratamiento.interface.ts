import { ServicioI } from "./servicio.interface";

export interface TratamientoI {
    nombre : String;
    clave : String;
    servicio : ServicioI;
    tiempo : String;
    precio : String;
}