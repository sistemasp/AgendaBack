import { EmpleadoI } from "./empleado.interface";

export interface ClaveSupervisorI {
    clave: String;
    supervisor: EmpleadoI;
    is_active: Boolean;
}