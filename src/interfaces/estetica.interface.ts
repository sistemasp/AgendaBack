import { ConsultaI } from "./consulta.interface";
import { PacienteI } from "./paciente.interface";
import { EmpleadoI } from "./empleado.interface";
import { SucursalI } from "./sucursal.interface";
import { StatusI } from "./status.interface";
import { ServicioI } from "./servicio.interface";
import { PagoI } from "./pago.interface";

export interface EsteticaI {
    create_date: Date;
    hora_aplicacion: Date;
    fecha_hora: Date;
    consulta: ConsultaI;
    paciente : PacienteI;
    dermatologo : EmpleadoI;
    quien_agenda: EmpleadoI;
    quien_confirma: EmpleadoI;
    sucursal : SucursalI;
    consecutivo: Number;
    pagado : Boolean;
    precio: String;
    total: String;
    materiales: [];
    toxinas_rellenos: [];
    status: StatusI;
    servicio: ServicioI;
    pagos : PagoI[];
    hora_llegada: String;
    hora_atencion: String;
    hora_salida: String;
}