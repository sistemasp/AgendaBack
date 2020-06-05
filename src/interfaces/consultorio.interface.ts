import { RolI } from "./rol.interface";
import { EmpleadoI } from "./empleado.interface";
import { PacienteI } from "./paciente.interface";
import { SucursalI } from "./sucursal.interface";

export interface ConsultorioI {
    nombre : String;
    medico : EmpleadoI;
    paciente : PacienteI;
    sucursal : SucursalI;
}