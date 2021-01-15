import { ServicioI } from "./servicio.interface";
import { TratamientoI } from "./tratamiento.interface";

export interface AreaI {
    nombre: String;
    servicio: ServicioI;
    tratamiento: TratamientoI;
    tiempo: String;
    precio_ma: String;
    precio_rd: String;
    precio_oc: String;
    precio_fe: String;
    comision_derivado: String;
    comision_revisado: String;
    comision_realizado: String;
    comision_derivado_ma: String;
    comision_revisado_ma: String;
    comision_realizado_ma: String;
    comision_derivado_rd: String;
    comision_revisado_rd: String;
    comision_realizado_rd: String;
}