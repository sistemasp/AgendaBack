import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { DermatologoService } from './dermatologo.service';
import { DermatologoI } from 'src/interfaces/dermatologo.interface';
import { DermatologoDto } from 'src/dto/dermatologo-dto';

@Controller('dermatologo')
export class DermatologoController {

    TAG = "DermatologoController";

    constructor(private readonly dermatologoService: DermatologoService) {}

    @Get()
    showAllDermatologists() : Promise<DermatologoI[]> {
        console.log(new Date(), this.TAG, "showAllDermatologists");
        return this.dermatologoService.showAllDermatologists();
    }

    @Get(':id')
    findDermatologistById(@Param('id') idDermatologo: string): Promise<DermatologoI> {
        console.log(new Date(), this.TAG, "findDermatologistById");
        return this.dermatologoService.findDermatologistById(idDermatologo);
    }

    @Post()
    createDermatologist(@Body() dermatologoDto: DermatologoDto): Promise<DermatologoI> {
        console.log(new Date(), this.TAG, "createDermatologist");
        return this.dermatologoService.createDermatologist(dermatologoDto);
    }

    @Put(':id') 
    updateDermatologist(@Param('id') idDermatologo: string, @Body() dermatologoDto: DermatologoDto): Promise<DermatologoI> {
        console.log(new Date(), this.TAG, "updateDermatologist");
        return this.dermatologoService.updateDermatologist(idDermatologo, dermatologoDto);
    }

    @Delete(':id')
    deleteDermatologist(@Param('id') idDermatologo: string): Promise<DermatologoI> {
        console.log(new Date(), this.TAG, "deleteDermatologist");
        return this.dermatologoService.deleteDermatologist(idDermatologo);
    }

}
