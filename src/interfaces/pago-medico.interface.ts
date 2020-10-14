import { EmpleadoI } from "./empleado.interface";
import { ConsultaI } from "./consulta.interface";
import { CirugiaI } from "./cirugia.interface";
import { AreaI } from "./area.interface";
import { EsteticaI } from "./estetica.interface";

export interface PagoMedicoI {
    create_date: Date;
    fecha_pago: Date;
    medico: EmpleadoI;
    consultas: ConsultaI[];
    cirugias: CirugiaI[];
    tratamientos: AreaI[];
    esteticas: EsteticaI[];
    turno: String;
    retencion: String;
    total: String;
    pagado: Boolean;
}