import { ServicioDto } from "./servicio-dto";

export class SucursalDto {
    readonly clave : string;
    readonly nombre : string;
    readonly direccion : string;
    readonly telefonos : string[];
    readonly servicios : ServicioDto[];
}