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
    ])
  ],
  controllers: [AppController, PacienteController, SucursalController, ServicioController, TratamientoController, PaqueteController, RecepcionistaController, DermatologoController, CitaController, CosmetologaController, HorarioController, RolController, EmpleadoController],
  providers: [AppService, PacienteService, SucursalService, ServicioService, TratamientoService, PaqueteService, RecepcionistaService, DermatologoService, CitaService, CosmetologaService, HorarioService, RolService, EmpleadoService],
})

export class AppModule {}
