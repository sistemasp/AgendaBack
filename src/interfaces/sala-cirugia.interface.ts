import { EmpleadoI } from "./empleado.interface";
import { PacienteI } from "./paciente.interface";
import { SucursalI } from "./sucursal.interface";
import { ConsultaI } from "./consulta.interface";
import { ServicioI } from "./servicio.interface";
import { CirugiaI } from "./cirugia.interface";
import { Document } from "mongoose";

export interface SalaCirugiaI extends Document {
    nombre: String;
    dermatologo: EmpleadoI;
    paciente: PacienteI;
    tipo_servicio: ServicioI;
    servicio: String;
    sucursal: SucursalI;
    disponible: Boolean;
    cirugia: CirugiaI;
}