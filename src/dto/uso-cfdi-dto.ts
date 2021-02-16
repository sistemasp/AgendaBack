import { Document } from "mongoose";

export class UsoCfdiDto extends Document {
    readonly clave : String;
    readonly descripcion : String;
}