import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CosmetologaService } from './cosmetologa.service';
import { CosmetologaI } from 'src/interfaces/cosmetologa.interface';
import { CosmetologaDto } from 'src/dto/cosmetologa-dto';

@Controller('cosmetologa')
export class CosmetologaController {

    TAG = "CosmetologaController";

    constructor(private readonly cosmetologaService: CosmetologaService) {}

    @Get()
    showAllCosmetics(): Promise<CosmetologaI[]> {
        console.log(this.TAG, "showAllCosmetics");
        return this.cosmetologaService.showAllCosmetics();
    }

    @Get(':id')
    findCosmeticById(@Param('id') idCosmetologa: string): Promise<CosmetologaI> {
        console.log(this.TAG, "findCosmeticById");
        return this.cosmetologaService.findCosmeticById(idCosmetologa);
    }

    @Post()
    createCosmetic(@Body() cosmetologaDto: CosmetologaDto): Promise<CosmetologaI> {
        console.log(this.TAG, "createCosmetic");
        return this.cosmetologaService.createCosmetic(cosmetologaDto);
    }

    @Put(':id') 
    updateCosmetic(@Param('id') idCosmetologa: string, @Body() cosmetologaDto: CosmetologaDto): Promise<CosmetologaI> {
        console.log(this.TAG, "updateCosmetic");
        return this.cosmetologaService.updateCosmetic(idCosmetologa, cosmetologaDto);
    }

    @Delete(':id')
    deleteCosmetic(@Param('id') idCosmetologa: string): Promise<CosmetologaI> {
        console.log(this.TAG, "deleteCosmetic");
        return this.cosmetologaService.deleteCosmetic(idCosmetologa);
    }

}
