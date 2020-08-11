import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ConsultaI } from 'src/interfaces/consulta.interface';

@Injectable()
export class ConsultaService {

    constructor(@InjectModel('Consulta') private readonly consultaModel: Model<ConsultaI>) { }

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
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('pagoss')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Muestra todas las consultas de la BD de una sucursal
     */
    async showAllConsultsBySucursal(sucursalId): Promise<ConsultaI[]> {
        return await this.consultaModel.find({ sucursal: sucursalId }).sort('fecha_hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Muestra todas las consultas de la BD
     */
    async showAllConsultsBySucursalAsistio(sucursalId): Promise<ConsultaI[]> {
        return await this.consultaModel.find({
            sucursal: sucursalId, $or: [
                { status: '5eceb37a5da339304c86c993' }, //ASISTIO
                { status: '5eceb3e75da339304c86c996' }, // PENDIENTE
                { status: '5ef272fc3d7b0e41982d8241' }, // EN CONSULTORIO
                { status: '5ef2735e3d7b0e41982d8242' },  // ATENDIDO
            ]
        }).sort('fecha_hora')
            .populate('sucursal')
            .populate('medico')
    }

    /**
     * Muestra todas las consultas de la BD que correspondan a una fecha_hora
     */
    async findConsultsByDate(date): Promise<ConsultaI[]> {
        return await this.consultaModel.find({ fecha_hora: date }).sort('fecha_hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('pagos')
            .populate('frecuencia')
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
        return await this.consultaModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId
            }).sort('fecha_hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Muestra todas las consultas de la BD que correspondan a un pagos de un medico de algun dia 
     */
    async findConsultsByPayOfDoctor(date, sucursalId, medicoId, atendidoId): Promise<ConsultaI[]> {
        let startDate = new Date(date);
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(date);
        endDate.setHours(18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.consultaModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                medico: medicoId,
                status: atendidoId,
            }).sort('fecha_hora')
            .populate('sucursal')
            .populate('pagos');

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
        return await this.consultaModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('fecha_hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('pagos')
            .populate('frecuencia')
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
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                status: statusAsistioId,
                pagado: true

            }).sort('hora_llegada')
            .populate('paciente')
            .populate('medico');
    }

    /**
     * Busca solo un consulta mediante su ID en la BD
     * @param idConsulta
     */
    async findConsultById(idConsulta: string): Promise<ConsultaI> {
        return await this.consultaModel.findOne({ _id: idConsulta })
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Muestra todo el histotico de una persona buscando por su numero de telefono
     */
    async findHistoricByPaciente(pacienteId: string): Promise<ConsultaI[]> {
        return await this.consultaModel.find({ paciente: pacienteId }).sort('fecha_hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Muestra todo el histotico de una persona buscando por su numero de telefono
     */
    async findHistoricByMedicId(medicoId: string): Promise<ConsultaI[]> {
        return await this.consultaModel.find({ medico: medicoId }).sort('fecha_hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Genera un nuevo consulta en la BD
     * @param consulta 
     */
    async createConsult(consulta: ConsultaI): Promise<ConsultaI> {
        let startDate = new Date();
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        const consecutivo = await this.consultaModel.find({
            sucursal: consulta.sucursal,
            fecha_hora: { $gte: startDate, $lte: endDate }
        });
        consulta.consecutivo = consecutivo.length;
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
    async deleteConsult(idConsulta: string): Promise<ConsultaI> {
        return await this.consultaModel.findOneAndDelete({ _id: idConsulta });
    }

}
