import { Document } from "mongoose";

export interface TipoEgresoI extends Document {
    nombre : String;
    confirmacion: Boolean;
}