import { TratamientoDto } from "./tratamiento-dto";

export class PaqueteDto {
    readonly nombre : String;
    readonly clave : String;
    readonly tratamientos : TratamientoDto[];
    readonly precio : String;
    readonly tiempo : String;
}