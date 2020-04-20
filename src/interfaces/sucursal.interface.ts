import { ServicioI } from "./servicio.interface";

export interface SucursalI {
    nombre : string;
    direccion : string;
    telefonos : string[];
    servicios : ServicioI[];
}