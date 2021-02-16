import { Document } from "mongoose";
import { ServicioDto } from "./servicio-dto";
import { SucursalDto } from "./sucursal-dto";

export class HorarioDto extends Document {
    readonly hora : string;
    readonly servicio : ServicioDto;
    readonly sucursal : SucursalDto;
}