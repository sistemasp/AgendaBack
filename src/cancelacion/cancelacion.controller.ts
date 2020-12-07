import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CancelacionService } from './cancelacion.service';
import { CancelacionI } from 'src/interfaces/cancelacion.interface';
import { CancelacionDto } from 'src/dto/cancelacion-dto';

@Controller('cancelacion')
export class CancelacionController {

    TAG = "CancelacionController";

    constructor(private readonly cancelacionService: CancelacionService) {}

    @Get()
    showAllCancelacions() : Promise<CancelacionI[]> {
        console.log(new Date(), this.TAG, "showAllCancelacions");
        return this.cancelacionService.showAllCancelacions();
    }

    @Get(':id')
    findCancelacionById(@Param('id') idCancelacion: string): Promise<CancelacionI> {
        console.log(new Date(), this.TAG, "findCancelacionById");
        return this.cancelacionService.findCancelacionById(idCancelacion);
    }

    @Post()
    createCancelacion(@Body() cancelacionDto: CancelacionDto): Promise<CancelacionI> {
        console.log(new Date(), this.TAG, "createCancelacion");
        return this.cancelacionService.createCancelacion(cancelacionDto);
    }

    @Put(':id') 
    updateCancelacion(@Param('id') idCancelacion: string, @Body() cancelacionDto: CancelacionDto): Promise<CancelacionI> {
        console.log(new Date(), this.TAG, "updateCancelacion");
        return this.cancelacionService.updateCancelacion(idCancelacion, cancelacionDto);
    }

    @Delete(':id')
    deleteCancelacion(@Param('id') idCancelacion: string): Promise<CancelacionI> {
        console.log(new Date(), this.TAG, "deleteCancelacion");
        return this.cancelacionService.deleteCancelacion(idCancelacion);
    }

}
