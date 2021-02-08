import { EmpleadoI } from "./empleado.interface";
import { BiopsiaI } from "./biopsia.interface";

export interface PagoPatologoI {
    create_date: Date;
    fecha_pago: Date;
    patologo: EmpleadoI;
    biopsias: BiopsiaI[];
    turno: String;
    retencion: String;
    total: String;
    pagado: Boolean;
}