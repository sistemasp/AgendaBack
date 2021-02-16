import { Document } from "mongoose";

export class CosmetologaDto extends Document {
    readonly nombre : String;
    readonly numero_empleado : String;
    readonly telefono : String; 
}