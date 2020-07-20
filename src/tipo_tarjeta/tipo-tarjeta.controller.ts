import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TipoTarjetaService } from './tipo-tarjeta.service';
import { TipoTarjetaI } from 'src/interfaces/tipo-tarjeta.interface';
import { TipoTarjetaDto } from 'src/dto/tipo-tarjeta-dto';

@Controller('tipotarjeta')
export class TipoTarjetaController {

    TAG = "TipoTarjetaController";

    constructor(private readonly tipoTarjetaService: TipoTarjetaService) {}

    @Get()
    showAllTipoTarjetas() : Promise<TipoTarjetaI[]> {
        console.log(new Date(), this.TAG, "showAllTipoTarjetas");
        return this.tipoTarjetaService.showAllTipoTarjetas();
    }

    @Get(':id')
    findTipoTarjetaById(@Param('id') idTipoTarjeta: string): Promise<TipoTarjetaI> {
        console.log(new Date(), this.TAG, "findTipoTarjetaById");
        return this.tipoTarjetaService.findTipoTarjetaById(idTipoTarjeta);
    }

    @Post()
    createTipoTarjeta(@Body() rolDto: TipoTarjetaDto): Promise<TipoTarjetaI> {
        console.log(new Date(), this.TAG, "createTipoTarjeta");
        return this.tipoTarjetaService.createTipoTarjeta(rolDto);
    }

    @Put(':id') 
    updateTipoTarjeta(@Param('id') idTipoTarjeta: string, @Body() rolDto: TipoTarjetaDto): Promise<TipoTarjetaI> {
        console.log(new Date(), this.TAG, "updateTipoTarjeta");
        return this.tipoTarjetaService.updateTipoTarjeta(idTipoTarjeta, rolDto);
    }

    @Delete(':id')
    deleteTipoTarjeta(@Param('id') idTipoTarjeta: string): Promise<TipoTarjetaI> {
        console.log(new Date(), this.TAG, "deleteTipoTarjeta");
        return this.tipoTarjetaService.deleteTipoTarjeta(idTipoTarjeta);
    }

}
