import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { FacialService } from './facial.service';
import { FacialI } from 'src/interfaces/facial.interface';
import { FacialDto } from 'src/dto/facial-dto';

@Controller('facial')
export class FacialController {

    TAG = "FacialController";

    constructor(private readonly facialService: FacialService) {}

    @Get()
    showAllFacial() : Promise<FacialI[]> {
        console.log(new Date(), this.TAG, "showAllFacial");
        return this.facialService.showAllFacial();
    }

    @Get('sucursal/:sucursalId')
    showAllFacialBySucursal(@Param('sucursalId') sucursalId: string) : Promise<FacialI[]> {
        console.log(new Date(), this.TAG, "showAllFacialBySucursal");
        return this.facialService.showAllFacialBySucursal(sucursalId);
    }

    @Get('sucursal/:sucursalId/asistio')
    showAllFacialBySucursalAsistio(@Param('sucursalId') sucursalId: string) : Promise<FacialI[]> {
        console.log(new Date(), this.TAG, "showAllFacialBySucursalAsistio");
        return this.facialService.showAllFacialBySucursalAsistio(sucursalId);
    }

    @Get(':dia/:mes/:anio')
    findFacialByDate(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string) : Promise<FacialI[]> {
        console.log(new Date(), this.TAG, "findFacialByDate");
        return this.facialService.findFacialByDate(anio, mes, dia);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId')
    findFacialByDateAndSucursal(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, @Param('sucursalId') sucursalId: string) : Promise<FacialI[]> {
        console.log(new Date(), this.TAG, "findFacialByDateAndSucursal");
        return this.facialService.findFacialByDateAndSucursal(anio, mes, dia, sucursalId);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findFacialByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string) : Promise<FacialI[]> {
        console.log(new Date(), this.TAG, "findFacialByRangeDateAndSucursal");
        return this.facialService.findFacialByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId/service/:serviceId')
    findFacialByRangeDateAndSucursalAndService(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string, @Param('serviceId') serviceId: string) : Promise<FacialI[]> {
        console.log(new Date(), this.TAG, "findFacialByRangeDateAndSucursalAndService", sucursalId, serviceId);
        return this.facialService.findFacialByRangeDateAndSucursalAndService(anioi, mesi, diai, aniof, mesf, diaf, sucursalId, serviceId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/:servicio')
    findFacialByDateAndSucursalAndService(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
        @Param('sucursalId') sucursalId: string, @Param('servicio') servicio: string) : Promise<FacialI[]> {
        console.log(new Date(), this.TAG, "findFacialByDateAndSucursalAndService");
        return this.facialService.findFacialByDateAndSucursalAndService(anio, mes, dia, sucursalId, servicio);
    }

    @Get('/historic/:pacienteId')
    findHistoricByPaciente(@Param('pacienteId') pacienteId: string): Promise<FacialI[]> {
        console.log(new Date(), this.TAG, "findHistoricByPaciente");
        return this.facialService.findHistoricByPaciente(pacienteId);
    }

    @Get('/historic/:pacienteId/servicio/:serviceId')
    findHistoricByPacienteAndService(@Param('pacienteId') pacienteId: string, @Param('serviceId') serviceId: string): Promise<FacialI[]> {
        console.log(new Date(), this.TAG, "findHistoricByPacienteAndService");
        return this.facialService.findHistoricByPacienteAndService(pacienteId, serviceId);
    }

    @Get(':id')
    findDateById(@Param('id') idFacial: string): Promise<FacialI> {
        console.log(new Date(), this.TAG, "findDateById");
        return this.facialService.findDateById(idFacial);
    }

    @Get('sucursal/:sucursalId/asistio/:statusAsistioId')
    waitingList(@Param('sucursalId') sucursalId: string, @Param('statusAsistioId') statusAsistioId: string) : Promise<FacialI[]> {
        console.log(new Date(), this.TAG, "waitingList");
        return this.facialService.waitingList(sucursalId, statusAsistioId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/medico/:medicoId/atendido/:atendidoId')
    findFacialByPayOfDoctor(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
    @Param('sucursalId') sucursalId: string, @Param('medicoId') medicoId: string, @Param('atendidoId') atendidoId: string,) : Promise<FacialI[]> {
        console.log(new Date(), this.TAG, "findFacialByPayOfDoctor");
        return this.facialService.findFacialByPayOfDoctor(anio, mes, dia, sucursalId, medicoId, atendidoId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/medico/:medicoId/atendido/:atendidoId/turno/:turno')
    findFacialByPayOfDoctorTurno(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
    @Param('sucursalId') sucursalId: string, @Param('medicoId') medicoId: string, @Param('atendidoId') atendidoId: string,
    @Param('turno') turno: string) : Promise<FacialI[]> {
        console.log(new Date(), this.TAG, "findFacialByPayOfDoctorTurno");
        return this.facialService.findFacialByPayOfDoctorTurno(anio, mes, dia, sucursalId, medicoId, atendidoId, turno);
    }

    @Post()
    createDate(@Body() facialDto: FacialDto): Promise<FacialI> {
        console.log(new Date(), this.TAG, "createDate");
        return this.facialService.createDate(facialDto);
    }

    @Put(':id') 
    updateDate(@Param('id') idFacial: string, @Body() facialDto: FacialDto): Promise<FacialI> {
        console.log(new Date(), this.TAG, "updateDate");
        return this.facialService.updateDate(idFacial, facialDto);
    }

    @Delete(':id')
    deleteDate(@Param('id') idFacial: string): Promise<FacialI> {
        console.log(new Date(), this.TAG, "deleteDate");
        return this.facialService.deleteDate(idFacial);
    }

}
