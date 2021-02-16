import { Document } from "mongoose";

export interface BancoI extends Document {
    nombre : String;
}