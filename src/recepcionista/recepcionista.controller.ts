import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RecepcionistaService } from './recepcionista.service';
import { RecepcionistaI } from 'src/interfaces/recepcionista.interface';
import { RecepcionistaDto } from 'src/dto/recepcionista-dto';

@Controller('recepcionista')
export class RecepcionistaController {

    TAG = "RecepcionistaController";

    constructor(private readonly recepcionistaService: RecepcionistaService) {}

    @Get()
    showAllRecepcionists() : Promise<RecepcionistaI[]> {
        console.log(new Date(), this.TAG, "showAllRecepcionists");
        return this.recepcionistaService.showAllRecepcionists();
    }

    @Get(':id')
    findRecepcionistById(@Param('id') idRecepcionista: string): Promise<RecepcionistaI> {
        console.log(new Date(), this.TAG, "findRecepcionistById");
        return this.recepcionistaService.findRecepcionistById(idRecepcionista);
    }

    @Get('number/:employeeNumber')
    findRecepcionistByEmployeeNumber(@Param('employeeNumber') employeeNumber: string): Promise<RecepcionistaI> {
        console.log(new Date(), this.TAG, "findRecepcionistByEmployeeNumber");
        return this.recepcionistaService.findRecepcionistByEmployeeNumber(employeeNumber);
    }

    @Post()
    createRecepcionist(@Body() recepcionistaDto: RecepcionistaDto): Promise<RecepcionistaI> {
        console.log(new Date(), this.TAG, "createRecepcionist");
        return this.recepcionistaService.createRecepcionist(recepcionistaDto);
    }

    @Put(':id') 
    updateRecepcionist(@Param('id') idRecepcionista: string, @Body() recepcionistaDto: RecepcionistaDto): Promise<RecepcionistaI> {
        console.log(new Date(), this.TAG, "updateRecepcionist");
        return this.recepcionistaService.updateRecepcionist(idRecepcionista, recepcionistaDto);
    }

    @Delete(':id')
    deleteRecepcionist(@Param('id') idRecepcionista: string): Promise<RecepcionistaI> {
        console.log(new Date(), this.TAG, "deleteRecepcionist");
        return this.recepcionistaService.deleteRecepcionist(idRecepcionista);
    }

}
