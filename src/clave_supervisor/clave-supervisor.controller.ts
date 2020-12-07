import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ClaveSupervisorService } from './clave-supervisor.service';
import { ClaveSupervisorI } from 'src/interfaces/clave-supervisor.interface';
import { ClaveSupervisorDto } from 'src/dto/clave-supervisor-dto';

@Controller('clavesupervisor')
export class ClaveSupervisorController {

    TAG = "ClaveSupervisorController";

    constructor(private readonly claveSupervisorService: ClaveSupervisorService) {}

    @Get()
    showAllClaveSupervisors() : Promise<ClaveSupervisorI[]> {
        console.log(new Date(), this.TAG, "showAllClaveSupervisors");
        return this.claveSupervisorService.showAllClaveSupervisors();
    }

    @Get(':id')
    findClaveSupervisorById(@Param('id') idClaveSupervisor: string): Promise<ClaveSupervisorI> {
        console.log(new Date(), this.TAG, "findClaveSupervisorById");
        return this.claveSupervisorService.findClaveSupervisorById(idClaveSupervisor);
    }

    
    @Get('clave/:clave')
    findSupervisorByClave(@Param('clave') clave: string): Promise<ClaveSupervisorI> {
        console.log(new Date(), this.TAG, "findSupervisorByClave");
        return this.claveSupervisorService.findSupervisorByClave(clave);
    }


    @Post()
    createClaveSupervisor(@Body() claveSupervisorDto: ClaveSupervisorDto): Promise<ClaveSupervisorI> {
        console.log(new Date(), this.TAG, "createClaveSupervisor");
        return this.claveSupervisorService.createClaveSupervisor(claveSupervisorDto);
    }

    @Put(':id') 
    updateClaveSupervisor(@Param('id') idClaveSupervisor: string, @Body() claveSupervisorDto: ClaveSupervisorDto): Promise<ClaveSupervisorI> {
        console.log(new Date(), this.TAG, "updateClaveSupervisor");
        return this.claveSupervisorService.updateClaveSupervisor(idClaveSupervisor, claveSupervisorDto);
    }

    @Delete(':id')
    deleteClaveSupervisor(@Param('id') idClaveSupervisor: string): Promise<ClaveSupervisorI> {
        console.log(new Date(), this.TAG, "deleteClaveSupervisor");
        return this.claveSupervisorService.deleteClaveSupervisor(idClaveSupervisor);
    }

}
