import { Document } from "mongoose";
import { ServicioI } from "./servicio.interface";

export interface SucursalI extends Document {
    clave: string;
    nombre: string;
    direccion: string;
    telefonos: string[];
    servicios: ServicioI[];
    precio_matutino: string;
    precio_vespertino: string;
    precio_sabado_matutino: string;
    precio_sabado_vespertino: string;
    precio_festivo: string;
}