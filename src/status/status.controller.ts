import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusI } from 'src/interfaces/status.interface';
import { StatusDto } from 'src/dto/status-dto';

@Controller('status')
export class StatusController {

    TAG = "StatusController";

    constructor(private readonly statusService: StatusService) {}

    @Get()
    showAllStatus() : Promise<StatusI[]> {
        console.log(new Date(), this.TAG, "showAllStatus");
        return this.statusService.showAllStatus();
    }

    @Get(':id')
    findStatusById(@Param('id') idStatus: string): Promise<StatusI> {
        console.log(new Date(), this.TAG, "findStatusById");
        return this.statusService.findStatusById(idStatus);
    }

    @Post()
    createStatus(@Body() rolDto: StatusDto): Promise<StatusI> {
        console.log(new Date(), this.TAG, "createStatus");
        return this.statusService.createStatus(rolDto);
    }

    @Put(':id') 
    updateStatus(@Param('id') idStatus: string, @Body() rolDto: StatusDto): Promise<StatusI> {
        console.log(new Date(), this.TAG, "updateStatus");
        return this.statusService.updateStatus(idStatus, rolDto);
    }

    @Delete(':id')
    deleteStatus(@Param('id') idStatus: string): Promise<StatusI> {
        console.log(new Date(), this.TAG, "deleteStatus");
        return this.statusService.deleteStatus(idStatus);
    }

}
