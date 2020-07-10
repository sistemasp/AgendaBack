import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PacienteController } from './paciente/paciente.controller';
import { PacienteService } from './paciente/paciente.service';
import { SucursalController } from './sucursal/sucursal.controller';
import { ServicioController } from './servicio/servicio.controller';
import { TratamientoController } from './tratamiento/tratamiento.controller';
import { PaqueteController } from './paquete/paquete.controller';
import { RecepcionistaController } from './recepcionista/recepcionista.controller';
import { DermatologoController } from './dermatologo/dermatologo.controller';
import { CitaController } from './cita/cita.controller';
import { SucursalService } from './sucursal/sucursal.service';
import { ServicioService } from './servicio/servicio.service';
import { TratamientoService } from './tratamiento/tratamiento.service';
import { PaqueteService } from './paquete/paquete.service';
import { RecepcionistaService } from './recepcionista/recepcionista.service';
import { DermatologoService } from './dermatologo/dermatologo.service';
import { CitaService } from './cita/cita.service';
import { CosmetologaController } from './cosmetologa/cosmetologa.controller';
import { CosmetologaService } from './cosmetologa/cosmetologa.service';
import { PacienteSchema } from './schemas/paciente.schema';
import { SucursalSchema } from './schemas/sucursal.schema';
import { ServicioSchema } from './schemas/servicio.schema';
import { TratamientoSchema } from './schemas/tratamiento.schema';
import { PaqueteSchema } from './schemas/paquete.schema';
import { RecepcionistaSchema } from './schemas/recepcionista.schema';
import { CosmetologaSchema } from './schemas/cosmetologa.schema';
import { DermatologoSchema } from './schemas/dermatologo.schema';
import { CitaSchema } from './schemas/cita.schema';
import { HorarioService } from './horario/horario.service';
import { HorarioController } from './horario/horario.controller';
import { HorarioSchema } from './schemas/horario.schema';
import { RolSchema } from './schemas/rol.schema';
import { EmpleadoSchema } from './schemas/empleado.schema';
import { RolController } from './rol/rol.controller';
import { EmpleadoController } from './empleado/empleado.controller';
import { RolService } from './rol/rol.service';
import { EmpleadoService } from './empleado/empleado.service';
import { ConsultorioSchema } from './schemas/consultorio.schema';
import { ConsultorioController } from './consultorio/consultorio.controller';
import { ConsultorioService } from './consultorio/consultorio.service';
import { ConsultaSchema } from './schemas/consulta.schema';
import { ConsultaController } from './consulta/consulta.controller';
import { ConsultaService } from './consulta/consulta.service';
import { TipoCitaSchema } from './schemas/tipo-cita.schema';
import { TipoCitaController } from './tipo_cita/tipo-cita.controller';
import { TipoCitaService } from './tipo_cita/tipo-cita.service';
import { StatusSchema } from './schemas/status.schema';
import { StatusController } from './status/status.controller';
import { StatusService } from './status/status.service';
import { MedicosController } from './medicos/medicos.controller';
import { MedicosService } from './medicos/medicos.service';
import { MetodoPagoController } from './metodo_pago/metodo-pago.controller';
import { MetodoPagoService } from './metodo_pago/metodo-pago.service';
import { MetodoPagoSchema } from './schemas/metodo-pago.schema';
import { BancoSchema } from './schemas/banco.schema';
import { PagoSchema } from './schemas/pago.schema';
import { BancoController } from './banco/banco.controller';
import { PagoController } from './pago/pago.controller';
import { BancoService } from './banco/banco.service';
import { PagoService } from './pago/pago.service';
import { TipoTarjetaSchema } from './schemas/tipo-tarjeta.schema';
import { TipoTarjetaController } from './tipo_tarjeta/tipo-tarjeta.controller';
import { TipoTarjetaService } from './tipo_tarjeta/tipo-tarjeta.service';
import { RazonSocialController } from './razon-social/razon-social.controller';
import { FacturaController } from './factura/factura.controller';
import { UsoCfdiController } from './uso-cfdi/uso-cfdi.controller';
import { RazonSocialService } from './razon-social/razon-social.service';
import { FacturaService } from './factura/factura.service';
import { UsoCfdiService } from './uso-cfdi/uso-cfdi.service';
import { RazonSocialSchema } from './schemas/razon-social.schema';
import { UsoCfdiSchema } from './schemas/uso-cfdi.schema';
import { FacturaSchema } from './schemas/factura.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/agenda'),
    MongooseModule.forFeature([
      { name: 'Paciente', schema: PacienteSchema },
      { name: 'Sucursal', schema: SucursalSchema },
      { name: 'Servicio', schema: ServicioSchema },
      { name: 'Tratamiento', schema: TratamientoSchema },
      { name: 'Paquete', schema: PaqueteSchema },
      { name: 'Recepcionista', schema: RecepcionistaSchema },
      { name: 'Cosmetologa', schema: CosmetologaSchema },
      { name: 'Dermatologo', schema: DermatologoSchema },
      { name: 'Cita', schema: CitaSchema },
      { name: 'Horario', schema: HorarioSchema },
      { name: 'Rol', schema: RolSchema },
      { name: 'Empleado', schema: EmpleadoSchema },
      { name: 'Consultorio', schema: ConsultorioSchema },
      { name: 'Consulta', schema: ConsultaSchema },
      { name: 'TipoCita', schema: TipoCitaSchema },
      { name: 'Status', schema: StatusSchema },
      { name: 'MetodoPago', schema: MetodoPagoSchema },
      { name: 'Banco', schema: BancoSchema },
      { name: 'Pago', schema: PagoSchema },
      { name: 'TipoTarjeta', schema: TipoTarjetaSchema },
      { name: 'RazonSocial', schema: RazonSocialSchema },
      { name: 'Factura', schema: FacturaSchema },
      { name: 'UsoCfdi', schema: UsoCfdiSchema },
    ])
  ],
  controllers: [
    AppController,
    PacienteController,
    SucursalController,
    ServicioController,
    TratamientoController,
    PaqueteController,
    RecepcionistaController,
    DermatologoController,
    CitaController,
    CosmetologaController,
    HorarioController,
    RolController,
    EmpleadoController,
    ConsultorioController,
    ConsultaController,
    TipoCitaController,
    StatusController,
    MedicosController,
    MetodoPagoController,
    BancoController,
    PagoController,
    TipoTarjetaController,
    RazonSocialController,
    FacturaController,
    UsoCfdiController,
  ],
  providers: [
    AppService,
    PacienteService,
    SucursalService,
    ServicioService,
    TratamientoService,
    PaqueteService,
    RecepcionistaService,
    DermatologoService,
    CitaService,
    CosmetologaService,
    HorarioService,
    RolService,
    EmpleadoService,
    ConsultorioService,
    ConsultaService,
    TipoCitaService,
    StatusService,
    MedicosService,
    MetodoPagoService,
    BancoService,
    PagoService,
    TipoTarjetaService,
    RazonSocialService,
    FacturaService,
    UsoCfdiService,
  ],
})

export class AppModule {}
