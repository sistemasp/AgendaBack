import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ConsultorioService } from './consultorio.service';
import { ConsultorioI } from 'src/interfaces/consultorio.interface';
import { ConsultorioDto } from 'src/dto/consultorio-dto';

@Controller('consultorio')
export class ConsultorioController {

    TAG = "ConsultorioController";

    constructor(private readonly consultorioService: ConsultorioService) {}

    @Get()
    showAllSurgeries() : Promise<ConsultorioI[]> {
        console.log(this.TAG, "showAllSurgeries");
        return this.consultorioService.showAllSurgeries();
    }

    @Get(':id')
    findSurgeryById(@Param('id') idConsultorio: string): Promise<ConsultorioI> {
        console.log(this.TAG, "findSurgeryById");
        return this.consultorioService.findSurgeryById(idConsultorio);
    }

    @Get('/sucursal/:sucursalId')
    findSurgeryBySucursalId(@Param('sucursalId') sucursalId: string): Promise<ConsultorioI[]> {
        console.log(this.TAG, "findSurgeryBySucursalId");
        return this.consultorioService.findSurgeryBySucursalId(sucursalId);
    }

    @Post()
    createSurgery(@Body() pacienteDto: ConsultorioDto): Promise<ConsultorioI> {
        console.log(this.TAG, "createSurgery");
        return this.consultorioService.createSurgery(pacienteDto);
    }

    @Put(':id') 
    updateSurgery(@Param('id') idConsultorio: string, @Body() pacienteDto: ConsultorioDto): Promise<ConsultorioI> {
        console.log(this.TAG, "updateSurgery");
        return this.consultorioService.updateSurgery(idConsultorio, pacienteDto);
    }

    @Delete(':id')
    deleteSurgery(@Param('id') idConsultorio: string): Promise<ConsultorioI> {
        console.log(this.TAG, "deleteSurgery");
        return this.consultorioService.deleteSurgery(idConsultorio);
    }

}
