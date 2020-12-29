import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EsquemaService } from './esquema.service';
import { EsquemaI } from 'src/interfaces/esquema.interface';
import { EsquemaDto } from 'src/dto/esquema-dto';

@Controller('esquema')
export class EsquemaController {

    TAG = "EsquemaController";

    constructor(private readonly esquemaService: EsquemaService) {}

    @Get()
    showAllEsquemas() : Promise<EsquemaI[]> {
        console.log(new Date(), this.TAG, "showAllEsquemas");
        return this.esquemaService.showAllEsquemas();
    }

    @Get(':id')
    findEsquemaById(@Param('id') idEsquema: string): Promise<EsquemaI> {
        console.log(new Date(), this.TAG, "findEsquemaById");
        return this.esquemaService.findEsquemaById(idEsquema);
    }

    @Post()
    createEsquema(@Body() esquemaDto: EsquemaDto): Promise<EsquemaI> {
        console.log(new Date(), this.TAG, "createEsquema");
        return this.esquemaService.createEsquema(esquemaDto);
    }

    @Put(':id') 
    updateEsquema(@Param('id') idEsquema: string, @Body() esquemaDto: EsquemaDto): Promise<EsquemaI> {
        console.log(new Date(), this.TAG, "updateEsquema");
        return this.esquemaService.updateEsquema(idEsquema, esquemaDto);
    }

    @Delete(':id')
    deleteEsquema(@Param('id') idEsquema: string): Promise<EsquemaI> {
        console.log(new Date(), this.TAG, "deleteEsquema");
        return this.esquemaService.deleteEsquema(idEsquema);
    }

}
