import { PacienteI } from "./paciente.interface";
import { SucursalI } from "./sucursal.interface";
import { EmpleadoI } from "./empleado.interface";
import { StatusI } from "./status.interface";
import { TipoCitaI } from "./tipo-cita.interface";
import { PagoI } from "./pago.interface";
import { FrecuenciaI } from "./frecuencia.interface";
import { ServicioI } from "./servicio.interface";
import { MedioI } from "./medio.interface";
import { ProductoI } from "./producto.interface";
import { FacturaI } from "./factura.interface";
import { Document } from "mongoose";

export interface ConsultaI extends Document {
    create_date: Date;
    hora_aplicacion: Date;
    folio: String;
    fecha_hora: Date;
    paciente: PacienteI;
    dermatologo: EmpleadoI;
    quien_agenda: EmpleadoI;
    tipo_cita: TipoCitaI;
    medio: MedioI;
    quien_confirma_llamada: EmpleadoI;
    quien_confirma_asistencia: EmpleadoI;
    status: StatusI;
    motivos: String;
    precio: String;
    total: String;
    pago_dermatologo: String;
    hora_llegada: String;
    hora_atencion: String;
    hora_salida: String;
    tiempo: String;
    observaciones: String;
    sucursal: SucursalI;
    promovendedor: EmpleadoI;
    pagado: Boolean;
    factura: FacturaI;
    pagos: PagoI[];
    consecutivo: Number;
    frecuencia: FrecuenciaI;
    servicio: ServicioI;
    producto: ProductoI;
    porcentaje_descuento_clinica: String;
    has_descuento_dermatologo: Boolean;
    descuento_clinica: String;
    descuento_dermatologo: String;
}