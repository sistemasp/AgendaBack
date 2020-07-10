import { PacienteI } from "./paciente.interface";
import { RazonSocialI } from "./razon-social.interface";
import { UsoCfdiI } from "./uso-cfdi.interface";
import { PagoI } from "./pago.interface";
import { MetodoPagoI } from "./metodo-pago.interface";
import { SucursalI } from "./sucursal.interface";

export interface FacturaI {
    fecha_hora : Date;
    paciente: PacienteI;
    razon_social: RazonSocialI;
    uso_cfdi: UsoCfdiI;
    pago: PagoI;
    metodo_pago: MetodoPagoI;
    ultimos_4_digitos: String;
    cantidad: String;
    sucursal : SucursalI;
}