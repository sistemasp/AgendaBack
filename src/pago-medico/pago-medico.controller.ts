import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PagoMedicoService } from './pago-medico.service';
import { PagoMedicoI } from 'src/interfaces/pago-medico.interface';
import { PagoMedicoDto } from 'src/dto/pago-medico-dto';

@Controller('pagoMedico')
export class PagoMedicoController {

    TAG = "PagoMedicoController";

    constructor(private readonly pagoMedicoService: PagoMedicoService) {}

    @Get()
    showAllPagoMedicos() : Promise<PagoMedicoI[]> {
        console.log(new Date(), this.TAG, "showAllPagoMedicos");
        return this.pagoMedicoService.showAllPagoMedicos();
    }

    @Get('sucursal/:sucursalId')
    showAllPagoMedicosBySucursal(@Param('sucursalId') sucursalId: string) : Promise<PagoMedicoI[]> {
        console.log(new Date(), this.TAG, "showAllPagoMedicosBySucursal");
        return this.pagoMedicoService.showAllPagoMedicosBySucursal(sucursalId);
    }

    @Get('sucursal/:sucursalId/asistio')
    showAllPagoMedicosBySucursalAsistio(@Param('sucursalId') sucursalId: string) : Promise<PagoMedicoI[]> {
        console.log(new Date(), this.TAG, "showAllPagoMedicosBySucursalAsistio");
        return this.pagoMedicoService.showAllPagoMedicosBySucursalAsistio(sucursalId);
    }

    @Get(':medicoId/sucursal/:sucursalId/turno/:turno')
    showTodayPagoMedicoBySucursalTurno(
        @Param('medicoId') medicoId: string,
        @Param('sucursalId') sucursalId: string,
        @Param('turno') turno: string) : Promise<PagoMedicoI> {
        console.log(new Date(), this.TAG, "showTodayPagoMedicoBySucursalTurno");
        return this.pagoMedicoService.showTodayPagoMedicoBySucursalTurno(medicoId, sucursalId, turno);
    }

    @Get('historico/medicos/:medicoId')
    findHistoricByMedicId(@Param('medicoId') medicoId: string): Promise<PagoMedicoI[]> {
        console.log(new Date(), this.TAG, "findHistoricByMedicId");
        return this.pagoMedicoService.findHistoricByMedicId(medicoId);
    }

    @Get(':dia/:mes/:anio')
    findPagoMedicosByDate(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string) : Promise<PagoMedicoI[]> {
        console.log(new Date(), this.TAG, "findPagoMedicosByDate");
        return this.pagoMedicoService.findPagoMedicosByDate(anio, mes , dia);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId')
    findPagoMedicosByDateAndSucursal(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, @Param('sucursalId') sucursalId: string) : Promise<PagoMedicoI[]> {
        console.log(new Date(), this.TAG, "findPagoMedicosByDateAndSucursal");
        return this.pagoMedicoService.findPagoMedicosByDateAndSucursal(anio, mes , dia, sucursalId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/medico/:medicoId/atendido/:atendidoId')
    findPagoMedicosByPayOfDoctor(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
    @Param('sucursalId') sucursalId: string, @Param('medicoId') medicoId: string, @Param('atendidoId') atendidoId: string,) : Promise<PagoMedicoI[]> {
        console.log(new Date(), this.TAG, "findPagoMedicosByPayOfDoctor");
        return this.pagoMedicoService.findPagoMedicosByPayOfDoctor(anio, mes , dia, sucursalId, medicoId, atendidoId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/medico/:medicoId/atendido/:atendidoId/turno/:turno')
    findPagoMedicosByPayOfDoctorTurno(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
    @Param('sucursalId') sucursalId: string, @Param('medicoId') medicoId: string, @Param('atendidoId') atendidoId: string,
    @Param('turno') turno: string) : Promise<PagoMedicoI[]> {
        console.log(new Date(), this.TAG, "findPagoMedicosByPayOfDoctorTurno");
        return this.pagoMedicoService.findPagoMedicosByPayOfDoctorTurno(anio, mes , dia, sucursalId, medicoId, atendidoId, turno);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/medico/:medicoId/atendido/:atendidoId/turno/:turno/frecuencia/:frecuenciaId')
    findPagoMedicosByPayOfDoctorTurnoFrecuencia(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, 
    @Param('sucursalId') sucursalId: string, @Param('medicoId') medicoId: string, @Param('atendidoId') atendidoId: string,
    @Param('turno') turno: string, @Param('frecuenciaId') frecuenciaId: string) : Promise<PagoMedicoI[]> {
        console.log(new Date(), this.TAG, "findPagoMedicosByPayOfDoctorTurnoFrecuencia");
        return this.pagoMedicoService.findPagoMedicosByPayOfDoctorTurnoFrecuencia(anio, mes , dia, sucursalId, medicoId, atendidoId, turno, frecuenciaId);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findPagoMedicosByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string) : Promise<PagoMedicoI[]> {
        console.log(new Date(), this.TAG, "findPagoMedicosByRangeDateAndSucursal");
        return this.pagoMedicoService.findPagoMedicosByRangeDateAndSucursal(`${anioi}-${mesi}-${diai}`, `${aniof}-${mesf}-${diaf}`, sucursalId);
    }

    @Get('/historic/:pacienteId')
    findHistoricByPaciente(@Param('pacienteId') pacienteId: string): Promise<PagoMedicoI[]> {
        console.log(new Date(), this.TAG, "findHistoricByPaciente");
        return this.pagoMedicoService.findHistoricByPaciente(pacienteId);
    }

    @Get('sucursal/:sucursalId/asistio/:statusAsistioId')
    waitingList(@Param('sucursalId') sucursalId: string, @Param('statusAsistioId') statusAsistioId: string) : Promise<PagoMedicoI[]> {
        console.log(new Date(), this.TAG, "waitingList");
        return this.pagoMedicoService.waitingList(sucursalId, statusAsistioId);
    }

    @Get(':id')
    findPagoMedicoById(@Param('id') idPagoMedico: string): Promise<PagoMedicoI> {
        console.log(new Date(), this.TAG, "findPagoMedicoById");
        return this.pagoMedicoService.findPagoMedicoById(idPagoMedico);
    }

    @Post()
    createPagoMedico(@Body() pagoMedicoDto: PagoMedicoDto): Promise<PagoMedicoI> {
        console.log(new Date(), this.TAG, "createPagoMedico");
        return this.pagoMedicoService.createPagoMedico(pagoMedicoDto);
    }

    @Put(':id') 
    updatePagoMedico(@Param('id') idPagoMedico: string, @Body() pagoMedicoDto: PagoMedicoDto): Promise<PagoMedicoI> {
        console.log(new Date(), this.TAG, "updatePagoMedico");
        return this.pagoMedicoService.updatePagoMedico(idPagoMedico, pagoMedicoDto);
    }

    @Delete(':id')
    deletePagoMedico(@Param('id') idPagoMedico: string): Promise<PagoMedicoI> {
        console.log(new Date(), this.TAG, "deletePagoMedico");
        return this.pagoMedicoService.deletePagoMedico(idPagoMedico);
    }

}
