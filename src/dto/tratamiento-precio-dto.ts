import { Document } from "mongoose";
import { ServicioDto } from "./servicio-dto";
import { TratamientoDto } from "./tratamiento-dto";

export class TratamientoPrecioDto extends Document {
    readonly tratamiento : TratamientoDto;
    readonly precio : String;
}