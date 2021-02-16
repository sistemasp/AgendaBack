import { Document } from "mongoose";
import { ServicioDto } from "./servicio-dto";

export class TratamientoDto extends Document {
    readonly nombre : String;
    readonly servicio : ServicioDto;
}