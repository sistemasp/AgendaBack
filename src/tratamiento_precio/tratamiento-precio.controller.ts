import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TratamientoPrecioService } from './tratamiento-precio.service';
import { TratamientoPrecioI } from 'src/interfaces/tratamiento-precio.interface';
import { TratamientoPrecioDto } from 'src/dto/tratamiento-precio-dto';

@Controller('tratamientoprecio')
export class TratamientoPrecioController {

    TAG = "TratamientoPrecioController";

    constructor(private readonly tratamientoPrecioService: TratamientoPrecioService) {}

    @Get()
    showAllTreatmentPrices() : Promise<TratamientoPrecioI[]> {
        console.log(new Date(), this.TAG, "showAllTreatmentPrices");
        return this.tratamientoPrecioService.showAllTreatmentPrices();
    }

    @Get(':id')
    findTreatmentPriceById(@Param('id') idTratamientoPrecio: string): Promise<TratamientoPrecioI> {
        console.log(new Date(), this.TAG, "findTreatmentPriceById");
        return this.tratamientoPrecioService.findTreatmentPriceById(idTratamientoPrecio);
    }

    @Post()
    createTreatmentPrice(@Body() tratamientoPrecioDto: TratamientoPrecioDto): Promise<TratamientoPrecioI> {
        console.log(new Date(), this.TAG, "createTreatmentPrice");
        console.log(tratamientoPrecioDto);
        return this.tratamientoPrecioService.createTreatmentPrice(tratamientoPrecioDto);
    }

    @Put(':id') 
    updateTreatmentPrice(@Param('id') idTratamientoPrecio: string, @Body() tratamientoPrecioDto: TratamientoPrecioDto): Promise<TratamientoPrecioI> {
        console.log(new Date(), this.TAG, "updateTreatmentPrice");
        return this.tratamientoPrecioService.updateTreatmentPrice(idTratamientoPrecio, tratamientoPrecioDto);
    }

    @Delete(':id')
    deleteTreatmentPrice(@Param('id') idTratamientoPrecio: string): Promise<TratamientoPrecioI> {
        console.log(new Date(), this.TAG, "deleteTreatmentPrice");
        return this.tratamientoPrecioService.deleteTreatmentPrice(idTratamientoPrecio);
    }
    
}
