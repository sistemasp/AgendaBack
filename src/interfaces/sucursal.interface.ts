import { ServicioI } from "./servicio.interface";

export interface SucursalI {
    clave : string;
    nombre : string;
    direccion : string;
    telefonos : string[];
    servicios : ServicioI[];
}