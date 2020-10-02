import { ServicioDto } from "./servicio-dto";
import { TratamientoDto } from "./tratamiento-dto";

export class AreaDto {
    readonly nombre : String;
    readonly servicio : ServicioDto;
    readonly tratamiento : TratamientoDto;
    readonly tiempo : String;
    readonly precio_ma : String;
    readonly precio_oc : String;
    readonly precio_fe : String;
    readonly comision_derivado : String;
    readonly comision_revisado : String;
    readonly comision_realizado : String;
}