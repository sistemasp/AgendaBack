import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PagoMedicoI } from 'src/interfaces/pago-medico.interface';
import { ConsecutivoI } from 'src/interfaces/consecutivo.interface';

@Injectable()
export class PagoMedicoService {

    constructor(
        @InjectModel('PagoMedico') private readonly pagoMedicoModel: Model<PagoMedicoI>,
    ) { }

    /**
     * Muestra todas las pagoMedicos de la BD
     */
    async showAllPagoMedicos(): Promise<PagoMedicoI[]> {
        return await this.pagoMedicoModel.find().sort('consecutivo')
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
     * Muestra todas las pagoMedicos de la BD de una sucursal
     */
    async showAllPagoMedicosBySucursal(sucursalId): Promise<PagoMedicoI[]> {
        return await this.pagoMedicoModel.find({ sucursal: sucursalId }).sort('consecutivo')
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
     * Muestra todas las pagoMedicos de la BD
     */
    async showAllPagoMedicosBySucursalAsistio(sucursalId): Promise<PagoMedicoI[]> {
        return await this.pagoMedicoModel.find({
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
     * Muestra todos los pagos al Medico del dia actual de la BD
     */
    async showTodayPagoMedicoBySucursalTurno(medicoId, sucursalId, turno): Promise<PagoMedicoI> {
        let startDate = new Date();
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.pagoMedicoModel.findOne({
            medico: medicoId,
            sucursal: sucursalId,
            turno: turno,
            fecha_pago: { $gte: startDate, $lte: endDate },
        }).sort('consecutivo')
            .populate('sucursal')
            .populate('medico')
            .populate('consultas')
            .populate('esteticas')
            .populate('tratamientos')
            .populate('cirugias');
    }

    /**
     * Muestra todas las pagoMedicos de la BD que correspondan a una fecha_hora
     */
    async findPagoMedicosByDate(anio, mes, dia): Promise<PagoMedicoI[]> {
        const date = new Date(anio, mes, dia);
        return await this.pagoMedicoModel.find({ fecha_hora: date }).sort('consecutivo')
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
     * Muestra todas las pagoMedicos de la BD que correspondan a una fecha_hora y una sucursal
     */
    async findPagoMedicosByDateAndSucursal(anio, mes, dia, sucursalId): Promise<PagoMedicoI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.pagoMedicoModel.find(
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
     * Muestra todas las pagoMedicos de la BD que correspondan a un pagos de un medico de algun dia 
     */
    async findPagoMedicosByPayOfDoctor(anio, mes, dia, sucursalId, medicoId, atendidoId): Promise<PagoMedicoI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.pagoMedicoModel.find(
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
     * Muestra todas las pagoMedicos de la BD que correspondan a un pagos de un medico de algun dia y turno
     * turno:
     *  1 = MATUTINO
     *  2 = VESPERTINO
     */
    async findPagoMedicosByPayOfDoctorTurno(anio, mes, dia, sucursalId, medicoId, atendidoId, turno): Promise<PagoMedicoI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(turno === 'm' ? 0 : (startDate.getDay() === 6 ? 13 : 14));
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(turno === 'm' ? (endDate.getDay() === 6 ? 12 : 13) : 23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        return await this.pagoMedicoModel.find(
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
     * Muestra todas las pagoMedicos de la BD que correspondan a un pagos de un medico de algun dia y turno
     * turno:
     *  1 = MATUTINO
     *  2 = VESPERTINO
     * frecuencia:
     *  1 = PRIMERA VEZ
     *  2 = RECONSULTA
     */
    async findPagoMedicosByPayOfDoctorTurnoFrecuencia(anio, mes, dia, sucursalId, medicoId, atendidoId, turno, frecuenciaId): Promise<PagoMedicoI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(turno === 'm' ? 0 : (startDate.getDay() === 6 ? 13 : 14));
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(turno === 'm' ? (endDate.getDay() === 6 ? 12 : 13) : 23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        return await this.pagoMedicoModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                medico: medicoId,
                status: atendidoId,
                frecuencia: frecuenciaId,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('pagos');
    }

    /**
     * Muestra todas las pagoMedicos de la BD que correspondan a una fecha_hora y una sucursal
     */
    async findPagoMedicosByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId): Promise<PagoMedicoI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.pagoMedicoModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('consecutivo')
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
     * Muestra todas las pagoMedicos de la BD de una sucursal
     */
    async waitingList(sucursalId, statusAsistioId): Promise<PagoMedicoI[]> {
        let startDate = new Date();
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.pagoMedicoModel.find(
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
     * Busca solo un pagoMedico mediante su ID en la BD
     * @param idPagoMedico
     */
    async findPagoMedicoById(idPagoMedico: string): Promise<PagoMedicoI> {
        return await this.pagoMedicoModel.findOne({ _id: idPagoMedico })
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
     * Muestra todo el historico de una persona buscando por su numero de telefono
     */
    async findHistoricByPaciente(pacienteId: string): Promise<PagoMedicoI[]> {
        return await this.pagoMedicoModel.find({ paciente: pacienteId }).sort('consecutivo')
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
     * Muestra todo el historico de una persona buscando por su numero de telefono
     */
    async findHistoricByMedicId(medicoId: string): Promise<PagoMedicoI[]> {
        return await this.pagoMedicoModel.find({ medico: medicoId }).sort('consecutivo')
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
     * Genera un nuevo pagoMedico en la BD
     * @param pagoMedico 
     */
    async createPagoMedico(pagoMedico: PagoMedicoI): Promise<PagoMedicoI> {
        pagoMedico.create_date = new Date();
        const newPagoMedico = new this.pagoMedicoModel(pagoMedico);
        return await newPagoMedico.save();
    }

    /**
     * Busca un pagoMedico por su Id para poder actualizarlo
     * @param idPagoMedico 
     * @param pagoMedico 
     */
    async updatePagoMedico(idPagoMedico: string, pagoMedico: PagoMedicoI): Promise<PagoMedicoI> {
        return await this.pagoMedicoModel.updateOne({ _id: idPagoMedico }, pagoMedico);
    }

    /**
     * Busca un pagoMedico por su ID y lo elimina de la BD
     * @param idPagoMedico 
     */
    async deletePagoMedico(idPagoMedico: string): Promise<PagoMedicoI> {
        return await this.pagoMedicoModel.findOneAndDelete({ _id: idPagoMedico });
    }

}
