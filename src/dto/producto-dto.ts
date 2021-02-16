import { Document } from "mongoose";
import { ServicioDto } from "./servicio-dto";

export class ProductoDto extends Document {
    readonly nombre : String;
    readonly servicio : ServicioDto;
}