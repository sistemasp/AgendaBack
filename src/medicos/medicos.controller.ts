import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MedicosService } from './medicos.service';
import { ConsultaI } from 'src/interfaces/consulta.interface';
import { ConsultaDto } from 'src/dto/consulta-dto';

@Controller('medicos')
export class MedicosController {

    TAG = "MedicosController";

    constructor(private readonly consultaService: MedicosService) {}

    @Get('/historico/:medicoId')
    findHistoricByMedicId(@Param('medicoId') medicoId: string): Promise<ConsultaI[]> {
        console.log(new Date(), this.TAG, "findHistoricByMedicId");
        return this.consultaService.findHistoricByMedicId(medicoId);
    }

}
