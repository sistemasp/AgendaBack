import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { EmpleadoI } from 'src/interfaces/empleado.interface';
import { EmpleadoDto } from 'src/dto/empleado-dto';

@Controller('empleado')
export class EmpleadoController {

    TAG = "EmpleadoController";

    constructor(private readonly empleadoService: EmpleadoService) {}

    @Get()
    showAllEmployees() : Promise<EmpleadoI[]> {
        console.log(this.TAG, "showAllEmployees");
        return this.empleadoService.showAllEmployees();
    }

    @Get(':id')
    findEmployeeById(@Param('id') idEmpleado: string): Promise<EmpleadoI> {
        console.log(this.TAG, "findEmployeeById");
        return this.empleadoService.findEmployeeById(idEmpleado);
    }

    @Get('number/:employeeNumber')
    findEmployeeByEmployeeNumber(@Param('employeeNumber') employeeNumber: string): Promise<EmpleadoI> {
        console.log(this.TAG, "findEmployeeByEmployeeNumber");
        return this.empleadoService.findEmployeeByEmployeeNumber(employeeNumber);
    }

    @Get('rol/:id_rol')
    findEmployeesByRolId(@Param('id_rol') idRol: string): Promise<EmpleadoI[]> {
        console.log(this.TAG, "findEmployeesByRolId");
        return this.empleadoService.findEmployeesByRolId(idRol);
    }

    @Post()
    createEmployee(@Body() empleadoDto: EmpleadoDto): Promise<EmpleadoI> {
        console.log(this.TAG, "createEmployee");
        return this.empleadoService.createEmployee(empleadoDto);
    }

    @Put(':id') 
    updateEmployee(@Param('id') idEmpleado: string, @Body() empleadoDto: EmpleadoDto): Promise<EmpleadoI> {
        console.log(this.TAG, "updateEmployee");
        return this.empleadoService.updateEmployee(idEmpleado, empleadoDto);
    }

    @Delete(':id')
    deleteEmployee(@Param('id') idEmpleado: string): Promise<EmpleadoI> {
        console.log(this.TAG, "deleteEmployee");
        return this.empleadoService.deleteEmployee(idEmpleado);
    }

}
