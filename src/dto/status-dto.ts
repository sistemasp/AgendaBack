import { Document } from "mongoose";

export class StatusDto extends Document {
    readonly nombre : String;
    readonly color : String;
    readonly confirmacion: Boolean;
}