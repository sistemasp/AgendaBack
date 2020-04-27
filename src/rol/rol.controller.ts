import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolI } from 'src/interfaces/rol.interface';
import { RolDto } from 'src/dto/rol-dto';

@Controller('rol')
export class RolController {

    TAG = "RolController";

    constructor(private readonly rolService: RolService) {}

    @Get()
    showAllRols() : Promise<RolI[]> {
        console.log(this.TAG, "showAllRols");
        return this.rolService.showAllRols();
    }

    @Get(':id')
    findRolById(@Param('id') idRol: string): Promise<RolI> {
        console.log(this.TAG, "findRolById");
        return this.rolService.findRolById(idRol);
    }

    @Post()
    createRol(@Body() rolDto: RolDto): Promise<RolI> {
        console.log(this.TAG, "createRol");
        return this.rolService.createRol(rolDto);
    }

    @Put(':id') 
    updateRol(@Param('id') idRol: string, @Body() rolDto: RolDto): Promise<RolI> {
        console.log(this.TAG, "updateRol");
        return this.rolService.updateRol(idRol, rolDto);
    }

    @Delete(':id')
    deleteRol(@Param('id') idRol: string): Promise<RolI> {
        console.log(this.TAG, "deleteRol");
        return this.rolService.deleteRol(idRol);
    }

}
