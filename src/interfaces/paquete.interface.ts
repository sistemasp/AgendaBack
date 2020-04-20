import { TratamientoI } from "./tratamiento.interface";

export interface PaqueteI {
    nombre : String;
    clave : String;
    tratamientos : TratamientoI[];
    precio : String;
    tiempo : String;
}