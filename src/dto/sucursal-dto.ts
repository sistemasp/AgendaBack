import { ServicioDto } from "./servicio-dto";

export class SucursalDto {
    readonly clave: string;
    readonly nombre: string;
    readonly direccion: string;
    readonly telefonos: string[];
    readonly servicios: ServicioDto[];
    readonly precio_matutino: string;
    readonly precio_vespertino: string;
    readonly precio_sabado_matutino: string;
    readonly precio_sabado_vespertino: string;
    readonly precio_festivo: string;
}