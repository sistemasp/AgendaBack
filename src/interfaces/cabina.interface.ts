import { EmpleadoI } from "./empleado.interface";
import { PacienteI } from "./paciente.interface";
import { SucursalI } from "./sucursal.interface";
import { ServicioI } from "./servicio.interface";
import { CitaI } from "./cita.interface";
import { Document } from "mongoose";

export interface CabinaI extends Document {
    nombre: String;
    cosmetologa: EmpleadoI;
    dermatologo: EmpleadoI;
    paciente: PacienteI;
    tipo_servicio: ServicioI;
    servicio: String;
    sucursal: SucursalI;
    disponible: Boolean;
    cita: CitaI;
}