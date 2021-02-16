import { Document } from "mongoose";

export class EsquemaDto extends Document {
    readonly nombre : String;
    readonly descripcion : String;
    readonly porcentaje_consulta: String;
    readonly porcentaje_cirugias: String;
    readonly porcentaje_dermocosmetica: String;
    readonly porcentaje_reconsulta: String;
    readonly porcentaje_laser: String;
    readonly create_date: Date;
    readonly is_active: Boolean;
}