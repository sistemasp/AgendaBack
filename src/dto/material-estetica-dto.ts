import { Document } from "mongoose";
import { TipoEsteticaDto } from "./tipo-estetica-dto";

export class MaterialEsteticaDto extends Document {
    readonly nombre : String;
    readonly precio : String;
    readonly tipo_estetica : TipoEsteticaDto;
    readonly iva : Boolean;
}