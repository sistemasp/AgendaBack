import { Document } from "mongoose";
import { TratamientoI } from "./tratamiento.interface";

export interface PaqueteI extends Document {
    nombre : String;
    clave : String;
    tratamientos : TratamientoI[];
    precio : String;
    tiempo : String;
}