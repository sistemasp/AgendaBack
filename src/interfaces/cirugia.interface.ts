import { ConsultaI } from "./consulta.interface";
import { BiopsiaI } from "./biopsia.interface";
import { PacienteI } from "./paciente.interface";
import { EmpleadoI } from "./empleado.interface";
import { SucursalI } from "./sucursal.interface";

export interface CirugiaI {
    create_date: Date;
    fecha_hora: Date;
    consulta: ConsultaI;
    paciente : PacienteI;
    medico : EmpleadoI;
    patologo : EmpleadoI;
    sucursal : SucursalI;
    consecutivo: String;
    pagado : Boolean;
    precio: String;
    total: String;
    materiales: [];
    biopsias: BiopsiaI[];
    hasBiopsia : Boolean;
    costo_biopsias: String;
}