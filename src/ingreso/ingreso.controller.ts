import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { IngresoService } from './ingreso.service';
import { IngresoI } from 'src/interfaces/ingreso.interface';
import { IngresoDto } from 'src/dto/ingreso-dto';

@Controller('ingreso')
export class IngresoController {

    TAG = "IngresoController";

    constructor(private readonly ingresoService: IngresoService) {}

    @Get()
    showAllIngresos() : Promise<IngresoI[]> {
        console.log(new Date(), this.TAG, "showAllIngresos");
        return this.ingresoService.showAllIngresos();
    }

    @Get(':id')
    findIngresoById(@Param('id') idIngreso: string): Promise<IngresoI> {
        console.log(new Date(), this.TAG, "findIngresoById");
        return this.ingresoService.findIngresoById(idIngreso);
    }

    @Get('sucursal/:sucursalId/today/turno/:turno')
    showIngresosTodayBySucursalAndTurno(@Param('turno') turno: string, @Param('sucursalId') sucursalId: string) : Promise<IngresoI[]> {
        console.log(new Date(), this.TAG, "showIngresosTodayBySucursalAndTurno");
        return this.ingresoService.showIngresosTodayBySucursalAndTurno(sucursalId, turno);
    }

    @Post()
    createIngreso(@Body() ingresoDto: IngresoDto): Promise<IngresoI> {
        console.log(new Date(), this.TAG, "createIngreso");
        return this.ingresoService.createIngreso(ingresoDto);
    }

    @Put(':id') 
    updateIngreso(@Param('id') idIngreso: string, @Body() ingresoDto: IngresoDto): Promise<IngresoI> {
        console.log(new Date(), this.TAG, "updateIngreso");
        return this.ingresoService.updateIngreso(idIngreso, ingresoDto);
    }

    @Delete(':id')
    deleteIngreso(@Param('id') idIngreso: string): Promise<IngresoI> {
        console.log(new Date(), this.TAG, "deleteIngreso");
        return this.ingresoService.deleteIngreso(idIngreso);
    }

}
