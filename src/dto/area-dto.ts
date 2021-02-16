import { Document } from "mongoose";
import { ServicioDto } from "./servicio-dto";
import { TratamientoDto } from "./tratamiento-dto";

export class AreaDto extends Document {
    readonly nombre : String;
    readonly servicio : ServicioDto;
    readonly tratamiento : TratamientoDto;
    readonly tiempo : String;
    readonly precio_ma : String;
    readonly precio_rd : String;
    readonly precio_oc : String;
    readonly precio_fe : String;
    readonly comision_derivado : String;
    readonly comision_revisado : String;
    readonly comision_realizado : String;
    readonly comision_derivado_ma : String;
    readonly comision_revisado_ma : String;
    readonly comision_realizado_ma : String;
    readonly comision_derivado_rd : String;
    readonly comision_revisado_rd : String;
    readonly comision_realizado_rd : String;
    readonly iva : Boolean;
}