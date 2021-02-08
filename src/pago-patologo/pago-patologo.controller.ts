import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PagoPatologoService } from './pago-patologo.service';
import { PagoPatologoI } from 'src/interfaces/pago-patologo.interface';
import { PagoPatologoDto } from 'src/dto/pago-patologo-dto';

@Controller('pagoPatologo')
export class PagoPatologoController {

    TAG = "PagoPatologoController";

    constructor(private readonly pagoPatologoService: PagoPatologoService) {}

    @Get()
    showAllPagoPatologos() : Promise<PagoPatologoI[]> {
        console.log(new Date(), this.TAG, "showAllPagoPatologos");
        return this.pagoPatologoService.showAllPagoPatologos();
    }

    @Get('sucursal/:sucursalId')
    showAllPagoPatologosBySucursal(@Param('sucursalId') sucursalId: string) : Promise<PagoPatologoI[]> {
        console.log(new Date(), this.TAG, "showAllPagoPatologosBySucursal");
        return this.pagoPatologoService.showAllPagoPatologosBySucursal(sucursalId);
    }

    @Get('sucursal/:sucursalId/asistio')
    showAllPagoPatologosBySucursalAsistio(@Param('sucursalId') sucursalId: string) : Promise<PagoPatologoI[]> {
        console.log(new Date(), this.TAG, "showAllPagoPatologosBySucursalAsistio");
        return this.pagoPatologoService.showAllPagoPatologosBySucursalAsistio(sucursalId);
    }

    @Get(':patologoId/sucursal/:sucursalId/turno/:turno')
    showTodayPagoPatologoBySucursalTurno(
        @Param('patologoId') patologoId: string,
        @Param('sucursalId') sucursalId: string,
        @Param('turno') turno: string) : Promise<PagoPatologoI> {
        console.log(new Date(), this.TAG, "showTodayPagoPatologoBySucursalTurno");
        return this.pagoPatologoService.showTodayPagoPatologoBySucursalTurno(patologoId, sucursalId, turno);
    }

    @Get('historico/patologos/:patologoId')
    findHistoricByMedicId(@Param('patologoId') patologoId: string): Promise<PagoPatologoI[]> {
        console.log(new Date(), this.TAG, "findHistoricByMedicId");
        return this.pagoPatologoService.findHistoricByMedicId(patologoId);
    }

    @Get(':dia/:mes/:anio')
    findPagoPatologosByDate(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string) : Promise<PagoPatologoI[]> {
        console.log(new Date(), this.TAG, "findPagoPatologosByDate");
        return this.pagoPatologoService.findPagoPatologosByDate(anio, mes , dia);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId')
    findPagoPatologosByDateAndSucursal(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, @Param('sucursalId') sucursalId: string) : Promise<PagoPatologoI[]> {
        console.log(new Date(), this.TAG, "findPagoPatologosByDateAndSucursal");
        return this.pagoPatologoService.findPagoPatologosByDateAndSucursal(anio, mes , dia, sucursalId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/patologo/:patologoId/atendido/:atendidoId')
    findPagoPatologosByPayOfDoctor(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
    @Param('sucursalId') sucursalId: string, @Param('patologoId') patologoId: string, @Param('atendidoId') atendidoId: string,) : Promise<PagoPatologoI[]> {
        console.log(new Date(), this.TAG, "findPagoPatologosByPayOfDoctor");
        return this.pagoPatologoService.findPagoPatologosByPayOfDoctor(anio, mes , dia, sucursalId, patologoId, atendidoId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/patologo/:patologoId/atendido/:atendidoId/turno/:turno')
    findPagoPatologosByPayOfDoctorTurno(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
    @Param('sucursalId') sucursalId: string, @Param('patologoId') patologoId: string, @Param('atendidoId') atendidoId: string,
    @Param('turno') turno: string) : Promise<PagoPatologoI[]> {
        console.log(new Date(), this.TAG, "findPagoPatologosByPayOfDoctorTurno");
        return this.pagoPatologoService.findPagoPatologosByPayOfDoctorTurno(anio, mes , dia, sucursalId, patologoId, atendidoId, turno);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/patologo/:patologoId/atendido/:atendidoId/turno/:turno/frecuencia/:frecuenciaId')
    findPagoPatologosByPayOfDoctorTurnoFrecuencia(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
    @Param('sucursalId') sucursalId: string, @Param('patologoId') patologoId: string, @Param('atendidoId') atendidoId: string,
    @Param('turno') turno: string, @Param('frecuenciaId') frecuenciaId: string) : Promise<PagoPatologoI[]> {
        console.log(new Date(), this.TAG, "findPagoPatologosByPayOfDoctorTurnoFrecuencia");
        return this.pagoPatologoService.findPagoPatologosByPayOfDoctorTurnoFrecuencia(anio, mes , dia, sucursalId, patologoId, atendidoId, turno, frecuenciaId);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findPagoPatologosByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string) : Promise<PagoPatologoI[]> {
        console.log(new Date(), this.TAG, "findPagoPatologosByRangeDateAndSucursal");
        return this.pagoPatologoService.findPagoPatologosByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }

    @Get('/historic/:pacienteId')
    findHistoricByPaciente(@Param('pacienteId') pacienteId: string): Promise<PagoPatologoI[]> {
        console.log(new Date(), this.TAG, "findHistoricByPaciente");
        return this.pagoPatologoService.findHistoricByPaciente(pacienteId);
    }

    @Get('sucursal/:sucursalId/asistio/:statusAsistioId')
    waitingList(@Param('sucursalId') sucursalId: string, @Param('statusAsistioId') statusAsistioId: string) : Promise<PagoPatologoI[]> {
        console.log(new Date(), this.TAG, "waitingList");
        return this.pagoPatologoService.waitingList(sucursalId, statusAsistioId);
    }

    @Get(':id')
    findPagoPatologoById(@Param('id') idPagoPatologo: string): Promise<PagoPatologoI> {
        console.log(new Date(), this.TAG, "findPagoPatologoById");
        return this.pagoPatologoService.findPagoPatologoById(idPagoPatologo);
    }

    @Post()
    createPagoPatologo(@Body() pagoPatologoDto: PagoPatologoDto): Promise<PagoPatologoI> {
        console.log(new Date(), this.TAG, "createPagoPatologo");
        return this.pagoPatologoService.createPagoPatologo(pagoPatologoDto);
    }

    @Put(':id') 
    updatePagoPatologo(@Param('id') idPagoPatologo: string, @Body() pagoPatologoDto: PagoPatologoDto): Promise<PagoPatologoI> {
        console.log(new Date(), this.TAG, "updatePagoPatologo");
        return this.pagoPatologoService.updatePagoPatologo(idPagoPatologo, pagoPatologoDto);
    }

    @Delete(':id')
    deletePagoPatologo(@Param('id') idPagoPatologo: string): Promise<PagoPatologoI> {
        console.log(new Date(), this.TAG, "deletePagoPatologo");
        return this.pagoPatologoService.deletePagoPatologo(idPagoPatologo);
    }

}
