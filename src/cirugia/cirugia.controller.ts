import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CirugiaService } from './cirugia.service';
import { CirugiaI } from 'src/interfaces/cirugia.interface';
import { CirugiaDto } from 'src/dto/cirugia-dto';

@Controller('cirugia')
export class CirugiaController {

    TAG = "CirugiaController";

    constructor(private readonly cirugiaService: CirugiaService) { }

    @Get()
    showAllCirugias(): Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "showAllCirugias");
        return this.cirugiaService.showAllCirugias();
    }

    @Get(':id')
    findCirugiaById(@Param('id') idCirugia: string): Promise<CirugiaI> {
        console.log(new Date(), this.TAG, "findCirugiaById");
        return this.cirugiaService.findCirugiaById(idCirugia);
    }

    @Get('consulta/:consultaId')
    findCirugiaByConsultaId(@Param('consultaId') consultaId: string): Promise<CirugiaI> {
        console.log(new Date(), this.TAG, "findCirugiaByConsultaId");
        return this.cirugiaService.findCirugiaByConsultaId(consultaId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId')
    findCirugiasByPayOfDoctor(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string): Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "findCirugiasByPayOfDoctor");
        return this.cirugiaService.findCirugiasByPayOfDoctor(anio, mes, dia, sucursalId, dermatologoId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId')
    findCirugiaByDateAndSucursal(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string): Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "findCirugiaByDateAndSucursal");
        return this.cirugiaService.findCirugiaByDateAndSucursal(anio, mes, dia, sucursalId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/dermatologo/:dermatologoId/turno/:turno')
    findCirugiasByPayOfDoctorTurno(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string, @Param('turno') turno: string,): Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "findCirugiasByPayOfDoctorTurno");
        return this.cirugiaService.findCirugiasByPayOfDoctorTurno(anio, mes, dia, sucursalId, dermatologoId, turno);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findCirugiasByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string) : Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "findCirugiasByRangeDateAndSucursal");
        return this.cirugiaService.findCirugiasByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }

    @Get('waitingList/sucursal/:sucursalId/asistio/:statusAsistioId')
    waitingList(@Param('sucursalId') sucursalId: string, @Param('statusAsistioId') statusAsistioId: string) : Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "waitingList");
        return this.cirugiaService.waitingList(sucursalId, statusAsistioId);
    }

    @Get('/historic/:pacienteId')
    findCirugiasHistoricByPaciente(@Param('pacienteId') pacienteId: string): Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "findCirugiasHistoricByPaciente");
        return this.cirugiaService.findCirugiasHistoricByPaciente(pacienteId);
    }

    @Get('sucursal/:sucursalId/dermatologo/:dermatologoId/atendido/:atendidoId/apertura/:hora_apertura/cierre/:hora_cierre')
    findCirugiasByPayOfDoctorHoraAplicacion(@Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string,
        @Param('atendidoId') atendidoId: string, @Param('hora_apertura') hora_apertura: string,
        @Param('hora_cierre') hora_cierre: string): Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "findCirugiasByPayOfDoctorHoraAplicacion");
        return this.cirugiaService.findCirugiasByPayOfDoctorHoraAplicacion(sucursalId, dermatologoId, atendidoId, hora_apertura, hora_cierre);
    }

    @Get('sucursal/:sucursalId/dermatologo/:dermatologoId/canceladocp/:canceladoCPId/apertura/:hora_apertura/cierre/:hora_cierre')
    findCirugiasByPayOfDoctorHoraAplicacionPA(@Param('sucursalId') sucursalId: string, @Param('dermatologoId') dermatologoId: string,
        @Param('canceladoCPId') canceladoCPId: string, @Param('hora_apertura') hora_apertura: string,
        @Param('hora_cierre') hora_cierre: string): Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "findCirugiasByPayOfDoctorHoraAplicacionPA");
        return this.cirugiaService.findCirugiasByPayOfDoctorHoraAplicacionPA(sucursalId, dermatologoId, canceladoCPId, hora_apertura, hora_cierre);
    }

    @Post()
    createCirugia(@Body() cirugiaDto: CirugiaDto): Promise<CirugiaI> {
        console.log(new Date(), this.TAG, "createCirugia");
        return this.cirugiaService.createCirugia(cirugiaDto);
    }

    @Put(':id')
    updateCirugia(@Param('id') idCirugia: string, @Body() cirugiaDto: CirugiaDto): Promise<CirugiaI> {
        console.log(new Date(), this.TAG, "updateCirugia");
        return this.cirugiaService.updateCirugia(idCirugia, cirugiaDto);
    }

    @Delete(':id')
    deleteCirugia(@Param('id') idCirugia: string): Promise<CirugiaI> {
        console.log(new Date(), this.TAG, "deleteCirugia");
        return this.cirugiaService.deleteCirugia(idCirugia);
    }

}
