import { EmpleadoI } from "./empleado.interface";
import { ConsultaI } from "./consulta.interface";
import { CirugiaI } from "./cirugia.interface";
import { AreaI } from "./area.interface";
import { EsteticaI } from "./estetica.interface";
import { FacialI } from "./facial.interface";
import { LaserI } from "./laser.interface";
import { AparatologiaI } from "./aparatologia.interface";
import { DermapenI } from "./dermapen.interface";

export interface PagoDermatologoI {
    create_date: Date;
    fecha_pago: Date;
    dermatologo: EmpleadoI;
    consultas: ConsultaI[];
    cirugias: CirugiaI[];
    faciales: FacialI[];
    dermapens: DermapenI[];
    lasers: LaserI[];
    aparatologias: AparatologiaI[];
    esteticas: EsteticaI[];
    turno: String;
    retencion: String;
    total: String;
    pagado: Boolean;
}