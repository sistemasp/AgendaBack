import { Document } from "mongoose";

export interface DermatologoI extends Document {
    nombre : String;
    clave : String;
    telefono : String;
}