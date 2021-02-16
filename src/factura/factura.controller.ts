import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { FacturaService } from './factura.service';
import { FacturaI } from 'src/interfaces/factura.interface';
import { FacturaDto } from 'src/dto/factura-dto';

@Controller('factura')
export class FacturaController {

    TAG = "FacturaController";

    constructor(private readonly facturaService: FacturaService) {}

    @Get()
    showAllFacturas() : Promise<FacturaI[]> {
        console.log(new Date(), this.TAG, "showAllFacturas");
        return this.facturaService.showAllFacturas();
    }

    @Get(':id')
    findFacturaById(@Param('id') idFactura: string): Promise<FacturaI> {
        console.log(new Date(), this.TAG, "findFacturaById");
        return this.facturaService.findFacturaById(idFactura);
    }

    @Get('fecha_inicio/:diai/:mesi/:anioi/fecha_fin/:diaf/:mesf/:aniof/sucursal/:sucursalId')
    findFacturasByRangeDateAndSucursal(@Param('diai') diai: string, @Param('mesi') mesi: string, @Param('anioi') anioi: string,
        @Param('diaf') diaf: string, @Param('mesf') mesf: string, @Param('aniof') aniof: string,
        @Param('sucursalId') sucursalId: string) : Promise<FacturaI[]> {
        console.log(new Date(), this.TAG, "findDatesByRangeDateAndSucursal");
        return this.facturaService.findFacturasByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId);
    }

    @Get('razonsocial/:razonSocialId')
    findFacturaByRazonSocialId(@Param('razonSocialId') razonSocialId: string): Promise<FacturaI[]> {
        console.log(new Date(), this.TAG, "findFacturaByRazonSocialId");
        return this.facturaService.findFacturaByRazonSocialId(razonSocialId);
    }

    @Post()
    createFactura(@Body() facturaDto: FacturaDto): Promise<FacturaI> {
        console.log(new Date(), this.TAG, "createFactura");
        return this.facturaService.createFactura(facturaDto);
    }

    @Put(':id') 
    updateFactura(@Param('id') idFactura: string, @Body() facturaDto: FacturaDto): Promise<FacturaI> {
        console.log(new Date(), this.TAG, "updateFactura");
        return this.facturaService.updateFactura(idFactura, facturaDto);
    }

    @Delete(':id')
    deleteFactura(@Param('id') idFactura: string): Promise<FacturaI> {
        console.log(new Date(), this.TAG, "deleteFactura");
        return this.facturaService.deleteFactura(idFactura);
    }

}
