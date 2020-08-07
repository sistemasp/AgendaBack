import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AcidoService } from './acido.service';
import { AcidoI } from 'src/interfaces/acido.interface';
import { AcidoDto } from 'src/dto/acido-dto';

@Controller('acido')
export class AcidoController {

    TAG = "AcidoController";

    constructor(private readonly acidoService: AcidoService) {}

    @Get()
    showAllAcidos() : Promise<AcidoI[]> {
        console.log(new Date(), this.TAG, "showAllAcidos");
        return this.acidoService.showAllAcidos();
    }

    @Get(':id')
    findAcidoById(@Param('id') idAcido: string): Promise<AcidoI> {
        console.log(new Date(), this.TAG, "findAcidoById");
        return this.acidoService.findAcidoById(idAcido);
    }

    @Post()
    createAcido(@Body() acidoDto: AcidoDto): Promise<AcidoI> {
        console.log(new Date(), this.TAG, "createAcido");
        return this.acidoService.createAcido(acidoDto);
    }

    @Put(':id') 
    updateAcido(@Param('id') idAcido: string, @Body() acidoDto: AcidoDto): Promise<AcidoI> {
        console.log(new Date(), this.TAG, "updateAcido");
        return this.acidoService.updateAcido(idAcido, acidoDto);
    }

    @Delete(':id')
    deleteAcido(@Param('id') idAcido: string): Promise<AcidoI> {
        console.log(new Date(), this.TAG, "deleteAcido");
        return this.acidoService.deleteAcido(idAcido);
    }

}
