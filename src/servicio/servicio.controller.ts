import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ServicioService } from './servicio.service';
import { ServicioI } from 'src/interfaces/servicio.interface';
import { ServicioDto } from 'src/dto/servicio-dto';

@Controller('servicio')
export class ServicioController {

    TAG = "ServicioController";

    constructor(private readonly service: ServicioService) {}

    @Get()
    showAllServices() : Promise<ServicioI[]> {
        console.log(this.TAG, "showAllServices");
        return this.service.showAllServices();
    }

    @Get(':id')
    findServiceById(@Param('id') idServicio: string): Promise<ServicioI> {
        console.log(this.TAG, "findServiceById");
        return this.service.findServiceById(idServicio);
    }

    @Post()
    createService(@Body() pacienteDto: ServicioDto): Promise<ServicioI> {
        console.log(this.TAG, "createService");
        return this.service.createService(pacienteDto);
    }

    @Put(':id') 
    updateService(@Param('id') idServicio: string, @Body() pacienteDto: ServicioDto): Promise<ServicioI> {
        console.log(this.TAG, "updateService");
        return this.service.updateService(idServicio, pacienteDto);
    }

    @Delete(':id')
    deleteService(@Param('id') idServicio: string): Promise<ServicioI> {
        console.log(this.TAG, "deleteService");
        return this.service.deleteService(idServicio);
    }

}
