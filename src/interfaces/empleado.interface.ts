import { RolI } from "./rol.interface";

export interface EmpleadoI {
    nombre : String;
    numero_empleado : String;
    telefono : String;
    password : String;
    rol : RolI;
}