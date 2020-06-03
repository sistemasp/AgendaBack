import { ServicioDto } from "./servicio-dto";

export class TratamientoDto {
    readonly nombre : String;
    readonly clave : String;
    readonly servicio : ServicioDto;
    readonly tiempo : String;
    readonly precio : String;
}