import { Document } from "mongoose";

export class RecepcionistaDto extends Document {
    readonly nombre : String;
    readonly numero_empleado : String;
    readonly telefono : String;
}