import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CorteService } from './corte.service';
import { CorteI } from 'src/interfaces/corte.interface';
import { CorteDto } from 'src/dto/corte-dto';

@Controller('corte')
export class CorteController {

    TAG = "CorteController";

    constructor(private readonly corteService: CorteService) { }

    @Get()
    showAllCortes(): Promise<CorteI[]> {
        console.log(new Date(), this.TAG, "showAllCortes");
        return this.corteService.showAllCortes();
    }

    @Get(':id')
    findCorteById(@Param('id') idCorte: string): Promise<CorteI> {
        console.log(new Date(), this.TAG, "findCorteById");
        return this.corteService.findCorteById(idCorte);
    }

    @Get('sucursal/:sucursalId/today/turno/:turno')
    showCorteTodayBySucursalAndTurno(@Param('turno') turno: string, @Param('sucursalId') sucursalId: string): Promise<CorteI> {
        console.log(new Date(), this.TAG, "showCorteTodayBySucursalAndTurno");
        return this.corteService.showCorteTodayBySucursalAndTurno(sucursalId, turno);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findCortesByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string) : Promise<CorteI[]> {
        console.log(new Date(), this.TAG, "findCortesByRangeDateAndSucursal");
        return this.corteService.findCortesByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }

    @Post()
    createCorte(@Body() corteDto: CorteDto): Promise<CorteI> {
        console.log(new Date(), this.TAG, "createCorte");
        return this.corteService.createCorte(corteDto);
    }

    @Put(':id')
    updateCorte(@Param('id') idCorte: string, @Body() corteDto: CorteDto): Promise<CorteI> {
        console.log(new Date(), this.TAG, "updateCorte");
        return this.corteService.updateCorte(idCorte, corteDto);
    }

    @Delete(':id')
    deleteCorte(@Param('id') idCorte: string): Promise<CorteI> {
        console.log(new Date(), this.TAG, "deleteCorte");
        return this.corteService.deleteCorte(idCorte);
    }

}
