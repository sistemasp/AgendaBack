import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaI } from 'src/interfaces/area.interface';
import { AreaDto } from 'src/dto/area-dto';

@Controller('area')
export class AreaController {

    TAG = "AreaController";

    constructor(private readonly areaService: AreaService) {}

    @Get()
    showAllAreas() : Promise<AreaI[]> {
        console.log(new Date(), this.TAG, "showAllAreas");
        return this.areaService.showAllAreas();
    }

    @Get(':id')
    findAreaById(@Param('id') idArea: string): Promise<AreaI> {
        console.log(new Date(), this.TAG, "findAreaById");
        return this.areaService.findAreaById(idArea);
    }

    @Get('servicio/:servicioId/tratamiento/:tratamientoId')
    findAreasByTreatmentServicio(@Param('servicioId') servicioId: string, @Param('tratamientoId') tratamientoId: string): Promise<AreaI[]> {
        console.log(new Date(), this.TAG, "findAreasByTreatmentServicio");
        return this.areaService.findAreasByTreatmentServicio(servicioId, tratamientoId);
    }

    @Post()
    createArea(@Body() areaDto: AreaDto): Promise<AreaI> {
        console.log(new Date(), this.TAG, "createArea");
        return this.areaService.createArea(areaDto);
    }

    @Put(':id') 
    updateArea(@Param('id') idArea: string, @Body() areaDto: AreaDto): Promise<AreaI> {
        console.log(new Date(), this.TAG, "updateArea");
        return this.areaService.updateArea(idArea, areaDto);
    }

    @Delete(':id')
    deleteArea(@Param('id') idArea: string): Promise<AreaI> {
        console.log(new Date(), this.TAG, "deleteArea");
        return this.areaService.deleteArea(idArea);
    }

}
