import { Document } from "mongoose";

export interface RecepcionistaI extends Document {
    nombre : String;
    numero_empleado : String;
    telefono : String;
}