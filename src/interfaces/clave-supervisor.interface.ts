import { EmpleadoI } from "./empleado.interface";

export interface ClaveSupervisorI {
    clave: String;
    supervisor: EmpleadoI;
    isActive: Boolean;
}