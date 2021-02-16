import { Document } from "mongoose";

export interface EsquemaI extends Document {
    nombre: String;
    descripcion: String;
    porcentaje_consulta: String;
    porcentaje_cirugias: String;
    porcentaje_dermocosmetica: String;
    porcentaje_reconsulta: String;
    porcentaje_laser: String;
    create_date: Date;
    is_active: Boolean;
}