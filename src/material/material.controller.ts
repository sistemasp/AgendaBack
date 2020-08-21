import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MaterialService } from './material.service';
import { MaterialI } from 'src/interfaces/material.interface';
import { MaterialDto } from 'src/dto/material-dto';

@Controller('material')
export class MaterialController {

    TAG = "MaterialController";

    constructor(private readonly materialService: MaterialService) {}

    @Get()
    showAllMaterials() : Promise<MaterialI[]> {
        console.log(new Date(), this.TAG, "showAllMaterials");
        return this.materialService.showAllMaterials();
    }

    @Get(':id')
    findMaterialById(@Param('id') idMaterial: string): Promise<MaterialI> {
        console.log(new Date(), this.TAG, "findMaterialById");
        return this.materialService.findMaterialById(idMaterial);
    }

    @Post()
    createMaterial(@Body() materialDto: MaterialDto): Promise<MaterialI> {
        console.log(new Date(), this.TAG, "createMaterial");
        return this.materialService.createMaterial(materialDto);
    }

    @Put(':id') 
    updateMaterial(@Param('id') idMaterial: string, @Body() materialDto: MaterialDto): Promise<MaterialI> {
        console.log(new Date(), this.TAG, "updateMaterial");
        return this.materialService.updateMaterial(idMaterial, materialDto);
    }

    @Delete(':id')
    deleteMaterial(@Param('id') idMaterial: string): Promise<MaterialI> {
        console.log(new Date(), this.TAG, "deleteMaterial");
        return this.materialService.deleteMaterial(idMaterial);
    }

}
