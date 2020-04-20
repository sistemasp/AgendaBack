import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ServicioService } from './servicio.service';
import { ServicioI } from 'src/interfaces/servicio.interface';
import { ServicioDto } from 'src/dto/servicio-dto';

@Controller('servicio')
export class ServicioController {

    TAG = "ServicioController";

    constructor(private readonly pacienteService: ServicioService) {}

    @Get()
    showAllServices() : Promise<ServicioI[]> {
        console.log(this.TAG, "showAllServices");
        return this.pacienteService.showAllServices();
    }

    @Get(':id')
    findServiceById(@Param('id') idServicio: string): Promise<ServicioI> {
        console.log(this.TAG, "findServiceById");
        return this.pacienteService.findServiceById(idServicio);
    }

    @Post()
    createService(@Body() pacienteDto: ServicioDto): Promise<ServicioI> {
        console.log(this.TAG, "createService");
        return this.pacienteService.createService(pacienteDto);
    }

    @Put(':id') 
    updateService(@Param('id') idServicio: string, @Body() pacienteDto: ServicioDto): Promise<ServicioI> {
        console.log(this.TAG, "updateService");
        return this.pacienteService.updateService(idServicio, pacienteDto);
    }

    @Delete(':id')
    deleteService(@Param('id') idServicio: string): Promise<ServicioI> {
        console.log(this.TAG, "deleteService");
        return this.pacienteService.deleteService(idServicio);
    }

}
