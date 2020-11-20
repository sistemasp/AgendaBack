import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PagoDermatologoService } from './pago-dermatologo.service';
import { PagoDermatologoI } from 'src/interfaces/pago-dermatologo.interface';
import { PagoDermatologoDto } from 'src/dto/pago-dermatologo-dto';

@Controller('pagoDermatologo')
export class PagoDermatologoController {

    TAG = "PagoDermatologoController";

    constructor(private readonly pagoDermatologoService: PagoDermatologoService) {}

    @Get()
    showAllPagoDermatologos() : Promise<PagoDermatologoI[]> {
        console.log(new Date(), this.TAG, "showAllPagoDermatologos");
        return this.pagoDermatologoService.showAllPagoDermatologos();
    }

    @Get('sucursal/:sucursalId')
    showAllPagoDermatologosBySucursal(@Param('sucursalId') sucursalId: string) : Promise<PagoDermatologoI[]> {
        console.log(new Date(), this.TAG, "showAllPagoDermatologosBySucursal");
        return this.pagoDermatologoService.showAllPagoDermatologosBySucursal(sucursalId);
    }

    @Get('sucursal/:sucursalId/asistio')
    showAllPagoDermatologosBySucursalAsistio(@Param('sucursalId') sucursalId: string) : Promise<PagoDermatologoI[]> {
        console.log(new Date(), this.TAG, "showAllPagoDermatologosBySucursalAsistio");
        return this.pagoDermatologoService.showAllPagoDermatologosBySucursalAsistio(sucursalId);
    }

    @Get(':dermatologoId/sucursal/:sucursalId/turno/:turno')
    showTodayPagoDermatologoBySucursalTurno(
        @Param('dermatologoId') dermatologoId: string,
        @Param('sucursalId') sucursalId: string,
        @Param('turno') turno: string) : Promise<PagoDermatologoI> {
        console.log(new Date(), this.TAG, "showTodayPagoDermatologoBySucursalTurno");
        return this.pagoDermatologoService.showTodayPagoDermatologoBySucursalTurno(dermatologoId, sucursalId, turno);
    }

    @Get('historico/dermatologos/:dermatologoId')
    findHistoricByMedicId(@Param('dermatologoId') dermatologoId: string): Promise<PagoDermatologoI[]> {
        console.log(new Date(), this.TAG, "findHistoricByMedicId");
        return this.pagoDermatologoService.findHistoricByMedicId(dermatologoId);
    }

    @Get(':dia/:mes/:anio')
    findPagoDermatologosByDate(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string) : Promise<PagoDermatologoI[]> {
        console.log(new Date(), this.TAG, "findPagoDermatologosByDate");
        return this.pagoDermatologoService.findPagoDermatologosByDate(anio, mes , dia);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId')
    findPagoDermatologosByDateAndSucursal(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, @Param('sucursalId') sucursalId: string) : Promise<PagoDermatologoI[]> {
        console.log(new Date(), this.TAG, "findPagoDermatologosByDateAndSucursal");
        return this.pagoDermatologoService.findPagoDermatologosByDateAndSucursal(anio, mes , dia, sucursalId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId')
    findPagoDermatologosByPayOfDoctor(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
    @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string, @Param('atendidoId') atendidoId: string,) : Promise<PagoDermatologoI[]> {
        console.log(new Date(), this.TAG, "findPagoDermatologosByPayOfDoctor");
        return this.pagoDermatologoService.findPagoDermatologosByPayOfDoctor(anio, mes , dia, sucursalId, dermatologoId, atendidoId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId/turno/:turno')
    findPagoDermatologosByPayOfDoctorTurno(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
    @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string, @Param('atendidoId') atendidoId: string,
    @Param('turno') turno: string) : Promise<PagoDermatologoI[]> {
        console.log(new Date(), this.TAG, "findPagoDermatologosByPayOfDoctorTurno");
        return this.pagoDermatologoService.findPagoDermatologosByPayOfDoctorTurno(anio, mes , dia, sucursalId, dermatologoId, atendidoId, turno);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId/turno/:turno/frecuencia/:frecuenciaId')
    findPagoDermatologosByPayOfDoctorTurnoFrecuencia(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
    @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string, @Param('atendidoId') atendidoId: string,
    @Param('turno') turno: string, @Param('frecuenciaId') frecuenciaId: string) : Promise<PagoDermatologoI[]> {
        console.log(new Date(), this.TAG, "findPagoDermatologosByPayOfDoctorTurnoFrecuencia");
        return this.pagoDermatologoService.findPagoDermatologosByPayOfDoctorTurnoFrecuencia(anio, mes , dia, sucursalId, dermatologoId, atendidoId, turno, frecuenciaId);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findPagoDermatologosByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string) : Promise<PagoDermatologoI[]> {
        console.log(new Date(), this.TAG, "findPagoDermatologosByRangeDateAndSucursal");
        return this.pagoDermatologoService.findPagoDermatologosByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }

    @Get('/historic/:pacienteId')
    findHistoricByPaciente(@Param('pacienteId') pacienteId: string): Promise<PagoDermatologoI[]> {
        console.log(new Date(), this.TAG, "findHistoricByPaciente");
        return this.pagoDermatologoService.findHistoricByPaciente(pacienteId);
    }

    @Get('sucursal/:sucursalId/asistio/:statusAsistioId')
    waitingList(@Param('sucursalId') sucursalId: string, @Param('statusAsistioId') statusAsistioId: string) : Promise<PagoDermatologoI[]> {
        console.log(new Date(), this.TAG, "waitingList");
        return this.pagoDermatologoService.waitingList(sucursalId, statusAsistioId);
    }

    @Get(':id')
    findPagoDermatologoById(@Param('id') idPagoDermatologo: string): Promise<PagoDermatologoI> {
        console.log(new Date(), this.TAG, "findPagoDermatologoById");
        return this.pagoDermatologoService.findPagoDermatologoById(idPagoDermatologo);
    }

    @Post()
    createPagoDermatologo(@Body() pagoDermatologoDto: PagoDermatologoDto): Promise<PagoDermatologoI> {
        console.log(new Date(), this.TAG, "createPagoDermatologo");
        return this.pagoDermatologoService.createPagoDermatologo(pagoDermatologoDto);
    }

    @Put(':id') 
    updatePagoDermatologo(@Param('id') idPagoDermatologo: string, @Body() pagoDermatologoDto: PagoDermatologoDto): Promise<PagoDermatologoI> {
        console.log(new Date(), this.TAG, "updatePagoDermatologo");
        return this.pagoDermatologoService.updatePagoDermatologo(idPagoDermatologo, pagoDermatologoDto);
    }

    @Delete(':id')
    deletePagoDermatologo(@Param('id') idPagoDermatologo: string): Promise<PagoDermatologoI> {
        console.log(new Date(), this.TAG, "deletePagoDermatologo");
        return this.pagoDermatologoService.deletePagoDermatologo(idPagoDermatologo);
    }

}
