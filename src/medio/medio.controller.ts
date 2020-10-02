import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MedioService } from './medio.service';
import { MedioI } from 'src/interfaces/medio.interface';
import { MedioDto } from 'src/dto/medio-dto';

@Controller('medio')
export class MedioController {

    TAG = "MedioController";

    constructor(private readonly medioService: MedioService) {}

    @Get()
    showAllMedios() : Promise<MedioI[]> {
        console.log(new Date(), this.TAG, "showAllMedios");
        return this.medioService.showAllMedios();
    }

    @Get(':id')
    findMedioById(@Param('id') idMedio: string): Promise<MedioI> {
        console.log(new Date(), this.TAG, "findMedioById");
        return this.medioService.findMedioById(idMedio);
    }

    @Post()
    createMedio(@Body() medioDto: MedioDto): Promise<MedioI> {
        console.log(new Date(), this.TAG, "createMedio");
        return this.medioService.createMedio(medioDto);
    }

    @Put(':id') 
    updateMedio(@Param('id') idMedio: string, @Body() medioDto: MedioDto): Promise<MedioI> {
        console.log(new Date(), this.TAG, "updateMedio");
        return this.medioService.updateMedio(idMedio, medioDto);
    }

    @Delete(':id')
    deleteMedio(@Param('id') idMedio: string): Promise<MedioI> {
        console.log(new Date(), this.TAG, "deleteMedio");
        return this.medioService.deleteMedio(idMedio);
    }

}
