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

    @Get('pago/:pagoId')
    findIngresoByPago(@Param('pagoId') pagoId: string): Promise<IngresoI> {
        console.log(new Date(), this.TAG, "findIngresoByPago");
        return this.ingresoService.findIngresoByPago(pagoId);
    }

    @Get('sucursal/:sucursalId/today/turno/:turno')
    showIngresosTodayBySucursalAndTurno(@Param('turno') turno: string, @Param('sucursalId') sucursalId: string) : Promise<IngresoI[]> {
        console.log(new Date(), this.TAG, "showIngresosTodayBySucursalAndTurno");
        return this.ingresoService.showIngresosTodayBySucursalAndTurno(sucursalId, turno);
    }

    @Get('sucursal/:sucursalId/apertura/:hora_apertura/cierre/:hora_cierre')
    showIngresosTodayBySucursalAndHoraAplicacion(@Param('sucursalId') sucursalId: string, @Param('hora_apertura') hora_apertura: string,
    @Param('hora_cierre') hora_cierre: string) : Promise<IngresoI[]> {
        console.log(new Date(), this.TAG, "showIngresosTodayBySucursalAndHoraAplicacion");
        return this.ingresoService.showIngresosTodayBySucursalAndHoraAplicacion(sucursalId, hora_apertura, hora_cierre);
    }

    @Get('sucursal/:sucursalId/apertura/:hora_apertura/cierre/:hora_cierre/pa')
    showIngresosTodayBySucursalAndHoraAplicacionPA(@Param('sucursalId') sucursalId: string, @Param('hora_apertura') hora_apertura: string,
    @Param('hora_cierre') hora_cierre: string) : Promise<IngresoI[]> {
        console.log(new Date(), this.TAG, "showIngresosTodayBySucursalAndHoraAplicacionPA");
        return this.ingresoService.showIngresosTodayBySucursalAndHoraAplicacionPA(sucursalId, hora_apertura, hora_cierre);
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
