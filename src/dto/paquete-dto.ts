import { Document } from "mongoose";
import { TratamientoDto } from "./tratamiento-dto";

export class PaqueteDto extends Document {
    readonly nombre : String;
    readonly clave : String;
    readonly tratamientos : TratamientoDto[];
    readonly precio : String;
    readonly tiempo : String;
}