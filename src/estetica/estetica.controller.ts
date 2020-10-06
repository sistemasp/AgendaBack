import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EsteticaService } from './estetica.service';
import { EsteticaI } from 'src/interfaces/estetica.interface';
import { EsteticaDto } from 'src/dto/estetica-dto';

@Controller('estetica')
export class EsteticaController {

    TAG = "EsteticaController";

    constructor(private readonly esteticaService: EsteticaService) { }

    @Get()
    showAllEsteticas(): Promise<EsteticaI[]> {
        console.log(new Date(), this.TAG, "showAllEsteticas");
        return this.esteticaService.showAllEsteticas();
    }

    @Get(':id')
    findEsteticaById(@Param('id') idEstetica: string): Promise<EsteticaI> {
        console.log(new Date(), this.TAG, "findEsteticaById");
        return this.esteticaService.findEsteticaById(idEstetica);
    }

    @Get('consulta/:consultaId')
    findEsteticaByConsultaId(@Param('consultaId') consultaId: string): Promise<EsteticaI> {
        console.log(new Date(), this.TAG, "findEsteticaByConsultaId");
        return this.esteticaService.findEsteticaByConsultaId(consultaId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/medico/:medicoId')
    findEsteticasByPayOfDoctor(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string, @Param('medicoId') medicoId: string, @Param('atendidoId') atendidoId: string,): Promise<EsteticaI[]> {
        console.log(new Date(), this.TAG, "findEsteticasByPayOfDoctor");
        return this.esteticaService.findEsteticasByPayOfDoctor(anio, mes, dia, sucursalId, medicoId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/medico/:medicoId/turno/:turno')
    findEsteticasByPayOfDoctorTurno(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string, @Param('medicoId') medicoId: string, @Param('turno') turno: string,): Promise<EsteticaI[]> {
        console.log(new Date(), this.TAG, "findEsteticasByPayOfDoctorTurno");
        return this.esteticaService.findEsteticasByPayOfDoctorTurno(anio, mes, dia, sucursalId, medicoId, turno);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findEsteticasByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string) : Promise<EsteticaI[]> {
        console.log(new Date(), this.TAG, "findEsteticasByRangeDateAndSucursal");
        return this.esteticaService.findEsteticasByRangeDateAndSucursal(`${anioi}-${mesi}-${diai}`, `${aniof}-${mesf}-${diaf}`, sucursalId);
    }

    @Post()
    createEstetica(@Body() esteticaDto: EsteticaDto): Promise<EsteticaI> {
        console.log(new Date(), this.TAG, "createEstetica");
        return this.esteticaService.createEstetica(esteticaDto);
    }

    @Put(':id')
    updateEstetica(@Param('id') idEstetica: string, @Body() esteticaDto: EsteticaDto): Promise<EsteticaI> {
        console.log(new Date(), this.TAG, "updateEstetica");
        return this.esteticaService.updateEstetica(idEstetica, esteticaDto);
    }

    @Delete(':id')
    deleteEstetica(@Param('id') idEstetica: string): Promise<EsteticaI> {
        console.log(new Date(), this.TAG, "deleteEstetica");
        return this.esteticaService.deleteEstetica(idEstetica);
    }

}
