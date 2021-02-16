import { Document } from "mongoose";
import { EmpleadoDto } from "./empleado-dto";

export class ClaveSupervisorDto extends Document {
    readonly clave : String;
    readonly supervisor: EmpleadoDto;
    readonly is_active: Boolean;
}