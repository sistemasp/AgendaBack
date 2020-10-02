import { PacienteI } from "./paciente.interface";
import { SucursalI } from "./sucursal.interface";
import { EmpleadoI } from "./empleado.interface";
import { StatusI } from "./status.interface";
import { TipoCitaI } from "./tipo-cita.interface";
import { PagoI } from "./pago.interface";
import { FrecuenciaI } from "./frecuencia.interface";
import { ServicioI } from "./servicio.interface";
import { MedioI } from "./medio.interface";

export interface ConsultaI {
    create_date: Date;
    folio : String;
    fecha_hora : Date;
    paciente : PacienteI;
    medico : EmpleadoI;
    quien_agenda : EmpleadoI;
    tipo_cita : TipoCitaI;
    medio: MedioI;
    quien_confirma_llamada: EmpleadoI;
    quien_confirma_asistencia: EmpleadoI;
    status : StatusI;
    motivos : String;
    precio : String;
    hora_llegada : String;
    hora_atencion : String;
    hora_salida : String;
    tiempo : String;
    observaciones : String;
    sucursal : SucursalI;
    promovendedor : EmpleadoI;
    pagado : Boolean;
    pagos : PagoI[];
    consecutivo : String;
    frecuencia : FrecuenciaI;
    servicio : ServicioI;
}