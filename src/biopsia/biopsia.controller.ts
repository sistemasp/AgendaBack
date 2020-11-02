import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BiopsiaService } from './biosia.service';
import { BiopsiaI } from 'src/interfaces/biopsia.interface';
import { BiopsiaDto } from 'src/dto/biopsia-dto';

@Controller('biopsia')
export class BiopsiaController {

    TAG = "BiopsiaController";

    constructor(private readonly biopsiaService: BiopsiaService) {}

    @Get()
    showAllBiopsias() : Promise<BiopsiaI[]> {
        console.log(new Date(), this.TAG, "showAllBiopsias");
        return this.biopsiaService.showAllBiopsias();
    }

    @Get(':id')
    findBiopsiaById(@Param('id') idBiopsia: string): Promise<BiopsiaI> {
        console.log(new Date(), this.TAG, "findBiopsiaById");
        return this.biopsiaService.findBiopsiaById(idBiopsia);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findBiopsiasByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string) : Promise<BiopsiaI[]> {
        console.log(new Date(), this.TAG, "findBiopsiasByRangeDateAndSucursal");
        return this.biopsiaService.findBiopsiasByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }

    @Get('/historic/:pacienteId')
    findBiopsiasHistoricByPaciente(@Param('pacienteId') pacienteId: string): Promise<BiopsiaI[]> {
        console.log(new Date(), this.TAG, "findBiopsiasHistoricByPaciente");
        return this.biopsiaService.findBiopsiasHistoricByPaciente(pacienteId);
    }

    @Post()
    createBiopsia(@Body() biopsiasDto: BiopsiaDto[]): Promise<BiopsiaI[]> {
        console.log(new Date(), this.TAG, "createBiopsia");
        return this.biopsiaService.createBiopsia(biopsiasDto);
    }

    @Put(':id') 
    updateBiopsia(@Param('id') idBiopsia: string, @Body() biopsiaDto: BiopsiaDto): Promise<BiopsiaI> {
        console.log(new Date(), this.TAG, "updateBiopsia");
        return this.biopsiaService.updateBiopsia(idBiopsia, biopsiaDto);
    }

    @Delete(':id')
    deleteBiopsia(@Param('id') idBiopsia: string): Promise<BiopsiaI> {
        console.log(new Date(), this.TAG, "deleteBiopsia");
        return this.biopsiaService.deleteBiopsia(idBiopsia);
    }

}
