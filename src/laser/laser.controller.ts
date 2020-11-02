import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { LaserService } from './laser.service';
import { LaserI } from 'src/interfaces/laser.interface';
import { LaserDto } from 'src/dto/laser-dto';

@Controller('laser')
export class LaserController {

    TAG = "LaserController";

    constructor(private readonly laserService: LaserService) {}

    @Get()
    showAllLaser() : Promise<LaserI[]> {
        console.log(new Date(), this.TAG, "showAllLaser");
        return this.laserService.showAllLaser();
    }

    @Get('sucursal/:sucursalId')
    showAllLaserBySucursal(@Param('sucursalId') sucursalId: string) : Promise<LaserI[]> {
        console.log(new Date(), this.TAG, "showAllLaserBySucursal");
        return this.laserService.showAllLaserBySucursal(sucursalId);
    }

    @Get('sucursal/:sucursalId/asistio')
    showAllLaserBySucursalAsistio(@Param('sucursalId') sucursalId: string) : Promise<LaserI[]> {
        console.log(new Date(), this.TAG, "showAllLaserBySucursalAsistio");
        return this.laserService.showAllLaserBySucursalAsistio(sucursalId);
    }

    @Get(':dia/:mes/:anio')
    findLaserByDate(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string) : Promise<LaserI[]> {
        console.log(new Date(), this.TAG, "findLaserByDate");
        return this.laserService.findLaserByDate(anio, mes, dia);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId')
    findLaserByDateAndSucursal(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, @Param('sucursalId') sucursalId: string) : Promise<LaserI[]> {
        console.log(new Date(), this.TAG, "findLaserByDateAndSucursal");
        return this.laserService.findLaserByDateAndSucursal(anio, mes, dia, sucursalId);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findLaserByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string) : Promise<LaserI[]> {
        console.log(new Date(), this.TAG, "findLaserByRangeDateAndSucursal");
        return this.laserService.findLaserByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId/service/:serviceId')
    findLaserByRangeDateAndSucursalAndService(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string, @Param('serviceId') serviceId: string) : Promise<LaserI[]> {
        console.log(new Date(), this.TAG, "findLaserByRangeDateAndSucursalAndService", sucursalId, serviceId);
        return this.laserService.findLaserByRangeDateAndSucursalAndService(anioi, mesi, diai, aniof, mesf, diaf, sucursalId, serviceId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/:servicio')
    findLaserByDateAndSucursalAndService(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
        @Param('sucursalId') sucursalId: string, @Param('servicio') servicio: string) : Promise<LaserI[]> {
        console.log(new Date(), this.TAG, "findLaserByDateAndSucursalAndService");
        return this.laserService.findLaserByDateAndSucursalAndService(anio, mes, dia, sucursalId, servicio);
    }

    @Get('/historic/:pacienteId')
    findHistoricByPaciente(@Param('pacienteId') pacienteId: string): Promise<LaserI[]> {
        console.log(new Date(), this.TAG, "findHistoricByPaciente");
        return this.laserService.findHistoricByPaciente(pacienteId);
    }

    @Get('/historic/:pacienteId/servicio/:serviceId')
    findHistoricByPacienteAndService(@Param('pacienteId') pacienteId: string, @Param('serviceId') serviceId: string): Promise<LaserI[]> {
        console.log(new Date(), this.TAG, "findHistoricByPacienteAndService");
        return this.laserService.findHistoricByPacienteAndService(pacienteId, serviceId);
    }

    @Get(':id')
    findDateById(@Param('id') idLaser: string): Promise<LaserI> {
        console.log(new Date(), this.TAG, "findDateById");
        return this.laserService.findDateById(idLaser);
    }

    @Get('sucursal/:sucursalId/asistio/:statusAsistioId')
    waitingList(@Param('sucursalId') sucursalId: string, @Param('statusAsistioId') statusAsistioId: string) : Promise<LaserI[]> {
        console.log(new Date(), this.TAG, "waitingList");
        return this.laserService.waitingList(sucursalId, statusAsistioId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/medico/:medicoId/atendido/:atendidoId')
    findLaserByPayOfDoctor(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
    @Param('sucursalId') sucursalId: string, @Param('medicoId') medicoId: string, @Param('atendidoId') atendidoId: string,) : Promise<LaserI[]> {
        console.log(new Date(), this.TAG, "findLaserByPayOfDoctor");
        return this.laserService.findLaserByPayOfDoctor(anio, mes, dia, sucursalId, medicoId, atendidoId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/medico/:medicoId/atendido/:atendidoId/turno/:turno')
    findLaserByPayOfDoctorTurno(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
    @Param('sucursalId') sucursalId: string, @Param('medicoId') medicoId: string, @Param('atendidoId') atendidoId: string,
    @Param('turno') turno: string) : Promise<LaserI[]> {
        console.log(new Date(), this.TAG, "findLaserByPayOfDoctorTurno");
        return this.laserService.findLaserByPayOfDoctorTurno(anio, mes, dia, sucursalId, medicoId, atendidoId, turno);
    }

    @Post()
    createDate(@Body() laserDto: LaserDto): Promise<LaserI> {
        console.log(new Date(), this.TAG, "createDate");
        return this.laserService.createDate(laserDto);
    }

    @Put(':id') 
    updateDate(@Param('id') idLaser: string, @Body() laserDto: LaserDto): Promise<LaserI> {
        console.log(new Date(), this.TAG, "updateDate");
        return this.laserService.updateDate(idLaser, laserDto);
    }

    @Delete(':id')
    deleteDate(@Param('id') idLaser: string): Promise<LaserI> {
        console.log(new Date(), this.TAG, "deleteDate");
        return this.laserService.deleteDate(idLaser);
    }

}
