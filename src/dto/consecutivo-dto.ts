import { ServicioDto } from "./servicio-dto";
import { StatusDto } from "./status-dto";
import { SucursalDto } from "./sucursal-dto";

export class ConsecutivoDto {
    readonly consecutivo : String;
    readonly tipo_servicio : ServicioDto;
    readonly servicio : String;
    readonly sucursal : SucursalDto;
    readonly fecha_hora: Date;
    readonly status : StatusDto;
}