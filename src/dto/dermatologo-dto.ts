import { Document } from "mongoose";

export class DermatologoDto extends Document {
    readonly nombre : String;
    readonly clave : String;
    readonly telefono : String;
}