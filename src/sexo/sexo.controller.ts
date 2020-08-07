import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SexoService } from './sexo.service';
import { SexoI } from 'src/interfaces/sexo.interface';
import { SexoDto } from 'src/dto/sexo-dto';

@Controller('sexo')
export class SexoController {

    TAG = "SexoController";

    constructor(private readonly sexoService: SexoService) {}

    @Get()
    showAllSexos() : Promise<SexoI[]> {
        console.log(new Date(), this.TAG, "showAllSexos");
        return this.sexoService.showAllSexos();
    }

    @Get(':id')
    findSexoById(@Param('id') idSexo: string): Promise<SexoI> {
        console.log(new Date(), this.TAG, "findSexoById");
        return this.sexoService.findSexoById(idSexo);
    }

    @Post()
    createSexo(@Body() sexoDto: SexoDto): Promise<SexoI> {
        console.log(new Date(), this.TAG, "createSexo");
        return this.sexoService.createSexo(sexoDto);
    }

    @Put(':id') 
    updateSexo(@Param('id') idSexo: string, @Body() sexoDto: SexoDto): Promise<SexoI> {
        console.log(new Date(), this.TAG, "updateSexo");
        return this.sexoService.updateSexo(idSexo, sexoDto);
    }

    @Delete(':id')
    deleteSexo(@Param('id') idSexo: string): Promise<SexoI> {
        console.log(new Date(), this.TAG, "deleteSexo");
        return this.sexoService.deleteSexo(idSexo);
    }

}
