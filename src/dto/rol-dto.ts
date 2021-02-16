import { Document } from "mongoose";

export class RolDto extends Document {
    readonly nombre : String;
    readonly permisos : String[];
}