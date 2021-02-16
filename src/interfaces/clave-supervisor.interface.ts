import { Document } from "mongoose";
import { EmpleadoI } from "./empleado.interface";

export interface ClaveSupervisorI extends Document {
    clave: String;
    supervisor: EmpleadoI;
    is_active: Boolean;
}