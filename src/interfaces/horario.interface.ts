import { ServicioI } from "./servicio.interface";
import { SucursalI } from "./sucursal.interface";

export interface HorarioI {
    hora : string;
    servicio : ServicioI;
    sucursal : SucursalI;
}