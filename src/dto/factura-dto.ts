import { PacienteDto } from "./paciente-dto";
import { RazonSocialDto } from "./razon-social-dto";
import { UsoCfdiDto } from "./uso-cfdi-dto";
import { PagoDto } from "./pago-dto";
import { FormaPagoDto } from "./forma-pago-dto";
import { SucursalDto } from "./sucursal-dto";
import { ServicioDto } from "./servicio-dto";
import { Document } from "mongoose";

export class FacturaDto extends Document {
    readonly fecha_hora : Date;
    readonly paciente : PacienteDto;
    readonly razon_social : RazonSocialDto;
    readonly uso_cfdi : UsoCfdiDto;
    readonly pago : PagoDto;
    readonly forma_pago : FormaPagoDto;
    readonly ultimos_4_digitos : String;
    readonly cantidad : String;
    readonly sucursal : SucursalDto;
    readonly tipo_servicio: ServicioDto;
    readonly servicio: String;
}