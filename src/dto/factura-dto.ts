import { PacienteDto } from "./paciente-dto";
import { RazonSocialDto } from "./razon-social-dto";
import { UsoCfdiDto } from "./uso-cfdi-dto";
import { PagoDto } from "./pago-dto";
import { MetodoPagoDto } from "./metodo-pago-dto";
import { SucursalDto } from "./sucursal-dto";

export class FacturaDto {
    readonly fecha_hora : Date;
    readonly paciente : PacienteDto;
    readonly razon_social : RazonSocialDto;
    readonly uso_cfdi : UsoCfdiDto;
    readonly pago : PagoDto;
    readonly metodo_pago : MetodoPagoDto;
    readonly ultimos_4_digitos : String;
    readonly cantidad : String;
    readonly sucursal : SucursalDto;
}