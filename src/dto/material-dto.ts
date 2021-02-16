import { Document } from "mongoose";

export class MaterialDto extends Document {
    readonly nombre : String;
    readonly iva : Boolean;
}