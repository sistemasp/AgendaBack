import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TipoEsteticaService } from './tipo-estetica.service';
import { TipoEsteticaI } from 'src/interfaces/tipo-estetica.interface';
import { TipoEsteticaDto } from 'src/dto/tipo-estetica-dto';

@Controller('tipoestetica')
export class TipoEsteticaController {

    TAG = "TipoEsteticaController";

    constructor(private readonly tipoEsteticaService: TipoEsteticaService) {}

    @Get()
    showAllTipoEsteticas() : Promise<TipoEsteticaI[]> {
        console.log(new Date(), this.TAG, "showAllTipoEsteticas");
        return this.tipoEsteticaService.showAllTipoEsteticas();
    }

    @Get(':id')
    findTipoEsteticaById(@Param('id') idTipoEstetica: string): Promise<TipoEsteticaI> {
        console.log(new Date(), this.TAG, "findTipoEsteticaById");
        return this.tipoEsteticaService.findTipoEsteticaById(idTipoEstetica);
    }

    @Post()
    createTipoEstetica(@Body() rolDto: TipoEsteticaDto): Promise<TipoEsteticaI> {
        console.log(new Date(), this.TAG, "createTipoEstetica");
        return this.tipoEsteticaService.createTipoEstetica(rolDto);
    }

    @Put(':id') 
    updateTipoEstetica(@Param('id') idTipoEstetica: string, @Body() rolDto: TipoEsteticaDto): Promise<TipoEsteticaI> {
        console.log(new Date(), this.TAG, "updateTipoEstetica");
        return this.tipoEsteticaService.updateTipoEstetica(idTipoEstetica, rolDto);
    }

    @Delete(':id')
    deleteTipoEstetica(@Param('id') idTipoEstetica: string): Promise<TipoEsteticaI> {
        console.log(new Date(), this.TAG, "deleteTipoEstetica");
        return this.tipoEsteticaService.deleteTipoEstetica(idTipoEstetica);
    }

}
