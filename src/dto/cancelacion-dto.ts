import { Document } from "mongoose";
import { EmpleadoDto } from "./empleado-dto";
import { ServicioDto } from "./servicio-dto";
import { StatusDto } from "./status-dto";

export class CancelacionDto extends Document {
    readonly supervisor: EmpleadoDto;
    readonly recepcionista: EmpleadoDto;
    readonly create_date: Date;
    readonly tipo_servicio: ServicioDto;
    readonly servicio: String;
    readonly hora_llegada: String;
    readonly hora_salida: String;
    readonly status: StatusDto;
}