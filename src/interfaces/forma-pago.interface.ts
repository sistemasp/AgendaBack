import { Document } from "mongoose";

export interface FormaPagoI extends Document {
    nombre : String;
}