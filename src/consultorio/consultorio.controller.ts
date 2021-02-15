import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ConsultorioService } from './consultorio.service';
import { ConsultorioI } from 'src/interfaces/consultorio.interface';
import { ConsultorioDto } from 'src/dto/consultorio-dto';

@Controller('consultorio')
export class ConsultorioController {

    TAG = "ConsultorioController";

    constructor(private readonly consultorioService: ConsultorioService) { }

    @Get()
    showAllSurgeries(): Promise<ConsultorioI[]> {
        console.log(new Date(), this.TAG, "showAllSurgeries");
        return this.consultorioService.showAllSurgeries();
    }

    @Get(':id')
    findSurgeryById(@Param('id') idConsultorio: string): Promise<ConsultorioI> {
        console.log(new Date(), this.TAG, "findSurgeryById");
        return this.consultorioService.findSurgeryById(idConsultorio);
    }

    @Get('/sucursal/:sucursalId')
    findSurgeryBySucursalId(@Param('sucursalId') sucursalId: string): Promise<ConsultorioI[]> {
        console.log(new Date(), this.TAG, "findSurgeryBySucursalId");
        return this.consultorioService.findSurgeryBySucursalId(sucursalId);
    }

    @Get('/sucursal/:sucursalId/dermatologo/:dermatologoId')
    findSurgeryBySucursalAndDermatologoId(@Param('sucursalId') sucursalId: string, 
        @Param('dermatologoId') dermatologoId: string): Promise<ConsultorioI[]> {
        console.log(new Date(), this.TAG, "findSurgeryBySucursalAndDermatologoId");
        return this.consultorioService.findSurgeryBySucursalAndDermatologoId(sucursalId, dermatologoId);
    }

    @Get('/waitinglist/sucursal/:sucursalId')
    findSurgeryBySucursalIdWaitingList(@Param('sucursalId') sucursalId: string): Promise<ConsultorioI[]> {
        console.log(new Date(), this.TAG, "findSurgeryBySucursalIdWaitingList");
        return this.consultorioService.findSurgeryBySucursalIdWaitingList(sucursalId);
    }

    @Get('/sucursal/:sucursalId/libre')
    findSurgeryBySucursalIdAndFree(@Param('sucursalId') sucursalId: string): Promise<ConsultorioI[]> {
        console.log(new Date(), this.TAG, "findSurgeryBySucursalIdAndFree");
        return this.consultorioService.findSurgeryBySucursalIdAndFree(sucursalId);
    }

    @Put('/liberar/dermatologo/:consultorioId')
    breakFreeSurgeryByIdDermatologo(@Param('consultorioId') consultorioId: string): Promise<ConsultorioI[]> {
        console.log(new Date(), this.TAG, "breakFreeSurgeryByIdDermatologo");
        return this.consultorioService.breakFreeSurgeryByIdDermatologo(consultorioId);
    }

    @Put('/liberar/paciente/:consultorioId')
    breakFreeSurgeryByIdPaciente(@Param('consultorioId') consultorioId: string): Promise<ConsultorioI[]> {
        console.log(new Date(), this.TAG, "breakFreeSurgeryByIdPaciente");
        return this.consultorioService.breakFreeSurgeryByIdPaciente(consultorioId);
    }

    @Post()
    createSurgery(@Body() consultorioDto: ConsultorioDto): Promise<ConsultorioI> {
        console.log(new Date(), this.TAG, "createSurgery");
        return this.consultorioService.createSurgery(consultorioDto);
    }

    @Put(':id')
    updateSurgery(@Param('id') idConsultorio: string, @Body() consultorioDto: ConsultorioDto): Promise<ConsultorioI> {
        console.log(new Date(), this.TAG, "updateSurgery");
        return this.consultorioService.updateSurgery(idConsultorio, consultorioDto);
    }

    @Delete(':id')
    deleteSurgery(@Param('id') idConsultorio: string): Promise<ConsultorioI> {
        console.log(new Date(), this.TAG, "deleteSurgery");
        return this.consultorioService.deleteSurgery(idConsultorio);
    }

}
