import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TipoCitaService } from './tipo-cita.service';
import { TipoCitaI } from 'src/interfaces/tipo-cita.interface';
import { TipoCitaDto } from 'src/dto/tipo-cita-dto';

@Controller('tipocita')
export class TipoCitaController {

    TAG = "TipoCitaController";

    constructor(private readonly tipoCitaService: TipoCitaService) {}

    @Get()
    showAllTipoCitas() : Promise<TipoCitaI[]> {
        console.log(this.TAG, "showAllTipoCitas");
        return this.tipoCitaService.showAllTipoCitas();
    }

    @Get(':id')
    findTipoCitaById(@Param('id') idTipoCita: string): Promise<TipoCitaI> {
        console.log(this.TAG, "findTipoCitaById");
        return this.tipoCitaService.findTipoCitaById(idTipoCita);
    }

    @Post()
    createTipoCita(@Body() rolDto: TipoCitaDto): Promise<TipoCitaI> {
        console.log(this.TAG, "createTipoCita");
        return this.tipoCitaService.createTipoCita(rolDto);
    }

    @Put(':id') 
    updateTipoCita(@Param('id') idTipoCita: string, @Body() rolDto: TipoCitaDto): Promise<TipoCitaI> {
        console.log(this.TAG, "updateTipoCita");
        return this.tipoCitaService.updateTipoCita(idTipoCita, rolDto);
    }

    @Delete(':id')
    deleteTipoCita(@Param('id') idTipoCita: string): Promise<TipoCitaI> {
        console.log(this.TAG, "deleteTipoCita");
        return this.tipoCitaService.deleteTipoCita(idTipoCita);
    }

}
