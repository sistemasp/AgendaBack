import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EgresoService } from './egreso.service';
import { EgresoI } from 'src/interfaces/egreso.interface';
import { EgresoDto } from 'src/dto/egreso-dto';

@Controller('egreso')
export class EgresoController {

    TAG = "EgresoController";

    constructor(private readonly egresoService: EgresoService) {}

    @Get()
    showAllEgresos() : Promise<EgresoI[]> {
        console.log(new Date(), this.TAG, "showAllEgresos");
        return this.egresoService.showAllEgresos();
    }

    @Get(':id')
    findEgresoById(@Param('id') idEgreso: string): Promise<EgresoI> {
        console.log(new Date(), this.TAG, "findEgresoById");
        return this.egresoService.findEgresoById(idEgreso);
    }

    @Get('sucursal/:sucursalId/today/turno/:turno')
    showEgresosTodayBySucursalAndTurno(@Param('turno') turno: string, @Param('sucursalId') sucursalId: string) : Promise<EgresoI[]> {
        console.log(new Date(), this.TAG, "showEgresosTodayBySucursalAndTurno");
        return this.egresoService.showEgresosTodayBySucursalAndTurno(sucursalId, turno);
    }

    @Get('sucursal/:sucursalId/apertura/:hora_apertura/cierre/:hora_cierre')
    showEgresosTodayBySucursalAndHoraAplicacion(@Param('sucursalId') sucursalId: string, @Param('hora_apertura') hora_apertura: string,
    @Param('hora_cierre') hora_cierre: string) : Promise<EgresoI[]> {
        console.log(new Date(), this.TAG, "showEgresosTodayBySucursalAndHoraAplicacion");
        return this.egresoService.showEgresosTodayBySucursalAndHoraAplicacion(sucursalId, hora_apertura, hora_cierre);
    }

    @Post()
    createEgreso(@Body() egresoDto: EgresoDto): Promise<EgresoI> {
        console.log(new Date(), this.TAG, "createEgreso");
        return this.egresoService.createEgreso(egresoDto);
    }

    @Put(':id') 
    updateEgreso(@Param('id') idEgreso: string, @Body() egresoDto: EgresoDto): Promise<EgresoI> {
        console.log(new Date(), this.TAG, "updateEgreso");
        return this.egresoService.updateEgreso(idEgreso, egresoDto);
    }

    @Delete(':id')
    deleteEgreso(@Param('id') idEgreso: string): Promise<EgresoI> {
        console.log(new Date(), this.TAG, "deleteEgreso");
        return this.egresoService.deleteEgreso(idEgreso);
    }

}
