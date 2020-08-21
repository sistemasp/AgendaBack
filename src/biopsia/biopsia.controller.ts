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

    @Post()
    createBiopsia(@Body() biopsiaDto: BiopsiaDto): Promise<BiopsiaI> {
        console.log(new Date(), this.TAG, "createBiopsia");
        return this.biopsiaService.createBiopsia(biopsiaDto);
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
