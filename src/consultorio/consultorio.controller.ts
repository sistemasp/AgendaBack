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

    @Get('/sucursal/:sucursalId/libre')
    findSurgeryBySucursalIdAndFree(@Param('sucursalId') sucursalId: string): Promise<ConsultorioI[]> {
        console.log(this.TAG, "findSurgeryBySucursalIdAndFree");
        return this.consultorioService.findSurgeryBySucursalIdAndFree(sucursalId);
    }

    @Put('/liberar/medico/:consultorioId')
    breakFreeSurgeryByIdMedico(@Param('consultorioId') consultorioId: string): Promise<ConsultorioI[]> {
        console.log(this.TAG, "breakFreeSurgeryByIdMedico");
        return this.consultorioService.breakFreeSurgeryByIdMedico(consultorioId);
    }

    @Put('/liberar/paciente/:consultorioId')
    breakFreeSurgeryByIdPaciente(@Param('consultorioId') consultorioId: string): Promise<ConsultorioI[]> {
        console.log(this.TAG, "breakFreeSurgeryByIdPaciente");
        return this.consultorioService.breakFreeSurgeryByIdPaciente(consultorioId);
    }

    @Post()
    createSurgery(@Body() consultorioDto: ConsultorioDto): Promise<ConsultorioI> {
        console.log(this.TAG, "createSurgery");
        return this.consultorioService.createSurgery(consultorioDto);
    }

    @Put(':id') 
    updateSurgery(@Param('id') idConsultorio: string, @Body() consultorioDto: ConsultorioDto): Promise<ConsultorioI> {
        console.log(this.TAG, "updateSurgery");
        return this.consultorioService.updateSurgery(idConsultorio, consultorioDto);
    }

    @Delete(':id')
    deleteSurgery(@Param('id') idConsultorio: string): Promise<ConsultorioI> {
        console.log(this.TAG, "deleteSurgery");
        return this.consultorioService.deleteSurgery(idConsultorio);
    }

}
