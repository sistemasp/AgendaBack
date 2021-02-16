import { Document } from "mongoose";

export class ServicioDto extends Document {
    readonly nombre : String;
    readonly clave : String;
    readonly color : String;
    readonly is_active : Boolean;
}