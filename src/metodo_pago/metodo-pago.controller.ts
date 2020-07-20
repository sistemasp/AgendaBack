import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MetodoPagoService } from './metodo-pago.service';
import { MetodoPagoI } from 'src/interfaces/metodo-pago.interface';
import { MetodoPagoDto } from 'src/dto/metodo-pago-dto';

@Controller('metodopago')
export class MetodoPagoController {

    TAG = "MetodoPagoController";

    constructor(private readonly metodoPagoService: MetodoPagoService) {}

    @Get()
    showAllMetodoPagos() : Promise<MetodoPagoI[]> {
        console.log(new Date(), this.TAG, "showAllMetodoPagos");
        return this.metodoPagoService.showAllMetodoPagos();
    }

    @Get(':id')
    findMetodoPagoById(@Param('id') idMetodoPago: string): Promise<MetodoPagoI> {
        console.log(new Date(), this.TAG, "findMetodoPagoById");
        return this.metodoPagoService.findMetodoPagoById(idMetodoPago);
    }

    @Post()
    createMetodoPago(@Body() metodoPagoDto: MetodoPagoDto): Promise<MetodoPagoI> {
        console.log(new Date(), this.TAG, "createMetodoPago");
        return this.metodoPagoService.createMetodoPago(metodoPagoDto);
    }

    @Put(':id') 
    updateMetodoPago(@Param('id') idMetodoPago: string, @Body() metodoPagoDto: MetodoPagoDto): Promise<MetodoPagoI> {
        console.log(new Date(), this.TAG, "updateMetodoPago");
        return this.metodoPagoService.updateMetodoPago(idMetodoPago, metodoPagoDto);
    }

    @Delete(':id')
    deleteMetodoPago(@Param('id') idMetodoPago: string): Promise<MetodoPagoI> {
        console.log(new Date(), this.TAG, "deleteMetodoPago");
        return this.metodoPagoService.deleteMetodoPago(idMetodoPago);
    }

}
