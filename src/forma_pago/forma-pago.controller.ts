import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { FormaPagoService } from './forma-pago.service';
import { FormaPagoI } from 'src/interfaces/forma-pago.interface';
import { FormaPagoDto } from 'src/dto/forma-pago-dto';

@Controller('formapago')
export class FormaPagoController {

    TAG = "FormaPagoController";

    constructor(private readonly formaPagoService: FormaPagoService) {}

    @Get()
    showAllFormaPagos() : Promise<FormaPagoI[]> {
        console.log(new Date(), this.TAG, "showAllFormaPagos");
        return this.formaPagoService.showAllFormaPagos();
    }

    @Get(':id')
    findFormaPagoById(@Param('id') idFormaPago: string): Promise<FormaPagoI> {
        console.log(new Date(), this.TAG, "findFormaPagoById");
        return this.formaPagoService.findFormaPagoById(idFormaPago);
    }

    @Post()
    createFormaPago(@Body() formaPagoDto: FormaPagoDto): Promise<FormaPagoI> {
        console.log(new Date(), this.TAG, "createFormaPago");
        return this.formaPagoService.createFormaPago(formaPagoDto);
    }

    @Put(':id') 
    updateFormaPago(@Param('id') idFormaPago: string, @Body() formaPagoDto: FormaPagoDto): Promise<FormaPagoI> {
        console.log(new Date(), this.TAG, "updateFormaPago");
        return this.formaPagoService.updateFormaPago(idFormaPago, formaPagoDto);
    }

    @Delete(':id')
    deleteFormaPago(@Param('id') idFormaPago: string): Promise<FormaPagoI> {
        console.log(new Date(), this.TAG, "deleteFormaPago");
        return this.formaPagoService.deleteFormaPago(idFormaPago);
    }

}
