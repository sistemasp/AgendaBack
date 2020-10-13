import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TipoIngresoService } from './tipo-ingreso.service';
import { TipoIngresoI } from 'src/interfaces/tipo-ingreso.interface';
import { TipoIngresoDto } from 'src/dto/tipo-ingreso-dto';

@Controller('tipoingreso')
export class TipoIngresoController {

    TAG = "TipoIngresoController";

    constructor(private readonly tipoIngresoService: TipoIngresoService) {}

    @Get()
    showAllTipoIngresos() : Promise<TipoIngresoI[]> {
        console.log(new Date(), this.TAG, "showAllTipoIngresos");
        return this.tipoIngresoService.showAllTipoIngresos();
    }

    @Get(':id')
    findTipoIngresoById(@Param('id') idTipoIngreso: string): Promise<TipoIngresoI> {
        console.log(new Date(), this.TAG, "findTipoIngresoById");
        return this.tipoIngresoService.findTipoIngresoById(idTipoIngreso);
    }

    @Post()
    createTipoIngreso(@Body() tipoIngresoDto: TipoIngresoDto): Promise<TipoIngresoI> {
        console.log(new Date(), this.TAG, "createTipoIngreso");
        return this.tipoIngresoService.createTipoIngreso(tipoIngresoDto);
    }

    @Put(':id') 
    updateTipoIngreso(@Param('id') idTipoIngreso: string, @Body() tipoIngresoDto: TipoIngresoDto): Promise<TipoIngresoI> {
        console.log(new Date(), this.TAG, "updateTipoIngreso");
        return this.tipoIngresoService.updateTipoIngreso(idTipoIngreso, tipoIngresoDto);
    }

    @Delete(':id')
    deleteTipoIngreso(@Param('id') idTipoIngreso: string): Promise<TipoIngresoI> {
        console.log(new Date(), this.TAG, "deleteTipoIngreso");
        return this.tipoIngresoService.deleteTipoIngreso(idTipoIngreso);
    }

}
