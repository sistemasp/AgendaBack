import { ConsultaI } from "./consulta.interface";
import { BiopsiaI } from "./biopsia.interface";
import { PacienteI } from "./paciente.interface";
import { EmpleadoI } from "./empleado.interface";

export interface CirugiaI {
    fecha_hora: Date;
    consulta: ConsultaI;
    paciente : PacienteI;
    medico : EmpleadoI;
    consecutivo: String;
    pagado : Boolean;
    precio: String;
    total: String;
    materiales: [];
    biopsias: BiopsiaI[]
}