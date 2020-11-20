import { PacienteI } from "./paciente.interface";
import { RazonSocialI } from "./razon-social.interface";
import { UsoCfdiI } from "./uso-cfdi.interface";
import { PagoI } from "./pago.interface";
import { FormaPagoI } from "./forma-pago.interface";
import { SucursalI } from "./sucursal.interface";

export interface FacturaI {
    fecha_hora : Date;
    paciente: PacienteI;
    razon_social: RazonSocialI;
    uso_cfdi: UsoCfdiI;
    pago: PagoI;
    forma_pago: FormaPagoI;
    ultimos_4_digitos: String;
    cantidad: String;
    sucursal : SucursalI;
}