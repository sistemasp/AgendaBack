import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PaqueteService } from './paquete.service';
import { PaqueteI } from 'src/interfaces/paquete.interface';
import { PaqueteDto } from 'src/dto/paquete-dto';

@Controller('paquete')
export class PaqueteController {

    TAG = "PaqueteController";

    constructor(private readonly paqueteService: PaqueteService) {}

    @Get()
    showAllPacks() : Promise<PaqueteI[]> {
        console.log(new Date(), this.TAG, "showAllPacks");
        return this.paqueteService.showAllPacks();
    }

    @Get(':id')
    findPackById(@Param('id') idPaquete: string): Promise<PaqueteI> {
        console.log(new Date(), this.TAG, "findPackById");
        return this.paqueteService.findPackById(idPaquete);
    }

    @Post()
    createPack(@Body() paqueteDto: PaqueteDto): Promise<PaqueteI> {
        console.log(new Date(), this.TAG, "createPack");
        return this.paqueteService.createPack(paqueteDto);
    }

    @Put(':id') 
    updatePack(@Param('id') idPaquete: string, @Body() paqueteDto: PaqueteDto): Promise<PaqueteI> {
        console.log(new Date(), this.TAG, "updatePack");
        return this.paqueteService.updatePack(idPaquete, paqueteDto);
    }

    @Delete(':id')
    deletePack(@Param('id') idPaquete: string): Promise<PaqueteI> {
        console.log(new Date(), this.TAG, "deletePack");
        return this.paqueteService.deletePack(idPaquete);
    }

}
