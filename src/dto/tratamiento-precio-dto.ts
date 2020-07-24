import { ServicioDto } from "./servicio-dto";
import { TratamientoDto } from "./tratamiento-dto";

export class TratamientoPrecioDto {
    readonly tratamiento : TratamientoDto;
    readonly precio : String;
}