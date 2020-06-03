import { PacienteI } from "./paciente.interface";
import { SucursalI } from "./sucursal.interface";
import { EmpleadoI } from "./empleado.interface";

export interface ConsultaI {
    hora : String;
    fecha : String;
    paciente : PacienteI;
    medico : EmpleadoI;
    quien_agenda : EmpleadoI;
    tipo_cita : String;
    quien_confirma : EmpleadoI;
    estado : String;
    motivos : String;
    precio : String;
    hora_atencion : String;
    hora_salida : String;
    tiempo : String;
    observaciones : String;
    sucursal : SucursalI;
    promovendedor : EmpleadoI;
}