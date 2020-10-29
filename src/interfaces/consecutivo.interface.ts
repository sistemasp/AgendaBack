import { ServicioI } from "./servicio.interface";
import { StatusI } from "./status.interface";
import { SucursalI } from "./sucursal.interface";

export interface ConsecutivoI {
    consecutivo: Number;
    tipo_servicio: ServicioI;
    servicio: String;
    sucursal : SucursalI;
    fecha_hora: Date;
    status: StatusI;
}