import { Document } from "mongoose";

export interface ServicioI extends Document {
    nombre : String;
    clave : String;
    color : String;
    is_active : Boolean;
}