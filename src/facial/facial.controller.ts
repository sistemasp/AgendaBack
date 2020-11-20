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
    findHistoricFacialByPaciente(@Param('pacienteId') pacienteId: string): Promise<FacialI[]> {
        console.log(new Date(), this.TAG, "findHistoricFacialByPaciente");
        return this.facialService.findHistoricFacialByPaciente(pacienteId);
    }

    @Get('/historic/:pacienteId/servicio/:serviceId')
    findHistoricFacialByPacienteAndService(@Param('pacienteId') pacienteId: string, @Param('serviceId') serviceId: string): Promise<FacialI[]> {
        console.log(new Date(), this.TAG, "findHistoricFacialByPacienteAndService");
        return this.facialService.findHistoricFacialByPacienteAndService(pacienteId, serviceId);
    }

    @Get(':id')
    findFacialById(@Param('id') idFacial: string): Promise<FacialI> {
        console.log(new Date(), this.TAG, "findFacialById");
        return this.facialService.findFacialById(idFacial);
    }

    @Get('sucursal/:sucursalId/asistio/:statusAsistioId')
    waitingFacialList(@Param('sucursalId') sucursalId: string, @Param('statusAsistioId') statusAsistioId: string) : Promise<FacialI[]> {
        console.log(new Date(), this.TAG, "waitingFacialList");
        return this.facialService.waitingFacialList(sucursalId, statusAsistioId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId')
    findFacialByPayOfDoctor(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
    @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string, @Param('atendidoId') atendidoId: string,) : Promise<FacialI[]> {
        console.log(new Date(), this.TAG, "findFacialByPayOfDoctor");
        return this.facialService.findFacialByPayOfDoctor(anio, mes, dia, sucursalId, dermatologoId, atendidoId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId/turno/:turno')
    findFacialByPayOfDoctorTurno(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
    @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string, @Param('atendidoId') atendidoId: string,
    @Param('turno') turno: string) : Promise<FacialI[]> {
        console.log(new Date(), this.TAG, "findFacialByPayOfDoctorTurno");
        return this.facialService.findFacialByPayOfDoctorTurno(anio, mes, dia, sucursalId, dermatologoId, atendidoId, turno);
    }

    @Get('sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId/apertura/:hora_apertura/cierre/:hora_cierre')
    findFacialesByPayOfDoctorHoraAplicacion(@Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string,
        @Param('atendidoId') atendidoId: string, @Param('hora_apertura') hora_apertura: string,
        @Param('hora_cierre') hora_cierre: string): Promise<FacialI[]> {
        console.log(new Date(), this.TAG, "findFacialesByPayOfDoctorHoraAplicacion");
        return this.facialService.findFacialesByPayOfDoctorHoraAplicacion(sucursalId, dermatologoId, atendidoId, hora_apertura, hora_cierre);
    }

    @Get('sucursal/:sucursalId/pendiente/:pendienteId')
    showAllFacialBySucursalPendiente(@Param('sucursalId') sucursalId: string,
        @Param('pendienteId') pendienteId: string): Promise<FacialI[]> {
        console.log(new Date(), this.TAG, "showAllFacialBySucursalPendiente");
        return this.facialService.showAllFacialBySucursalPendiente(sucursalId, pendienteId);
    }
    
    @Post()
    createFacial(@Body() facialDto: FacialDto): Promise<FacialI> {
        console.log(new Date(), this.TAG, "createFacial");
        return this.facialService.createFacial(facialDto);
    }

    @Put(':id') 
    updateFacial(@Param('id') idFacial: string, @Body() facialDto: FacialDto): Promise<FacialI> {
        console.log(new Date(), this.TAG, "updateFacial");
        return this.facialService.updateFacial(idFacial, facialDto);
    }

    @Delete(':id')
    deleteDate(@Param('id') idFacial: string): Promise<FacialI> {
        console.log(new Date(), this.TAG, "deleteDate");
        return this.facialService.deleteDate(idFacial);
    }

}
