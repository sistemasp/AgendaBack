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
        return await this.consultaModel.find().sort('fecha_hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma')
            .populate('tipo_cita')
            .populate('pago')
            .populate('status');
    }

    /**
     * Muestra todas las consultas de la BD de una sucursal
     */
    async showAllConsultsBySucursal(sucursalId): Promise<ConsultaI[]> {
        return await this.consultaModel.find( {sucursal: sucursalId} ).sort('fecha_hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma')
            .populate('tipo_cita')
            .populate('pago')
            .populate('status');
    }

    /**
     * Muestra todas las consultas de la BD
     */
    async showAllConsultsBySucursalAsistio(sucursalId): Promise<ConsultaI[]> {
        return await this.consultaModel.find( {sucursal: sucursalId, $or: [ {status: '5eceb37a5da339304c86c993'}, {status: '5eceb3e75da339304c86c996'}]} ).sort('fecha_hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma')
            .populate('tipo_cita')
            .populate('pago')
            .populate('status');
    }

    /**
     * Muestra todas las consultas de la BD que correspondan a una fecha_hora
     */
    async findConsultsByDate(date): Promise<ConsultaI[]> {
        return await this.consultaModel.find( {fecha_hora: date} ).sort('fecha_hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma')
            .populate('tipo_cita')
            .populate('pago')
            .populate('status');
    }

    /**
     * Muestra todas las consultas de la BD que correspondan a una fecha_hora y una sucursal
     */
    async findConsultsByDateAndSucursal(date, sucursalId): Promise<ConsultaI[]> {
        let startDate = new Date(date);
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(date);
        endDate.setHours(18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.consultaModel.find( {fecha_hora: { $gte: startDate, $lte: endDate }} ).sort('fecha_hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma')
            .populate('tipo_cita')
            .populate('pago')
            .populate('status');
    }

    /**
     * Muestra todas las consultas de la BD que correspondan a una fecha_hora y una sucursal
     */
    async findConsultsByRangeDateAndSucursal(startDateS, endDateS, sucursalId): Promise<ConsultaI[]> {
        let startDate = new Date(startDateS);
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(endDateS);
        endDate.setHours(18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.consultaModel.find( {fecha_hora: {$gte: startDate, $lte: endDate}, sucursal: sucursalId} ).sort('fecha_hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma')
            .populate('tipo_cita')
            .populate('pago')
            .populate('status');
    }

    /**
     * Muestra todas las consultas de la BD de una sucursal
     */
    async waitingList(sucursalId, statusAsistioId): Promise<ConsultaI[]> {
        let startDate = new Date();
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.consultaModel.find(
            {
                fecha_hora: {$gte: startDate, $lte: endDate},
                sucursal: sucursalId,
                status: statusAsistioId,
                pagado: true

            } ).sort('hora_llegada')
            .populate('paciente')
            .populate('medico');
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
            .populate('quien_confirma')
            .populate('tipo_cita')
            .populate('pago')
            .populate('status');
    }

    /**
     * Muestra todo el histotico de una persona buscando por su numero de telefono
     */
    async findHistoricByPaciente(pacienteId: string): Promise<ConsultaI[]> {
        return await this.consultaModel.find( {paciente: pacienteId} ).sort('fecha_hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma')
            .populate('tipo_cita')
            .populate('pago')
            .populate('status');
    }

    /**
     * Muestra todo el histotico de una persona buscando por su numero de telefono
     */
    async findHistoricByMedicId(medicoId: string): Promise<ConsultaI[]> {
        return await this.consultaModel.find( {medico: medicoId} ).sort('fecha_hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma')
            .populate('tipo_cita')
            .populate('pago')
            .populate('status');
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
