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

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/medico/:medicoId')
    findCirugiasByPayOfDoctor(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string, @Param('medicoId') medicoId: string, @Param('atendidoId') atendidoId: string,): Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "findCirugiasByPayOfDoctor");
        return this.cirugiaService.findCirugiasByPayOfDoctor(`${anio}-${mes}-${dia}`, sucursalId, medicoId);
    }

    @Get(':dia/:mes/:anio/sucursal/:sucursalId/medico/:medicoId/turno/:turno')
    findCirugiasByPayOfDoctorTurno(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string,
        @Param('sucursalId') sucursalId: string, @Param('medicoId') medicoId: string, @Param('turno') turno: string,): Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "findCirugiasByPayOfDoctorTurno");
        return this.cirugiaService.findCirugiasByPayOfDoctorTurno(`${anio}-${mes}-${dia}`, sucursalId, medicoId, turno);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findCirugiasByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string) : Promise<CirugiaI[]> {
        console.log(new Date(), this.TAG, "findCirugiasByRangeDateAndSucursal");
        return this.cirugiaService.findCirugiasByRangeDateAndSucursal(`${anioi}-${mesi}-${diai}`, `${aniof}-${mesf}-${diaf}`, sucursalId);
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
