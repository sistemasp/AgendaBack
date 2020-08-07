import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { FrecuenciaService } from './frecuencia.service';
import { FrecuenciaI } from 'src/interfaces/frecuencia.interface';
import { FrecuenciaDto } from 'src/dto/frecuencia-dto';

@Controller('frecuencia')
export class FrecuenciaController {

    TAG = "FrecuenciaController";

    constructor(private readonly frecuenciaService: FrecuenciaService) {}

    @Get()
    showAllFrecuencias() : Promise<FrecuenciaI[]> {
        console.log(new Date(), this.TAG, "showAllFrecuencias");
        return this.frecuenciaService.showAllFrecuencias();
    }

    @Get(':id')
    findFrecuenciaById(@Param('id') idFrecuencia: string): Promise<FrecuenciaI> {
        console.log(new Date(), this.TAG, "findFrecuenciaById");
        return this.frecuenciaService.findFrecuenciaById(idFrecuencia);
    }

    @Post()
    createFrecuencia(@Body() frecuenciaDto: FrecuenciaDto): Promise<FrecuenciaI> {
        console.log(new Date(), this.TAG, "createFrecuencia");
        return this.frecuenciaService.createFrecuencia(frecuenciaDto);
    }

    @Put(':id') 
    updateFrecuencia(@Param('id') idFrecuencia: string, @Body() frecuenciaDto: FrecuenciaDto): Promise<FrecuenciaI> {
        console.log(new Date(), this.TAG, "updateFrecuencia");
        return this.frecuenciaService.updateFrecuencia(idFrecuencia, frecuenciaDto);
    }

    @Delete(':id')
    deleteFrecuencia(@Param('id') idFrecuencia: string): Promise<FrecuenciaI> {
        console.log(new Date(), this.TAG, "deleteFrecuencia");
        return this.frecuenciaService.deleteFrecuencia(idFrecuencia);
    }

}
