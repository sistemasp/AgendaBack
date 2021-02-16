import { Document } from "mongoose";
import { TipoEsteticaI } from "./tipo-estetica.interface";

export interface MaterialEsteticaI extends Document {
    nombre : String;
    precio : String;
    tipo_estetica : TipoEsteticaI;
    iva : Boolean;
}