import { TipoEsteticaI } from "./tipo-estetica.interface";

export interface MaterialEsteticaI {
    nombre : String;
    precio : String;
    tipo_estetica : TipoEsteticaI;
    iva : Boolean;
}