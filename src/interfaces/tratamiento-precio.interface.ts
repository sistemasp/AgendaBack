import { Document } from "mongoose";
import { TratamientoI } from "./tratamiento.interface";

export interface TratamientoPrecioI extends Document {
    tratamiento : TratamientoI;
    precio : String;
}