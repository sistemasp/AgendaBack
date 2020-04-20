import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteI } from 'src/interfaces/paciente.interface';
import { PacienteDto } from 'src/dto/paciente-dto';

@Controller('paciente')
export class PacienteController {

    TAG = "PacienteController";

    constructor(private readonly pacienteService: PacienteService) {}

    @Get()
    showAllPatients() : Promise<PacienteI[]> {
        console.log(this.TAG, "showAllPatients");
        return this.pacienteService.showAllPatients();
    }

    @Get(':id')
    findPatientById(@Param('id') idPaciente: string): Promise<PacienteI> {
        console.log(this.TAG, "findPatientById");
        return this.pacienteService.findPatientById(idPaciente);
    }

    @Get('phonenumber/:telefono')
    findPatientByPhoneNumber(@Param('telefono') telefono: string): Promise<PacienteI[]> {
        console.log(this.TAG, "findPatientByPhoneNumber");
        return this.pacienteService.findPatientByPhoneNumber(telefono);
    }

    @Post()
    createPatient(@Body() pacienteDto: PacienteDto): Promise<PacienteI> {
        console.log(this.TAG, "createPatient");
        return this.pacienteService.createPatient(pacienteDto);
    }

    @Put(':id') 
    updatePatient(@Param('id') idPaciente: string, @Body() pacienteDto: PacienteDto): Promise<PacienteI> {
        console.log(this.TAG, "updatePatient");
        return this.pacienteService.updatePatient(idPaciente, pacienteDto);
    }

    @Delete(':id')
    deletePatient(@Param('id') idPaciente: string): Promise<PacienteI> {
        console.log(this.TAG, "deletePatient");
        return this.pacienteService.deletePatient(idPaciente);
    }
}
