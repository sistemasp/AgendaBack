import { ConsultaI } from "./consulta.interface";
import { EmpleadoI } from "./empleado.interface";
import { PacienteI } from "./paciente.interface";
import { SucursalI } from "./sucursal.interface";
import { StatusI } from "./status.interface";

export interface BiopsiaI {
    consecutivo: String;
    fecha_realizacion: Date;
    consulta: ConsultaI
    medico: EmpleadoI;
    paciente: PacienteI;
    sucursal: SucursalI;
    patologo: EmpleadoI;
    con_pago: Boolean;
    fecha_entrega_patologo: Date;
    quien_entrega: EmpleadoI;
    fecha_entrega_resultado: Date;
    quien_recibe: EmpleadoI;
    diagnostico: String;
    status: StatusI;
    a_quien_se_entrega: EmpleadoI;
    fecha_entrega: Date;
    quien_lo_entrega: EmpleadoI;
}