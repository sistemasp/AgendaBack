import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AparatologiaService } from './aparatologia.service';
import { AparatologiaI } from 'src/interfaces/aparatologia.interface';
import { AparatologiaDto } from 'src/dto/aparatologia-dto';

@Controller('aparatologia')
export class AparatologiaController {

    TAG = "AparatologiaController";

    constructor(private readonly aparatologiaService: AparatologiaService) {}

    @Get()
    showAllAparatologia() : Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "showAllAparatologia");
        return this.aparatologiaService.showAllAparatologia();
    }

    @Get('sucursal/:sucursalId')
    showAllAparatologiaBySucursal(@Param('sucursalId') sucursalId: string) : Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "showAllAparatologiaBySucursal");
        return this.aparatologiaService.showAllAparatologiaBySucursal(sucursalId);
    }

    @Get('sucursal/:sucursalId/asistio')
    showAllAparatologiaBySucursalAsistio(@Param('sucursalId') sucursalId: string) : Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "showAllAparatologiaBySucursalAsistio");
        return this.aparatologiaService.showAllAparatologiaBySucursalAsistio(sucursalId);
    }

    @Get(':dia/:mes/:anio')
    findAparatologiaByDate(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string) : Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "findAparatologiaByDate");
        return this.aparatologiaService.findAparatologiaByDate(anio, mes, dia);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId')
    findAparatologiaByDateAndSucursal(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, @Param('sucursalId') sucursalId: string) : Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "findAparatologiaByDateAndSucursal");
        return this.aparatologiaService.findAparatologiaByDateAndSucursal(anio, mes, dia, sucursalId);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findAparatologiaByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string) : Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "findAparatologiaByRangeDateAndSucursal");
        return this.aparatologiaService.findAparatologiaByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId/service/:serviceId')
    findAparatologiaByRangeDateAndSucursalAndService(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string, @Param('serviceId') serviceId: string) : Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "findAparatologiaByRangeDateAndSucursalAndService", sucursalId, serviceId);
        return this.aparatologiaService.findAparatologiaByRangeDateAndSucursalAndService(anioi, mesi, diai, aniof, mesf, diaf, sucursalId, serviceId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/:servicio')
    findAparatologiaByDateAndSucursalAndService(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
        @Param('sucursalId') sucursalId: string, @Param('servicio') servicio: string) : Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "findAparatologiaByDateAndSucursalAndService");
        return this.aparatologiaService.findAparatologiaByDateAndSucursalAndService(anio, mes, dia, sucursalId, servicio);
    }

    @Get('/historic/:pacienteId')
    findHistoricByPaciente(@Param('pacienteId') pacienteId: string): Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "findHistoricByPaciente");
        return this.aparatologiaService.findHistoricByPaciente(pacienteId);
    }

    @Get('/historic/:pacienteId/servicio/:serviceId')
    findHistoricByPacienteAndService(@Param('pacienteId') pacienteId: string, @Param('serviceId') serviceId: string): Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "findHistoricByPacienteAndService");
        return this.aparatologiaService.findHistoricByPacienteAndService(pacienteId, serviceId);
    }

    @Get(':id')
    findDateById(@Param('id') idAparatologia: string): Promise<AparatologiaI> {
        console.log(new Date(), this.TAG, "findDateById");
        return this.aparatologiaService.findDateById(idAparatologia);
    }

    @Get('sucursal/:sucursalId/asistio/:statusAsistioId')
    waitingList(@Param('sucursalId') sucursalId: string, @Param('statusAsistioId') statusAsistioId: string) : Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "waitingList");
        return this.aparatologiaService.waitingList(sucursalId, statusAsistioId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/medico/:medicoId/atendido/:atendidoId')
    findAparatologiaByPayOfDoctor(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
    @Param('sucursalId') sucursalId: string, @Param('medicoId') medicoId: string, @Param('atendidoId') atendidoId: string,) : Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "findAparatologiaByPayOfDoctor");
        return this.aparatologiaService.findAparatologiaByPayOfDoctor(anio, mes, dia, sucursalId, medicoId, atendidoId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/medico/:medicoId/atendido/:atendidoId/turno/:turno')
    findAparatologiaByPayOfDoctorTurno(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
    @Param('sucursalId') sucursalId: string, @Param('medicoId') medicoId: string, @Param('atendidoId') atendidoId: string,
    @Param('turno') turno: string) : Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "findAparatologiaByPayOfDoctorTurno");
        return this.aparatologiaService.findAparatologiaByPayOfDoctorTurno(anio, mes, dia, sucursalId, medicoId, atendidoId, turno);
    }

    @Get('sucursal/:sucursalId/medico/:medicoId/atendido/:atendidoId/apertura/:hora_apertura/cierre/:hora_cierre')
    findAparatologiasByPayOfDoctorHoraAplicacion(@Param('sucursalId') sucursalId: string, @Param('medicoId') medicoId: string,
        @Param('atendidoId') atendidoId: string, @Param('hora_apertura') hora_apertura: string,
        @Param('hora_cierre') hora_cierre: string): Promise<AparatologiaI[]> {
        console.log(new Date(), this.TAG, "findAparatologiasByPayOfDoctorHoraAplicacion");
        return this.aparatologiaService.findAparatologiasByPayOfDoctorHoraAplicacion(sucursalId, medicoId, atendidoId, hora_apertura, hora_cierre);
    }

    @Post()
    createDate(@Body() aparatologiaDto: AparatologiaDto): Promise<AparatologiaI> {
        console.log(new Date(), this.TAG, "createDate");
        return this.aparatologiaService.createDate(aparatologiaDto);
    }

    @Put(':id') 
    updateDate(@Param('id') idAparatologia: string, @Body() aparatologiaDto: AparatologiaDto): Promise<AparatologiaI> {
        console.log(new Date(), this.TAG, "updateDate");
        return this.aparatologiaService.updateDate(idAparatologia, aparatologiaDto);
    }

    @Delete(':id')
    deleteDate(@Param('id') idAparatologia: string): Promise<AparatologiaI> {
        console.log(new Date(), this.TAG, "deleteDate");
        return this.aparatologiaService.deleteDate(idAparatologia);
    }

}
