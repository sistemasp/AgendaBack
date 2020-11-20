import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EsteticaService } from './estetica.service';
import { EsteticaI } from 'src/interfaces/estetica.interface';
import { EsteticaDto } from 'src/dto/estetica-dto';

@Controller('estetica')
export class EsteticaController {

    TAG = "EsteticaController";

    constructor(private readonly esteticaService: EsteticaService) { }

    @Get()
    showAllEsteticas(): Promise<EsteticaI[]> {
        console.log(new Date(), this.TAG, "showAllEsteticas");
        return this.esteticaService.showAllEsteticas();
    }

    @Get(':id')
    findEsteticaById(@Param('id') idEstetica: string): Promise<EsteticaI> {
        console.log(new Date(), this.TAG, "findEsteticaById");
        return this.esteticaService.findEsteticaById(idEstetica);
    }

    @Get('consulta/:consultaId')
    findEsteticaByConsultaId(@Param('consultaId') consultaId: string): Promise<EsteticaI> {
        console.log(new Date(), this.TAG, "findEsteticaByConsultaId");
        return this.esteticaService.findEsteticaByConsultaId(consultaId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId')
    findEsteticasByPayOfDoctor(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string, @Param('atendidoId') atendidoId: string,): Promise<EsteticaI[]> {
        console.log(new Date(), this.TAG, "findEsteticasByPayOfDoctor");
        return this.esteticaService.findEsteticasByPayOfDoctor(anio, mes, dia, sucursalId, dermatologoId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId/turno/:turno')
    findEsteticasByPayOfDoctorTurno(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string, @Param('turno') turno: string,): Promise<EsteticaI[]> {
        console.log(new Date(), this.TAG, "findEsteticasByPayOfDoctorTurno");
        return this.esteticaService.findEsteticasByPayOfDoctorTurno(anio, mes, dia, sucursalId, dermatologoId, turno);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findEsteticasByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string) : Promise<EsteticaI[]> {
        console.log(new Date(), this.TAG, "findEsteticasByRangeDateAndSucursal");
        return this.esteticaService.findEsteticasByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }

    @Get('sucursal/:sucursalId/asistio/:statusAsistioId')
    waitingList(@Param('sucursalId') sucursalId: string, @Param('statusAsistioId') statusAsistioId: string) : Promise<EsteticaI[]> {
        console.log(new Date(), this.TAG, "waitingList");
        return this.esteticaService.waitingList(sucursalId, statusAsistioId);
    }

    @Get('/historic/:pacienteId')
    findEsteticasHistoricByPaciente(@Param('pacienteId') pacienteId: string): Promise<EsteticaI[]> {
        console.log(new Date(), this.TAG, "findEsteticasHistoricByPaciente");
        return this.esteticaService.findEsteticasHistoricByPaciente(pacienteId);
    }

    @Get('sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId/apertura/:hora_apertura/cierre/:hora_cierre')
    findEsteticasByPayOfDoctorHoraAplicacion(@Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string,
        @Param('atendidoId') atendidoId: string, @Param('hora_apertura') hora_apertura: string,
        @Param('hora_cierre') hora_cierre: string): Promise<EsteticaI[]> {
        console.log(new Date(), this.TAG, "findEsteticasByPayOfDoctorHoraAplicacion");
        return this.esteticaService.findEsteticasByPayOfDoctorHoraAplicacion(sucursalId, dermatologoId, atendidoId, hora_apertura, hora_cierre);
    }

    @Post()
    createEstetica(@Body() esteticaDto: EsteticaDto): Promise<EsteticaI> {
        console.log(new Date(), this.TAG, "createEstetica");
        return this.esteticaService.createEstetica(esteticaDto);
    }

    @Put(':id')
    updateEstetica(@Param('id') idEstetica: string, @Body() esteticaDto: EsteticaDto): Promise<EsteticaI> {
        console.log(new Date(), this.TAG, "updateEstetica");
        return this.esteticaService.updateEstetica(idEstetica, esteticaDto);
    }

    @Delete(':id')
    deleteEstetica(@Param('id') idEstetica: string): Promise<EsteticaI> {
        console.log(new Date(), this.TAG, "deleteEstetica");
        return this.esteticaService.deleteEstetica(idEstetica);
    }

}
