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
        return await this.citaModel.find().sort('hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('tratamientos')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('quien_confirma');
    }

    /**
     * Muestra todas las citas de la BD de una sucursal
     */
    async showAllDatesBySucursal(sucursalId): Promise<CitaI[]> {
        return await this.citaModel.find( {sucursal: sucursalId} ).sort('hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('tratamientos')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('quien_confirma');
    }

    /**
     * Muestra todas las citas de la BD
     */
    async showAllDatesBySucursalAsistio(sucursalId): Promise<CitaI[]> {
        return await this.citaModel.find( {sucursal: sucursalId, $or: [ {asistio: 'ASISTIO'}, {asistio: 'PENDIENTE'}]} ).sort('hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('tratamientos')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('quien_confirma');
    }

    /**
     * Muestra todas las citas de la BD que correspondan a una fecha
     */
    async findDatesByDate(date): Promise<CitaI[]> {
        return await this.citaModel.find( {fecha: date} ).sort('hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('tratamientos')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('quien_confirma');
    }

    /**
     * Muestra todas las citas de la BD que correspondan a una fecha y una sucursal
     */
    async findDatesByDateAndSucursal(date, sucursalId): Promise<CitaI[]> {
        return await this.citaModel.find( {fecha: date, sucursal: sucursalId} ).sort('hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('tratamientos')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('quien_confirma');
    }

    /**
     * Muestra todas las citas de la BD que correspondan a una fecha y una sucursal
     */
    async findDatesByRangeDateAndSucursal(startDate, endDate, sucursalId): Promise<CitaI[]> {
        return await this.citaModel.find( {fecha: {$gte: startDate, $lte: endDate}, sucursal: sucursalId} ).sort('hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('tratamientos')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('quien_confirma');
    }

    /**
     * Muestra todas las citas de la BD que correspondan a una fecha y una sucursal
     */
    async findDatesByDateAndSucursalAndService(date, sucursalId, servicio): Promise<CitaI[]> {
        return await this.citaModel.find( {fecha: date, sucursal: sucursalId, servicio: servicio} ).sort('hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('tratamientos')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('quien_confirma');
    }

    /**
     * Busca solo un cita mediante su ID en la BD
     * @param idCita
     */
    async findDateById(idCita: string): Promise<CitaI> {
        return await this.citaModel.findOne( { _id: idCita } )
            .populate('paciente')
            .populate('sucursal')
            .populate('tratamientos')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('quien_confirma');
    }

    /**
     * Muestra todo el histotico de una persona buscando por su numero de telefono
     */
    async findHistoricByPaciente(pacienteId: string): Promise<CitaI[]> {
        return await this.citaModel.find( {paciente: pacienteId} ).sort('fecha')
            .populate('paciente')
            .populate('sucursal')
            .populate('tratamientos')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('quien_confirma');
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
