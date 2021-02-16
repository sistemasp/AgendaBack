import { Document } from "mongoose";
import { ServicioI } from "./servicio.interface";
import { SucursalI } from "./sucursal.interface";

export interface HorarioI extends Document {
    hora : string;
    servicio : ServicioI;
    sucursal : SucursalI;
}