import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TipoEgresoService } from './tipo-egreso.service';
import { TipoEgresoI } from 'src/interfaces/tipo-egreso.interface';
import { TipoEgresoDto } from 'src/dto/tipo-egreso-dto';

@Controller('tipoegreso')
export class TipoEgresoController {

    TAG = "TipoEgresoController";

    constructor(private readonly tipoEgresoService: TipoEgresoService) {}

    @Get()
    showAllTipoEgresos() : Promise<TipoEgresoI[]> {
        console.log(new Date(), this.TAG, "showAllTipoEgresos");
        return this.tipoEgresoService.showAllTipoEgresos();
    }

    @Get(':id')
    findTipoEgresoById(@Param('id') idTipoEgreso: string): Promise<TipoEgresoI> {
        console.log(new Date(), this.TAG, "findTipoEgresoById");
        return this.tipoEgresoService.findTipoEgresoById(idTipoEgreso);
    }

    @Post()
    createTipoEgreso(@Body() tipoEgresoDto: TipoEgresoDto): Promise<TipoEgresoI> {
        console.log(new Date(), this.TAG, "createTipoEgreso");
        return this.tipoEgresoService.createTipoEgreso(tipoEgresoDto);
    }

    @Put(':id') 
    updateTipoEgreso(@Param('id') idTipoEgreso: string, @Body() tipoEgresoDto: TipoEgresoDto): Promise<TipoEgresoI> {
        console.log(new Date(), this.TAG, "updateTipoEgreso");
        return this.tipoEgresoService.updateTipoEgreso(idTipoEgreso, tipoEgresoDto);
    }

    @Delete(':id')
    deleteTipoEgreso(@Param('id') idTipoEgreso: string): Promise<TipoEgresoI> {
        console.log(new Date(), this.TAG, "deleteTipoEgreso");
        return this.tipoEgresoService.deleteTipoEgreso(idTipoEgreso);
    }

}
