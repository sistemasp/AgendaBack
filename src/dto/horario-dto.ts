import { ServicioDto } from "./servicio-dto";
import { SucursalDto } from "./sucursal-dto";

export class HorarioDto {
    readonly hora : string;
    readonly servicio : ServicioDto;
    readonly sucursal : SucursalDto;
}