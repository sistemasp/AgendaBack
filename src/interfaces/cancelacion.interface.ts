import { Document } from "mongoose";
import { EmpleadoI } from "./empleado.interface";
import { ServicioI } from "./servicio.interface";
import { StatusI } from "./status.interface";

export interface CancelacionI extends Document {
    supervisor: EmpleadoI;
    recepcionista: EmpleadoI;
    create_date: Date;
    tipo_servicio: ServicioI;
    servicio: String;
    hora_llegada: String;
    hora_salida: String;
    status: StatusI;
}