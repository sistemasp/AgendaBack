import { ServicioI } from "./servicio.interface";
import { TratamientoI } from "./tratamiento.interface";

export interface AreaI {
    nombre: String;
    servicio: ServicioI;
    tratamiento: TratamientoI;
    tiempo: String;
    precio_ma: String;
    precio_oc: String;
    precio_fe: String;
    comision_derivado: String;
    comision_revisado: String;
    comision_realizado: String;
}