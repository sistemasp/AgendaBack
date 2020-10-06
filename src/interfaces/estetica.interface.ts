import { ConsultaI } from "./consulta.interface";
import { PacienteI } from "./paciente.interface";
import { EmpleadoI } from "./empleado.interface";
import { SucursalI } from "./sucursal.interface";

export interface EsteticaI {
    create_date: Date;
    fecha_hora: Date;
    consulta: ConsultaI;
    paciente : PacienteI;
    medico : EmpleadoI;
    sucursal : SucursalI;
    consecutivo: String;
    pagado : Boolean;
    precio: String;
    total: String;
    materiales: [];
}