import { Document } from "mongoose";

export class TipoEgresoDto extends Document {
    readonly nombre : String;
    readonly confirmacion: Boolean;
}