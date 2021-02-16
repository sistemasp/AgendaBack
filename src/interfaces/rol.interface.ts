import { Document } from "mongoose";

export interface RolI extends Document {
    nombre : String;
    permisos : String[];
}