import { Document } from "mongoose";

export interface MaterialI extends Document {
    nombre : String;
    iva : Boolean;
}