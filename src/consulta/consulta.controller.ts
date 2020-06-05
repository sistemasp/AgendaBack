import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { ConsultaI } from 'src/interfaces/consulta.interface';
import { ConsultaDto } from 'src/dto/consulta-dto';

@Controller('consulta')
export class ConsultaController {

    TAG = "ConsultaController";

    constructor(private readonly consultaService: ConsultaService) {}

    @Get()
    showAllConsults() : Promise<ConsultaI[]> {
        console.log(this.TAG, "showAllConsults");
        return this.consultaService.showAllConsults();
    }

    @Get('sucursal/:sucursalId')
    showAllConsultsBySucursal(@Param('sucursalId') sucursalId: string) : Promise<ConsultaI[]> {
        console.log(this.TAG, "showAllConsultsBySucursal");
        return this.consultaService.showAllConsultsBySucursal(sucursalId);
    }

    @Get('sucursal/:sucursalId/asistio')
    showAllConsultsBySucursalAsistio(@Param('sucursalId') sucursalId: string) : Promise<ConsultaI[]> {
        console.log(this.TAG, "showAllConsultsBySucursalAsistio");
        return this.consultaService.showAllConsultsBySucursalAsistio(sucursalId);
    }

    @Get(':dia/:mes/:anio')
    findConsultsByDate(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string) : Promise<ConsultaI[]> {
        console.log(this.TAG, "findConsultsByDate");
        return this.consultaService.findConsultsByDate(`${dia}/${mes}/${anio}`);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId')
    findConsultsByDateAndSucursal(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, @Param('sucursalId') sucursalId: string) : Promise<ConsultaI[]> {
        console.log(this.TAG, "findConsultsByDateAndSucursal");
        return this.consultaService.findConsultsByDateAndSucursal(`${dia}/${mes}/${anio}`, sucursalId);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findConsultsByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string) : Promise<ConsultaI[]> {
        console.log(this.TAG, "findConsultsByRangeDateAndSucursal");
        return this.consultaService.findConsultsByRangeDateAndSucursal(`${diai}/${mesi}/${anioi}`, `${diaf}/${mesf}/${aniof}`, sucursalId);
    }

    @Get('/histotic/:pacienteId')
    findHistoricByPaciente(@Param('pacienteId') pacienteId: string): Promise<ConsultaI[]> {
        console.log(this.TAG, "findHistoricByPaciente");
        return this.consultaService.findHistoricByPaciente(pacienteId);
    }

    @Get(':id')
    findConsultById(@Param('id') idConsulta: string): Promise<ConsultaI> {
        console.log(this.TAG, "findConsultById");
        return this.consultaService.findConsultById(idConsulta);
    }

    @Post()
    createConsult(@Body() consultaDto: ConsultaDto): Promise<ConsultaI> {
        console.log(this.TAG, "createConsult");
        return this.consultaService.createConsult(consultaDto);
    }

    @Put(':id') 
    updateConsult(@Param('id') idConsulta: string, @Body() consultaDto: ConsultaDto): Promise<ConsultaI> {
        console.log(this.TAG, "updateConsult");
        return this.consultaService.updateConsult(idConsulta, consultaDto);
    }

    @Delete(':id')
    deleteConsult(@Param('id') idConsulta: string): Promise<ConsultaI> {
        console.log(this.TAG, "deleteConsult");
        return this.consultaService.deleteConsult(idConsulta);
    }

}
