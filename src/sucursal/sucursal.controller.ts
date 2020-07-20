import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SucursalI } from 'src/interfaces/sucursal.interface';
import { SucursalService } from './sucursal.service';
import { SucursalDto } from 'src/dto/sucursal-dto';

@Controller('sucursal')
export class SucursalController {

    TAG = "ServicioController";

    constructor(private readonly sucursalService: SucursalService) {}

    @Get()
    showAllOffices() : Promise<SucursalI[]> {
        console.log(new Date(), this.TAG, "showAllOffices");
        return this.sucursalService.showAllOffices();
    }

    @Get(':id')
    findOfficeById(@Param('id') idSucursal: string): Promise<SucursalI> {
        console.log(new Date(), this.TAG, "findOfficeById");
        return this.sucursalService.findOfficeById(idSucursal);
    }

    @Post()
    createOffice(@Body() sucursalDto: SucursalDto): Promise<SucursalI> {
        console.log(new Date(), this.TAG, "createOffice");
        return this.sucursalService.createOffice(sucursalDto);
    }

    @Put(':id') 
    updateOffice(@Param('id') idSucursal: string, @Body() sucursalDto: SucursalDto): Promise<SucursalI> {
        console.log(new Date(), this.TAG, "updateOffice");
        return this.sucursalService.updateOffice(idSucursal, sucursalDto);
    }

    @Delete(':id')
    deleteOffice(@Param('id') idSucursal: string): Promise<SucursalI> {
        console.log(new Date(), this.TAG, "deleteOffice");
        return this.sucursalService.deleteOffice(idSucursal);
    }

}
