import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { HorarioService } from './horario.service';
import { HorarioI } from 'src/interfaces/horario.interface';
import { HorarioDto } from 'src/dto/horario-dto';

@Controller('horario')
export class HorarioController {

    TAG = "HorarioController";

    constructor(private readonly horarioService: HorarioService) {}

    @Get('consulta/:consultaId/:dia/:mes/:anio/:sucursal')
    findScheduleInConsultByDateAndSucursal(@Param('consultaId') consultaId: string, @Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, @Param('sucursal') sucursalId: string): Promise<HorarioI[]> {
        console.log(new Date(), this.TAG, "findScheduleInConsultByDateAndSucursal");
        return this.horarioService.findScheduleInConsultByDateAndSucursal(consultaId, `${anio}-${mes}-${dia}`, sucursalId );
    }

    @Get()
    showAllSchedules(): Promise<HorarioI[]> {
        console.log(new Date(), this.TAG, "showAllSchedules");
        return this.horarioService.showAllSchedules();
    }

    @Get(':id')
    findScheduleById(@Param('id') idHorario: string): Promise<HorarioI> {
        console.log(new Date(), this.TAG, "findScheduleById");
        return this.horarioService.findScheduleById(idHorario);
    }

    @Get('/servicio/:idservicio')
    findSchedulesByService(@Param('idservicio') idServicio: string): Promise<HorarioI[]> {
        console.log(new Date(), this.TAG, "findSchedulesByService");
        return this.horarioService.findSchedulesByService(idServicio);
    }

    @Get('/sucursal/:idSucursal/servicio/:idservicio')
    findSchedulesBySucursalAndServicio(@Param('idSucursal') idSucursal: string, @Param('idservicio') idServicio: string): Promise<HorarioI[]> {
        console.log(new Date(), this.TAG, "findSchedulesBySucursalAndServicio");
        return this.horarioService.findSchedulesBySucursalAndServicio(idSucursal, idServicio);
    }

    @Get(':dia/:mes/:anio')
    findScheduleByDate(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string): Promise<HorarioI[]> {
        console.log(new Date(), this.TAG, "findScheduleByDate");
        return this.horarioService.findScheduleByDate(`${anio}-${mes}-${dia}`);
    }

    @Get(':dia/:mes/:anio/:sucursal/:service')
    findScheduleByDateAndSucursalAndService(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, @Param('sucursal') sucursalId: string, @Param('service') service: string): Promise<HorarioI[]> {
        console.log(new Date(), this.TAG, "findScheduleByDateAndSucursalAndService");
        return this.horarioService.findScheduleByDateAndSucursalAndService(`${anio}-${mes}-${dia}`, sucursalId, service );
    }

    /*@Get('cita/:dia/:mes/:anio/:sucursal/:service')
    findScheduleInDatesByDateAndSucursalAndService(@Param('dia') dia: string, @Param('mes') mes: string, @Param('anio') anio: string, @Param('sucursal') sucursalId: string, @Param('service') service: string): Promise<HorarioI[]> {
        console.log(new Date(), this.TAG, "findScheduleInDatesByDateAndSucursalAndService");
        return this.horarioService.findScheduleInDatesByDateAndSucursalAndService(`${anio}-${mes}-${dia}`, sucursalId, service );
    }*/

    @Post()
    createSchedule(@Body() horarioDto: HorarioDto): Promise<HorarioI> {
        console.log(new Date(), this.TAG, "createSchedule");
        return this.horarioService.createSchedule(horarioDto);
    }

    @Put(':id') 
    updateSchedule(@Param('id') idHorario: string, @Body() horarioDto: HorarioDto): Promise<HorarioI> {
        console.log(new Date(), this.TAG, "updateSchedule");
        return this.horarioService.updateSchedule(idHorario, horarioDto);
    }

    @Delete(':id')
    deleteSchedule(@Param('id') idHorario: string): Promise<HorarioI> {
        console.log(new Date(), this.TAG, "deleteSchedule");
        return this.horarioService.deleteSchedule(idHorario);
    }

}
