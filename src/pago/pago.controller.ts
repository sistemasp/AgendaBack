import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PagoService } from './pago.service';
import { PagoI } from 'src/interfaces/pago.interface';
import { PagoDto } from 'src/dto/pago-dto';

@Controller('pago')
export class PagoController {

    TAG = "PagoController";

    constructor(private readonly pagoService: PagoService) {}

    @Get()
    showAllPagos() : Promise<PagoI[]> {
        console.log(new Date(), this.TAG, "showAllPagos");
        return this.pagoService.showAllPagos();
    }

    @Get(':id')
    findPagoById(@Param('id') idPago: string): Promise<PagoI> {
        console.log(new Date(), this.TAG, "findPagoById");
        return this.pagoService.findPagoById(idPago);
    }

    @Get('pagos/cita/:idCita')
    findPagosByCita(@Param('idCita') idCita: string): Promise<PagoI[]> {
        console.log(new Date(), this.TAG, "findPagosByCita");
        return this.pagoService.findPagosByCita(idCita);
    }

    @Get('pagos/tipo_servicio/:idTipoServicio/servicio/:idServicio')
    findPagosByTipoServicioAndServicio(@Param('idTipoServicio') idTipoServicio: string, @Param('idServicio') idServicio: string): Promise<PagoI[]> {
        console.log(new Date(), this.TAG, "findPagosByTipoServicioAndServicio");
        return this.pagoService.findPagosByTipoServicioAndServicio(idTipoServicio, idServicio);
    }    

    @Get('pagos/:pagosIds')
    findPagoByIds(@Param('pagosIds') pagosIds: string): Promise<PagoI[]> {
        console.log(new Date(), this.TAG, "findPagoByIds");
        console.log(new Date(), this.TAG, pagosIds);

        return this.pagoService.findPagoByIds(pagosIds);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findPaysByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string) : Promise<PagoI[]> {
        console.log(new Date(), this.TAG, "findConsultsByRangeDateAndSucursal");
        return this.pagoService.findPaysByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }

    @Post()
    createPago(@Body() pagoDto: PagoDto): Promise<PagoI> {
        console.log(new Date(), this.TAG, "createPago");
        return this.pagoService.createPago(pagoDto);
    }

    @Put(':id') 
    updatePago(@Param('id') idPago: string, @Body() pagoDto: PagoDto): Promise<PagoI> {
        console.log(new Date(), this.TAG, "updatePago");
        return this.pagoService.updatePago(idPago, pagoDto);
    }

    @Delete(':id')
    deletePago(@Param('id') idPago: string): Promise<PagoI> {
        console.log(new Date(), this.TAG, "deletePago");
        return this.pagoService.deletePago(idPago);
    }

}
