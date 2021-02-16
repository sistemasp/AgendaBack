import { Document } from "mongoose";

export interface UsoCfdiI extends Document {
    clave : String;
    descripcion : String;
}