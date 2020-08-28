import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ConsecutivoService } from './consecutivo.service';
import { ConsecutivoI } from 'src/interfaces/consecutivo.interface';
import { ConsecutivoDto } from 'src/dto/consecutivo-dto';

@Controller('consecutivo')
export class ConsecutivoController {

    TAG = "ConsecutivoController";

    constructor(private readonly consecutivoService: ConsecutivoService) {}

    @Get()
    showAllConsecutivos() : Promise<ConsecutivoI[]> {
        console.log(new Date(), this.TAG, "showAllConsecutivos");
        return this.consecutivoService.showAllConsecutivos();
    }

    @Get(':id')
    findConsecutivoById(@Param('id') idConsecutivo: string): Promise<ConsecutivoI> {
        console.log(new Date(), this.TAG, "findConsecutivoById");
        return this.consecutivoService.findConsecutivoById(idConsecutivo);
    }

    @Post()
    createConsecutivo(@Body() consecutivoDto: ConsecutivoDto): Promise<ConsecutivoI> {
        console.log(new Date(), this.TAG, "createConsecutivo");
        return this.consecutivoService.createConsecutivo(consecutivoDto);
    }

    @Put(':id') 
    updateConsecutivo(@Param('id') idConsecutivo: string, @Body() consecutivoDto: ConsecutivoDto): Promise<ConsecutivoI> {
        console.log(new Date(), this.TAG, "updateConsecutivo");
        return this.consecutivoService.updateConsecutivo(idConsecutivo, consecutivoDto);
    }

    @Delete(':id')
    deleteConsecutivo(@Param('id') idConsecutivo: string): Promise<ConsecutivoI> {
        console.log(new Date(), this.TAG, "deleteConsecutivo");
        return this.consecutivoService.deleteConsecutivo(idConsecutivo);
    }

}
