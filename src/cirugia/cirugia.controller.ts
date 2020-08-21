import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CirugiaService } from './cirugia.service';
import { CirugiaI } from 'src/interfaces/cirugia.interface';
import { CirugiaDto } from 'src/dto/cirugia-dto';

@Controller('cirugia')
export class CirugiaController {

    TAG = "CirugiaController";

    constructor(private readonly cirugiaService: CirugiaService) {}

    @Get()
    showAllCirugias() : Promise<CirugiaI[]> {
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
