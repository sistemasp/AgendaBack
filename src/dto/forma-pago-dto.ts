import { Document } from "mongoose";

export class FormaPagoDto extends Document {
    readonly nombre : String;
}