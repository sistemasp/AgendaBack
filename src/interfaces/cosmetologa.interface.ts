import { Document } from "mongoose";

export interface CosmetologaI extends Document {
    nombre : String;
    numero_empleado : String;
    telefono : String;
}