import { TipoEsteticaDto } from "./tipo-estetica-dto";

export class MaterialEsteticaDto {
    readonly nombre : String;
    readonly precio : String;
    readonly tipo_estetica : TipoEsteticaDto;
    readonly iva : Boolean;
}