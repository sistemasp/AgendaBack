import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CabinaService } from './cabina.service';
import { CabinaI } from 'src/interfaces/cabina.interface';
import { CabinaDto } from 'src/dto/cabina-dto';

@Controller('cabina')
export class CabinaController {

    TAG = "CabinaController";

    constructor(private readonly cabinaService: CabinaService) {}

    @Get()
    showAllCabinas() : Promise<CabinaI[]> {
        console.log(new Date(), this.TAG, "showAllCabinas");
        return this.cabinaService.showAllCabinas();
    }

    @Get(':id')
    findCabinaById(@Param('id') idCabina: string): Promise<CabinaI> {
        console.log(new Date(), this.TAG, "findCabinaById");
        return this.cabinaService.findCabinaById(idCabina);
    }

    @Get('/sucursal/:sucursalId')
    findCabinaBySucursalId(@Param('sucursalId') sucursalId: string): Promise<CabinaI[]> {
        console.log(new Date(), this.TAG, "findCabinaBySucursalId");
        return this.cabinaService.findCabinaBySucursalId(sucursalId);
    }

    @Get('/waitinglist/sucursal/:sucursalId')
    findCabinaBySucursalIdWaitingList(@Param('sucursalId') sucursalId: string): Promise<CabinaI[]> {
        console.log(new Date(), this.TAG, "findCabinaBySucursalIdWaitingList");
        return this.cabinaService.findCabinaBySucursalIdWaitingList(sucursalId);
    }

    @Get('/sucursal/:sucursalId/libre')
    findCabinaBySucursalIdAndFree(@Param('sucursalId') sucursalId: string): Promise<CabinaI[]> {
        console.log(new Date(), this.TAG, "findCabinaBySucursalIdAndFree");
        return this.cabinaService.findCabinaBySucursalIdAndFree(sucursalId);
    }

    @Put('/liberar/medico/:cabinaId')
    breakFreeCabinaByIdMedico(@Param('cabinaId') cabinaId: string): Promise<CabinaI[]> {
        console.log(new Date(), this.TAG, "breakFreeCabinaByIdMedico");
        return this.cabinaService.breakFreeCabinaByIdMedico(cabinaId);
    }

    @Put('/liberar/paciente/:cabinaId')
    breakFreeCabinaByIdPaciente(@Param('cabinaId') cabinaId: string): Promise<CabinaI[]> {
        console.log(new Date(), this.TAG, "breakFreeCabinaByIdPaciente");
        return this.cabinaService.breakFreeCabinaByIdPaciente(cabinaId);
    }

    @Post()
    createCabina(@Body() cabinaDto: CabinaDto): Promise<CabinaI> {
        console.log(new Date(), this.TAG, "createCabina");
        return this.cabinaService.createCabina(cabinaDto);
    }

    @Put(':id') 
    updateCabina(@Param('id') idCabina: string, @Body() cabinaDto: CabinaDto): Promise<CabinaI> {
        console.log(new Date(), this.TAG, "updateCabina");
        return this.cabinaService.updateCabina(idCabina, cabinaDto);
    }

    @Delete(':id')
    deleteCabina(@Param('id') idCabina: string): Promise<CabinaI> {
        console.log(new Date(), this.TAG, "deleteCabina");
        return this.cabinaService.deleteCabina(idCabina);
    }

}
