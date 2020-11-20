import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CitaService } from './cita.service';
import { CitaI } from 'src/interfaces/cita.interface';
import { CitaDto } from 'src/dto/cita-dto';

@Controller('cita')
export class CitaController {

    TAG = "CitaController";

    constructor(private readonly citaService: CitaService) {}

    @Get()
    showAllDates() : Promise<CitaI[]> {
        console.log(new Date(), this.TAG, "showAllDates");
        return this.citaService.showAllDates();
    }

    @Get('sucursal/:sucursalId')
    showAllDatesBySucursal(@Param('sucursalId') sucursalId: string) : Promise<CitaI[]> {
        console.log(new Date(), this.TAG, "showAllDatesBySucursal");
        return this.citaService.showAllDatesBySucursal(sucursalId);
    }

    @Get('sucursal/:sucursalId/asistio')
    showAllDatesBySucursalAsistio(@Param('sucursalId') sucursalId: string) : Promise<CitaI[]> {
        console.log(new Date(), this.TAG, "showAllDatesBySucursalAsistio");
        return this.citaService.showAllDatesBySucursalAsistio(sucursalId);
    }

    @Get(':dia/:mes/:anio')
    findDatesByDate(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string) : Promise<CitaI[]> {
        console.log(new Date(), this.TAG, "findDatesByDate");
        return this.citaService.findDatesByDate(anio, mes, dia);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId')
    findDatesByDateAndSucursal(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, @Param('sucursalId') sucursalId: string) : Promise<CitaI[]> {
        console.log(new Date(), this.TAG, "findDatesByDateAndSucursal");
        return this.citaService.findDatesByDateAndSucursal(anio, mes, dia, sucursalId);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findDatesByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string) : Promise<CitaI[]> {
        console.log(new Date(), this.TAG, "findDatesByRangeDateAndSucursal");
        return this.citaService.findDatesByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId/service/:serviceId')
    findDatesByRangeDateAndSucursalAndService(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string, @Param('serviceId') serviceId: string) : Promise<CitaI[]> {
        console.log(new Date(), this.TAG, "findDatesByRangeDateAndSucursalAndService", sucursalId, serviceId);
        return this.citaService.findDatesByRangeDateAndSucursalAndService(anioi, mesi, diai, aniof, mesf, diaf, sucursalId, serviceId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/:servicio')
    findDatesByDateAndSucursalAndService(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
        @Param('sucursalId') sucursalId: string, @Param('servicio') servicio: string) : Promise<CitaI[]> {
        console.log(new Date(), this.TAG, "findDatesByDateAndSucursalAndService");
        return this.citaService.findDatesByDateAndSucursalAndService(anio, mes, dia, sucursalId, servicio);
    }

    @Get('/historic/:pacienteId')
    findHistoricByPaciente(@Param('pacienteId') pacienteId: string): Promise<CitaI[]> {
        console.log(new Date(), this.TAG, "findHistoricByPaciente");
        return this.citaService.findHistoricByPaciente(pacienteId);
    }

    @Get('/historic/:pacienteId/servicio/:serviceId')
    findHistoricByPacienteAndService(@Param('pacienteId') pacienteId: string, @Param('serviceId') serviceId: string): Promise<CitaI[]> {
        console.log(new Date(), this.TAG, "findHistoricByPacienteAndService");
        return this.citaService.findHistoricByPacienteAndService(pacienteId, serviceId);
    }

    @Get(':id')
    findDateById(@Param('id') idCita: string): Promise<CitaI> {
        console.log(new Date(), this.TAG, "findDateById");
        return this.citaService.findDateById(idCita);
    }

    @Get('sucursal/:sucursalId/asistio/:statusAsistioId')
    waitingList(@Param('sucursalId') sucursalId: string, @Param('statusAsistioId') statusAsistioId: string) : Promise<CitaI[]> {
        console.log(new Date(), this.TAG, "waitingList");
        return this.citaService.waitingList(sucursalId, statusAsistioId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId')
    findDatesByPayOfDoctor(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
    @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string, @Param('atendidoId') atendidoId: string,) : Promise<CitaI[]> {
        console.log(new Date(), this.TAG, "findDatesByPayOfDoctor");
        return this.citaService.findDatesByPayOfDoctor(anio, mes, dia, sucursalId, dermatologoId, atendidoId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId/turno/:turno')
    findDatesByPayOfDoctorTurno(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
    @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string, @Param('atendidoId') atendidoId: string,
    @Param('turno') turno: string) : Promise<CitaI[]> {
        console.log(new Date(), this.TAG, "findDatesByPayOfDoctorTurno");
        return this.citaService.findDatesByPayOfDoctorTurno(anio, mes, dia, sucursalId, dermatologoId, atendidoId, turno);
    }

    @Post()
    createDate(@Body() citaDto: CitaDto): Promise<CitaI> {
        console.log(new Date(), this.TAG, "createDate");
        return this.citaService.createDate(citaDto);
    }

    @Put(':id') 
    updateDate(@Param('id') idCita: string, @Body() citaDto: CitaDto): Promise<CitaI> {
        console.log(new Date(), this.TAG, "updateDate");
        return this.citaService.updateDate(idCita, citaDto);
    }

    @Delete(':id')
    deleteDate(@Param('id') idCita: string): Promise<CitaI> {
        console.log(new Date(), this.TAG, "deleteDate");
        return this.citaService.deleteDate(idCita);
    }

}
