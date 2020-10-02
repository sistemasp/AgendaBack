import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ConsultaI } from 'src/interfaces/consulta.interface';
import { ConsecutivoI } from 'src/interfaces/consecutivo.interface';

@Injectable()
export class ConsultaService {

    constructor(
        @InjectModel('Consulta') private readonly consultaModel: Model<ConsultaI>,
        @InjectModel('Consecutivo') private readonly consecutivoModel: Model<ConsecutivoI>
    ) { }

    /**
     * Muestra todas las consultas de la BD
     */
    async showAllConsults(): Promise<ConsultaI[]> {
        return await this.consultaModel.find().sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Muestra todas las consultas de la BD de una sucursal
     */
    async showAllConsultsBySucursal(sucursalId): Promise<ConsultaI[]> {
        return await this.consultaModel.find({ sucursal: sucursalId }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
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
        }).sort('consecutivo')
            .populate('sucursal')
            .populate('medico')
    }

    /**
     * Muestra todas las consultas de la BD que correspondan a una fecha_hora
     */
    async findConsultsByDate(anio, mes, dia): Promise<ConsultaI[]> {
        const date = new Date(anio, mes - 1, dia);
        return await this.consultaModel.find({ fecha_hora: date }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Muestra todas las consultas de la BD que correspondan a una fecha_hora y una sucursal
     */
    async findConsultsByDateAndSucursal(anio, mes, dia, sucursalId): Promise<ConsultaI[]> {
        let startDate = new Date(anio, mes - 1, dia);
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes - 1, dia);
        endDate.setHours(18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.consultaModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('servicio')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Muestra todas las consultas de la BD que correspondan a un pagos de un medico de algun dia 
     */
    async findConsultsByPayOfDoctor(anio, mes, dia, sucursalId, medicoId, atendidoId): Promise<ConsultaI[]> {
        let startDate = new Date(anio, mes - 1, dia);
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes - 1, dia);
        endDate.setHours(18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.consultaModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                medico: medicoId,
                status: atendidoId,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('pagos');
    }

    /**
     * Muestra todas las consultas de la BD que correspondan a un pagos de un medico de algun dia y turno
     * turno:
     *  1 = MATUTINO
     *  2 = VESPERTINO
     */
    async findConsultsByPayOfDoctorTurno(anio, mes, dia, sucursalId, medicoId, atendidoId, turno): Promise<ConsultaI[]> {
        let startDate = new Date(anio, mes - 1, dia);
        startDate.setHours(turno === 'm' ? -5 : (startDate.getDay() === 6 ? 8 : 9));
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes - 1, dia);
        endDate.setHours(turno === 'm' ? (startDate.getDay() === 6 ? 7 : 8) : 18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        return await this.consultaModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                medico: medicoId,
                status: atendidoId,
            }).sort('consecutivo')
            .populate('paciente')
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
        return await this.consultaModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
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
                // pagado: true

            }).sort('hora_llegada')
            .populate('paciente')
            .populate('sucursal')
            .populate('servicio')
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
            .populate('medio')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Muestra todo el histotico de una persona buscando por su numero de telefono
     */
    async findHistoricByPaciente(pacienteId: string): Promise<ConsultaI[]> {
        return await this.consultaModel.find({ paciente: pacienteId }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Muestra todo el histotico de una persona buscando por su numero de telefono
     */
    async findHistoricByMedicId(medicoId: string): Promise<ConsultaI[]> {
        return await this.consultaModel.find({ medico: medicoId }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Genera un nuevo consulta en la BD
     * @param consulta 
     */
    async createConsult(consulta: ConsultaI): Promise<ConsultaI> {
        /*let startDate = new Date(consulta.fecha_hora);
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(consulta.fecha_hora);
        endDate.setHours(18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);*/
        const consecutivo = await this.consecutivoModel.find({
            sucursal: consulta.sucursal,
            // fecha_hora: { $gte: startDate, $lte: endDate }
        });
        consulta.consecutivo = consecutivo.length;
        consulta.create_date = new Date();
        const newConsult = new this.consultaModel(consulta);
        return await newConsult.save();
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
