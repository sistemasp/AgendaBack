import { EmpleadoI } from "./empleado.interface";
import { PacienteI } from "./paciente.interface";
import { SucursalI } from "./sucursal.interface";
import { ConsultaI } from "./consulta.interface";

export interface ConsultorioI {
    nombre : String;
    medico : EmpleadoI;
    paciente : PacienteI;
    consulta : ConsultaI;
    sucursal : SucursalI;
    disponible : Boolean;
}