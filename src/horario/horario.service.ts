import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HorarioI } from 'src/interfaces/horario.interface';
import { CitaService } from 'src/cita/cita.service';
import { CitaI } from 'src/interfaces/cita.interface';
import { ConsultaService } from 'src/consulta/consulta.service';
import { ConsultaI } from 'src/interfaces/consulta.interface';

@Injectable()
export class HorarioService {

    constructor(@InjectModel('Horario') 
        private readonly horarioModel : Model<HorarioI>, 
        private readonly citaService: CitaService,
        private readonly consultaService: ConsultaService
    ) {}

    /**
     * Muestra todos los horarios de la BD
     */
    async showAllSchedules(): Promise<HorarioI[]> {
        return await this.horarioModel.find().sort('hora')
            .populate('servicio');
    }

    /**
     * Busca solo un horario mediante su ID en la BD
     * @param idHorario 
     */
    async findScheduleById(idHorario: string): Promise<HorarioI> {
        return await this.horarioModel.findOne( { _id: idHorario } )
            .populate('servicio');
    }

    /**
     * Muestra todos los horarios de la BD
     */
    async findSchedulesByService(idService: string): Promise<HorarioI[]> {
        return await this.horarioModel.find( {servicio: idService} ).sort('hora')
            .populate('servicio');
    }

    /**
     * Muestra todos los horarios de la BD por sucursal y servicio
     */
    async findSchedulesBySucursalAndServicio(idSucursal: string, idService: string): Promise<HorarioI[]> {
        return await this.horarioModel.find( 
            {
                servicio: idService,
                sucursal: idSucursal
            } ).sort('hora');
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
                const hora = `${c.fecha_hora.getHours()}:${c.fecha_hora.getMinutes()}`;
                return hora === horario.hora && (c.status.nombre === undefined || c.status.nombre === 'ASISTIO')
            }).length;
            if (numCitas > 3) {
                horarios.splice(index, 1);
            }
        });
        return horarios;
    }

    compararHorario(horaCita: String, duracionCita: String, horario: String): Boolean {
        const splitHoraCita = horaCita.split(':');
        const minCita = Number(splitHoraCita[0]) * 60 + Number(splitHoraCita[1]);
        const splitHorario = horario.split(':');
        const minHorario = Number(splitHorario[0]) * 60 + Number(splitHorario[1]);
        return minHorario >= minCita && minHorario < (minCita + Number(duracionCita));
    }

    /**
     * Filtrar los horarios segun la disponibilidad de servicios.
     * @param horarios 
     * @param citas 
     * @param service
     */
    async filterSchedulesAndService(horarios: HorarioI[], citas: CitaI[], service: string): Promise<HorarioI[]> {
        const newHorarios = [];
        await horarios.forEach((horario) => {
            const numCitas = citas.filter(c => {
                const hora = `${c.fecha_hora.getHours() + 5}:${c.fecha_hora.getMinutes()}`;
                return this.compararHorario(hora, c.tiempo, horario.hora) && (c.status.nombre === 'PENDIENTE' || c.status.nombre === 'ASISTIO');
            }).length;
            if (numCitas <= (service !== '5e7399124ba91f33306f77a6' ? 0 : 3)) { // '5e7399124ba91f33306f77a6' --> FACIAL
                newHorarios.push(horario);
            }
        });
        
        return newHorarios;
    }

    /**
     * Filtrar los horarios segun la disponibilidad de consulñtas.
     * @param horarios 
     * @param citas 
     * @param service
     */
    async filterSchedulesInConsult(horarios: HorarioI[], consulta: ConsultaI[]): Promise<HorarioI[]> {
        const newHorarios = [];
        await horarios.forEach((horario) => {
            const numConsultas = consulta.filter(c => {
                const hora = `${c.fecha_hora.getHours()}:${c.fecha_hora.getMinutes()}`;
                return this.compararHorario(hora, c.tiempo, horario.hora) && (c.status.nombre === 'PENDIENTE' || c.status.nombre === 'ASISTIO');
            }).length;
            if (numConsultas <= 3) {
                newHorarios.push(horario);
            }
        });
        
        return newHorarios;
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

    schedulesToday(horarios: HorarioI[], hora: string): HorarioI[] {
        return horarios.filter(horario => {
            return Number(hora) <= Number(horario.hora.substring(0, 2));
        });
    }

    /**
     * Busca horarios mediante su disponibilidad de cierto dia en la BD y sucursal
     * @param date 
     * @param sucursalId
     * @param service
     */
    async findScheduleByDateAndSucursalAndService(date: string, sucursalId: string, service: string): Promise<HorarioI[]> {        
        const citas = await this.citaService.findDatesByDateAndSucursalAndService(date, sucursalId, service);
        let horarios = await this.horarioModel.find({
            servicio: service,
            sucursal: sucursalId
        }).sort('hora');
        const today =  new Date();
        const todayString = `${today.getFullYear()}-${Number(today.getMonth()) + 1}-${today.getDate()}`;
        if (todayString === date) {
            horarios = await this.schedulesToday(horarios, today.getHours().toString());
        }
        const response = await this.filterSchedulesAndService(horarios, citas, service);
        return response;
    }

    /**
     * Busca horarios en citas mediante su disponibilidad de cierto dia en la BD y sucursal
     * @param date 
     * @param sucursalId
     * @param service
     */
    async findScheduleInDatesByDateAndSucursalAndService(date: string, sucursalId: string, service: string): Promise<HorarioI[]> {
        const citas = await this.citaService.findDatesByDateAndSucursalAndService(date, sucursalId, service);
        let horarios = await this.horarioModel.find({
            servicio: service,
            sucursal: sucursalId
        }).sort('hora');
        const today =  new Date();
        const todayString = `${today.getDate()}/${Number(today.getMonth()) + 1}/${today.getFullYear()}`;
        if (todayString === date) {
            horarios = await this.schedulesToday(horarios, today.getHours().toString());
        }
        const response = await this.filterSchedulesAndService(horarios, citas, service);
        return response;
    }

    /**
     * Busca horarios en consultas mediante su disponibilidad de cierto dia en la BD y sucursal
     * @param date 
     * @param sucursalId
     * @param service
     */
    async findScheduleInConsultByDateAndSucursal(consultaId: string, date: string, sucursalId: string): Promise<HorarioI[]> {
        const consultas = await this.consultaService.findConsultsByDateAndSucursal(date, sucursalId);
        let horarios = await this.horarioModel.find( {
            servicio: consultaId,
            sucursal: sucursalId
        } ).sort('hora');
        const today =  new Date();
        const todayString = `${today.getDate()}/${Number(today.getMonth()) + 1}/${today.getFullYear()}`;
        if (todayString === date) {
            horarios = await this.schedulesToday(horarios, today.getHours().toString());
        }
        const response = await this.filterSchedulesInConsult(horarios, consultas);
        return response;
    }

    /**
     * Genera un nuevo horario en la BD
     * @param horario 
     */
    async createSchedule(horario: HorarioI): Promise<HorarioI> {
        const newSchedule = new this.horarioModel(horario)
            .populate('servicio');
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
        return await this.horarioModel.findOneAndDelete({ _id: idHorario });
    }

}
