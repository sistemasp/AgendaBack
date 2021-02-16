import { Document } from "mongoose";

export interface StatusI extends Document {
    nombre : String;
    color : String;
    confirmacion: Boolean;
}