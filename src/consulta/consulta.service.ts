import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ConsultaI } from 'src/interfaces/consulta.interface';

@Injectable()
export class ConsultaService {

    constructor(@InjectModel('Consulta') private readonly consultaModel : Model<ConsultaI>) {}

    /**
     * Muestra todas las consultas de la BD
     */
    async showAllConsults(): Promise<ConsultaI[]> {
        return await this.consultaModel.find().sort('hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma');
    }

    /**
     * Muestra todas las consultas de la BD de una sucursal
     */
    async showAllConsultsBySucursal(sucursalId): Promise<ConsultaI[]> {
        return await this.consultaModel.find( {sucursal: sucursalId} ).sort('hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma');
    }

    /**
     * Muestra todas las consultas de la BD
     */
    async showAllConsultsBySucursalAsistio(sucursalId): Promise<ConsultaI[]> {
        return await this.consultaModel.find( {sucursal: sucursalId, $or: [ {asistio: 'ASISTIO'}, {asistio: 'PENDIENTE'}]} ).sort('hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma');
    }

    /**
     * Muestra todas las consultas de la BD que correspondan a una fecha
     */
    async findConsultsByDate(date): Promise<ConsultaI[]> {
        return await this.consultaModel.find( {fecha: date} ).sort('hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma');
    }

    /**
     * Muestra todas las consultas de la BD que correspondan a una fecha y una sucursal
     */
    async findConsultsByDateAndSucursal(date, sucursalId): Promise<ConsultaI[]> {
        return await this.consultaModel.find( {fecha: date, sucursal: sucursalId} ).sort('hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma');
    }

    /**
     * Muestra todas las consultas de la BD que correspondan a una fecha y una sucursal
     */
    async findConsultsByRangeDateAndSucursal(startDate, endConsult, sucursalId): Promise<ConsultaI[]> {
        return await this.consultaModel.find( {fecha: {$gte: startDate, $lte: endConsult}, sucursal: sucursalId} ).sort('hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma');
    }

    /**
     * Busca solo un consulta mediante su ID en la BD
     * @param idConsulta
     */
    async findConsultById(idConsulta: string): Promise<ConsultaI> {
        return await this.consultaModel.findOne( { _id: idConsulta } )
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma');
    }

    /**
     * Muestra todo el histotico de una persona buscando por su numero de telefono
     */
    async findHistoricByPaciente(pacienteId: string): Promise<ConsultaI[]> {
        return await this.consultaModel.find( {paciente: pacienteId} ).sort('fecha')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma');
    }

    /**
     * Genera un nuevo consulta en la BD
     * @param consulta 
     */
    async createConsult(consulta: ConsultaI): Promise<ConsultaI> {
        const newDate = new this.consultaModel(consulta);
        return await newDate.save();
    }

    /**
     * Busca un consulta por su Id para poder actualizarlo
     * @param idConsulta 
     * @param consulta 
     */
    async updateConsult(idConsulta: string, consulta: ConsultaI): Promise<ConsultaI> {
        return await this.consultaModel.updateOne({ _id: idConsulta }, consulta);
    }

    /**
     * Busca un consulta por su ID y lo elimina de la BD
     * @param idConsulta 
     */
    async deleteConsult(idConsulta: string ): Promise<ConsultaI> {
        return await this.consultaModel.findOneAndDelete({ _id: idConsulta });
    }

}
