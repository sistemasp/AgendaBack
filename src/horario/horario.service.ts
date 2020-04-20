import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HorarioI } from 'src/interfaces/horario.interface';
import { CitaService } from 'src/cita/cita.service';
import { CitaI } from 'src/interfaces/cita.interface';
import { response } from 'express';

@Injectable()
export class HorarioService {

    constructor(@InjectModel('Horario') private readonly horarioModel : Model<HorarioI>, private readonly citaService: CitaService) {}

    /**
     * Muestra todos los horarios de la BD
     */
    async showAllSchedules(): Promise<HorarioI[]> {
        return await this.horarioModel.find().sort('hora');
    }

    /**
     * Busca solo un horario mediante su ID en la BD
     * @param idHorario 
     */
    async findScheduleById(idHorario: string): Promise<HorarioI> {
        return await this.horarioModel.findOne( { _id: idHorario } );
    }

    /**
     * Filtra los horarios segun la cantidad de citas que se tengan en cierto dia.
     * @param horarios 
     * @param citas 
     */
    async filterSchedules(horarios: HorarioI[], citas: CitaI[]): Promise<HorarioI[]> {

        await horarios.forEach((horario, index) => {
            // SOLO 4 CITAS POR CADA HORA

            const numCitas = citas.filter(c => {
                return c.hora === horario.hora && (c.asistio === undefined || c.asistio === 'ASISTIO')
            }).length;
            if (numCitas > 3) {
                horarios.splice(index, 1);
            }
        });
        return horarios;
    }

    /**
     * Filtrar los horarios segun la disponibilidad de servicios.
     * @param horarios 
     * @param citas 
     * @param service
     */
    async filterSchedulesAndService(horarios: HorarioI[], citas: CitaI[], service: string): Promise<HorarioI[]> {
        await horarios.forEach((horario, index) => {
            const numCitas = citas.filter(c => {
                return c.hora === horario.hora && (c.asistio === 'PENDIENTE' || c.asistio === 'ASISTIO') && service === c.servicio;
            }).length;
            if (numCitas > (service !== 'FACIAL' ? 0 : 3) ) {
                horarios.splice(index, 1);
            }
        });
        
        return horarios;
    }

    /**
     * Busca horarios mediante su disponibilidad de cierto dia en la BD
     * @param date 
     */
    async findScheduleByDate(date: string): Promise<HorarioI[]> {
        const citas = await this.citaService.findDatesByDate(date);
        const horarios = await this.horarioModel.find().sort('hora');
        const response = await this.filterSchedules(horarios, citas); 
        return response;
    }

    /**
     * Busca horarios mediante su disponibilidad de cierto dia en la BD y sucursal
     * @param date 
     * @param sucursalId
     * @param service
     */
    async findScheduleByDateAndSucursalAndService(date: string, sucursalId: string, service: string): Promise<HorarioI[]> {
        const citas = await this.citaService.findDatesByDateAndSucursalAndService(date, sucursalId, service);
        const horarios = await this.horarioModel.find().sort('hora');
        const response = await this.filterSchedulesAndService(horarios, citas, service);
        return response;
    }

    /**
     * Genera un nuevo horario en la BD
     * @param horario 
     */
    async createSchedule(horario: HorarioI): Promise<HorarioI> {
        const newSchedule = new this.horarioModel(horario);
        return await newSchedule.save();
    }

    /**
     * Busca un horario por su Id para poder actualizarlo
     * @param idHorario 
     * @param horario 
     */
    async updateSchedule(idHorario: string, horario: HorarioI): Promise<HorarioI> {
        return await this.horarioModel.updateOne({ _id: idHorario }, horario);
    }

    /**
     * Busca un horario por su ID y lo elimina de la BD
     * @param idHorario 
     */
    async deleteSchedule(idHorario: string ): Promise<HorarioI> {
        return await this.horarioModel.findOneAndDelete(idHorario);
    }

}
