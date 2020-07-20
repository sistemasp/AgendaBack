import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsoCfdiService } from './uso-cfdi.service';
import { UsoCfdiI } from 'src/interfaces/uso-cfdi.interface';
import { UsoCfdiDto } from 'src/dto/uso-cfdi-dto';

@Controller('usocfdi')
export class UsoCfdiController {

    TAG = "UsoCfdiController";

    constructor(private readonly usoCfdiService: UsoCfdiService) {}

    @Get()
    showAllUsoCfdis() : Promise<UsoCfdiI[]> {
        console.log(new Date(), this.TAG, "showAllUsoCfdis");
        return this.usoCfdiService.showAllUsoCfdis();
    }

    @Get(':id')
    findUsoCfdiById(@Param('id') idUsoCfdi: string): Promise<UsoCfdiI> {
        console.log(new Date(), this.TAG, "findUsoCfdiById");
        return this.usoCfdiService.findUsoCfdiById(idUsoCfdi);
    }

    @Post()
    createUsoCfdi(@Body() usoCfdiDto: UsoCfdiDto): Promise<UsoCfdiI> {
        return this.usoCfdiService.createUsoCfdi(usoCfdiDto);
    }

    @Put(':id') 
    updateUsoCfdi(@Param('id') idUsoCfdi: string, @Body() usoCfdiDto: UsoCfdiDto): Promise<UsoCfdiI> {
        console.log(new Date(), this.TAG, "updateUsoCfdi");
        return this.usoCfdiService.updateUsoCfdi(idUsoCfdi, usoCfdiDto);
    }

    @Delete(':id')
    deleteUsoCfdi(@Param('id') idUsoCfdi: string): Promise<UsoCfdiI> {
        console.log(new Date(), this.TAG, "deleteUsoCfdi");
        return this.usoCfdiService.deleteUsoCfdi(idUsoCfdi);
    }

}
