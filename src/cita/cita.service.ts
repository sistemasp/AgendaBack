import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CitaI } from 'src/interfaces/cita.interface';

@Injectable()
export class CitaService {

    constructor(@InjectModel('Cita') private readonly citaModel : Model<CitaI>) {}

    /**
     * Muestra todas las citas de la BD
     */
    async showAllDates(): Promise<CitaI[]> {
        return await this.citaModel.find().sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('sucursal')
            .populate('tratamientos')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('medico')
            .populate('quien_confirma')
            .populate('tipo_cita')
            .populate('status');
    }

    /**
     * Muestra todas las citas de la BD de una sucursal
     */
    async showAllDatesBySucursal(sucursalId): Promise<CitaI[]> {
        return await this.citaModel.find( {sucursal: sucursalId} ).sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('sucursal')
            .populate('tratamientos')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('medico')
            .populate('quien_confirma')
            .populate('tipo_cita')
            .populate('status');
    }

    /**
     * Muestra todas las citas de la BD
     */
    async showAllDatesBySucursalAsistio(sucursalId): Promise<CitaI[]> {
        return await this.citaModel.find( {sucursal: sucursalId, $or: [ {status: '5eda8c7593664a4cb8592b9c'}, {status: '5eda8c4193664a4cb8592b99'}]} ).sort('fecha_hora')
            .populate('servicio')
            .populate('tratamientos');
    }

    /**
     * Muestra todas las citas de la BD que correspondan a una fecha
     */
    async findDatesByDate(date): Promise<CitaI[]> {
        let startDate = new Date(date);
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(date);
        endDate.setHours(18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.citaModel.find( {fecha_hora: { $gte: startDate, $lte: endDate }} ).sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('sucursal')
            .populate('tratamientos')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('medico')
            .populate('quien_confirma')
            .populate('tipo_cita')
            .populate('status');
    }

    /**
     * Muestra todas las citas de la BD que correspondan a una fecha y una sucursal
     */
    async findDatesByDateAndSucursal(anio, mes, dia, sucursalId): Promise<CitaI[]> {
        let startDate = new Date(anio, mes - 1, dia);
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes - 1, dia);
        endDate.setHours(18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        console.log();
        return await this.citaModel.find( {fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId} ).sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('sucursal')
            .populate('tratamientos')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('medico')
            .populate('quien_confirma')
            .populate('tipo_cita')
            .populate('status');
    }

    /**
     * Muestra todas las citas de la BD que correspondan a una fecha y una sucursal
     */
    async findDatesByRangeDateAndSucursal(startDateS, endDateS, sucursalId): Promise<CitaI[]> {
        let startDate = new Date(startDateS);
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(endDateS);
        endDate.setHours(18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.citaModel.find( {fecha_hora: {$gte: startDate, $lte: endDate}, sucursal: sucursalId} ).sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('sucursal')
            .populate('tratamientos')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('medico')
            .populate('quien_confirma')
            .populate('tipo_cita')
            .populate('status');
    }

    /**
     * Muestra todas las citas de la BD que correspondan a una fecha y una sucursal
     */
    async findDatesByDateAndSucursalAndService(anio, mes, dia, sucursalId, servicio): Promise<CitaI[]> {
        let startDate = new Date(anio, mes - 1, dia);
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes - 1, dia);
        endDate.setHours(18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.citaModel.find( {fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId, servicio: servicio} ).sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('sucursal')
            .populate('tratamientos')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('medico')
            .populate('quien_confirma')
            .populate('tipo_cita')
            .populate('status');
    }

    /**
     * Busca solo un cita mediante su ID en la BD
     * @param idCita
     */
    async findDateById(idCita: string): Promise<CitaI> {
        return await this.citaModel.findOne( { _id: idCita } )
            .populate('paciente')
            .populate('servicio')
            .populate('sucursal')
            .populate('tratamientos')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('medico')
            .populate('quien_confirma')
            .populate('tipo_cita')
            .populate('status');
    }

    /**
     * Muestra todo el histotico de una persona buscando por su numero de telefono
     */
    async findHistoricByPaciente(pacienteId: string): Promise<CitaI[]> {
        return await this.citaModel.find( {paciente: pacienteId} ).sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('sucursal')
            .populate('tratamientos')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('medico')
            .populate('quien_confirma')
            .populate('tipo_cita')
            .populate('status');
    }

    /**
     * Genera un nuevo cita en la BD
     * @param cita 
     */
    async createDate(cita: CitaI): Promise<CitaI> {
        const newDate = new this.citaModel(cita);
        return await newDate.save();
    }

    /**
     * Busca un cita por su Id para poder actualizarlo
     * @param idCita 
     * @param cita 
     */
    async updateDate(idCita: string, cita: CitaI): Promise<CitaI> {
        return await this.citaModel.updateOne({ _id: idCita }, cita);
    }

    /**
     * Busca un cita por su ID y lo elimina de la BD
     * @param idCita 
     */
    async deleteDate(idCita: string ): Promise<CitaI> {
        return await this.citaModel.findOneAndDelete({ _id: idCita });
    }

}
