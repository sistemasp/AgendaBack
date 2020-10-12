import { EmpleadoI } from "./empleado.interface";
import { PacienteI } from "./paciente.interface";
import { SucursalI } from "./sucursal.interface";
import { ConsultaI } from "./consulta.interface";
import { ServicioI } from "./servicio.interface";

export interface ConsultorioI {
    nombre: String;
    medico: EmpleadoI;
    paciente: PacienteI;
    tipo_servicio: ServicioI;
    servicio: String;
    sucursal: SucursalI;
    disponible: Boolean;
    consulta: ConsultaI;
}