import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SalaCirugiaService } from './sala-cirugia.service';
import { SalaCirugiaI } from 'src/interfaces/sala-cirugia.interface';
import { SalaCirugiaDto } from 'src/dto/sala-cirugia-dto';

@Controller('salacirugia')
export class SalaCirugiaController {

    TAG = "SalaCirugiaController";

    constructor(private readonly salaCirugiaService: SalaCirugiaService) {}

    @Get()
    showAllSalaCirugias() : Promise<SalaCirugiaI[]> {
        console.log(new Date(), this.TAG, "showAllSalaCirugias");
        return this.salaCirugiaService.showAllSalaCirugias();
    }

    @Get(':id')
    findSalaCirugiaById(@Param('id') idSalaCirugia: string): Promise<SalaCirugiaI> {
        console.log(new Date(), this.TAG, "findSalaCirugiaById");
        return this.salaCirugiaService.findSalaCirugiaById(idSalaCirugia);
    }

    @Get('/sucursal/:sucursalId')
    findSalaCirugiaBySucursalId(@Param('sucursalId') sucursalId: string): Promise<SalaCirugiaI[]> {
        console.log(new Date(), this.TAG, "findSalaCirugiaBySucursalId");
        return this.salaCirugiaService.findSalaCirugiaBySucursalId(sucursalId);
    }

    @Get('/waitinglist/sucursal/:sucursalId')
    findSalaCirugiaBySucursalIdWaitingList(@Param('sucursalId') sucursalId: string): Promise<SalaCirugiaI[]> {
        console.log(new Date(), this.TAG, "findSalaCirugiaBySucursalIdWaitingList");
        return this.salaCirugiaService.findSalaCirugiaBySucursalIdWaitingList(sucursalId);
    }

    @Get('/sucursal/:sucursalId/libre')
    findSalaCirugiaBySucursalIdAndFree(@Param('sucursalId') sucursalId: string): Promise<SalaCirugiaI[]> {
        console.log(new Date(), this.TAG, "findSalaCirugiaBySucursalIdAndFree");
        return this.salaCirugiaService.findSalaCirugiaBySucursalIdAndFree(sucursalId);
    }

    @Put('/liberar/dermatologo/:salaCirugiaId')
    breakFreeSalaCirugiaByIdDermatologo(@Param('salaCirugiaId') salaCirugiaId: string): Promise<SalaCirugiaI[]> {
        console.log(new Date(), this.TAG, "breakFreeSalaCirugiaByIdDermatologo");
        return this.salaCirugiaService.breakFreeSalaCirugiaByIdDermatologo(salaCirugiaId);
    }

    @Put('/liberar/paciente/:salaCirugiaId')
    breakFreeSalaCirugiaByIdPaciente(@Param('salaCirugiaId') salaCirugiaId: string): Promise<SalaCirugiaI[]> {
        console.log(new Date(), this.TAG, "breakFreeSalaCirugiaByIdPaciente");
        return this.salaCirugiaService.breakFreeSalaCirugiaByIdPaciente(salaCirugiaId);
    }

    @Post()
    createSalaCirugia(@Body() salaCirugiaDto: SalaCirugiaDto): Promise<SalaCirugiaI> {
        console.log(new Date(), this.TAG, "createSalaCirugia");
        return this.salaCirugiaService.createSalaCirugia(salaCirugiaDto);
    }

    @Put(':id') 
    updateSalaCirugia(@Param('id') idSalaCirugia: string, @Body() salaCirugiaDto: SalaCirugiaDto): Promise<SalaCirugiaI> {
        console.log(new Date(), this.TAG, "updateSalaCirugia");
        return this.salaCirugiaService.updateSalaCirugia(idSalaCirugia, salaCirugiaDto);
    }

    @Delete(':id')
    deleteSalaCirugia(@Param('id') idSalaCirugia: string): Promise<SalaCirugiaI> {
        console.log(new Date(), this.TAG, "deleteSalaCirugia");
        return this.salaCirugiaService.deleteSalaCirugia(idSalaCirugia);
    }

}
