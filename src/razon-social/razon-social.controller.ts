import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RazonSocialService } from './razon-social.service';
import { RazonSocialI } from 'src/interfaces/razon-social.interface';
import { RazonSocialDto } from 'src/dto/razon-social-dto';

@Controller('razonsocial')
export class RazonSocialController {

    TAG = "RazonSocialController";

    constructor(private readonly razonSocialService: RazonSocialService) {}

    @Get()
    showAllRazonSocials() : Promise<RazonSocialI[]> {
        console.log(new Date(), this.TAG, "showAllRazonSocials");
        return this.razonSocialService.showAllRazonSocials();
    }

    @Get(':id')
    findRazonSocialById(@Param('id') idRazonSocial: string): Promise<RazonSocialI> {
        console.log(new Date(), this.TAG, "findRazonSocialById");
        return this.razonSocialService.findRazonSocialById(idRazonSocial);
    }

    @Post()
    createRazonSocial(@Body() razonSocialDto: RazonSocialDto): Promise<RazonSocialI> {
        console.log(new Date(), this.TAG, "createRazonSocial");
        return this.razonSocialService.createRazonSocial(razonSocialDto);
    }

    @Put(':id') 
    updateRazonSocial(@Param('id') idRazonSocial: string, @Body() razonSocialDto: RazonSocialDto): Promise<RazonSocialI> {
        console.log(new Date(), this.TAG, "updateRazonSocial");
        return this.razonSocialService.updateRazonSocial(idRazonSocial, razonSocialDto);
    }

    @Delete(':id')
    deleteRazonSocial(@Param('id') idRazonSocial: string): Promise<RazonSocialI> {
        console.log(new Date(), this.TAG, "deleteRazonSocial");
        return this.razonSocialService.deleteRazonSocial(idRazonSocial);
    }

}
