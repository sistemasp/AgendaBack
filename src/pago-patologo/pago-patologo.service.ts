import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PagoPatologoI } from 'src/interfaces/pago-patologo.interface';
import { ConsecutivoI } from 'src/interfaces/consecutivo.interface';

@Injectable()
export class PagoPatologoService {

    constructor(
        @InjectModel('PagoPatologo') private readonly pagoPatologoModel: Model<PagoPatologoI>,
    ) { }

    /**
     * Muestra todas las pagoPatologos de la BD
     */
    async showAllPagoPatologos(): Promise<PagoPatologoI[]> {
        return await this.pagoPatologoModel.find().sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('patologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Muestra todas las pagoPatologos de la BD de una sucursal
     */
    async showAllPagoPatologosBySucursal(sucursalId): Promise<PagoPatologoI[]> {
        return await this.pagoPatologoModel.find({ sucursal: sucursalId }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('patologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Muestra todas las pagoPatologos de la BD
     */
    async showAllPagoPatologosBySucursalAsistio(sucursalId): Promise<PagoPatologoI[]> {
        return await this.pagoPatologoModel.find({
            sucursal: sucursalId, $or: [
                { status: '5eceb37a5da339304c86c993' }, //ASISTIO
                { status: '5eceb3e75da339304c86c996' }, // PENDIENTE
                { status: '5ef272fc3d7b0e41982d8241' }, // EN CONSULTORIO
                { status: '5ef2735e3d7b0e41982d8242' },  // ATENDIDO
            ]
        }).sort('consecutivo')
            .populate('sucursal')
            .populate('patologo')
    }

    /**
     * Muestra todos los pagos al Patologo del dia actual de la BD
     */
    async showTodayPagoPatologoBySucursalTurno(patologoId, sucursalId, turno): Promise<PagoPatologoI> {
        let startDate = new Date();
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.pagoPatologoModel.findOne({
            patologo: patologoId,
            sucursal: sucursalId,
            turno: turno,
            fecha_pago: { $gte: startDate, $lte: endDate },
        }).sort('consecutivo')
            .populate('sucursal')
            .populate('patologo')
            .populate('consultas')
            .populate('esteticas')
            .populate('tratamientos')
            .populate('cirugias');
    }

    /**
     * Muestra todas las pagoPatologos de la BD que correspondan a una fecha_hora
     */
    async findPagoPatologosByDate(anio, mes, dia): Promise<PagoPatologoI[]> {
        const date = new Date(anio, mes, dia);
        return await this.pagoPatologoModel.find({ fecha_hora: date }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('patologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Muestra todas las pagoPatologos de la BD que correspondan a una fecha_hora y una sucursal
     */
    async findPagoPatologosByDateAndSucursal(anio, mes, dia, sucursalId): Promise<PagoPatologoI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.pagoPatologoModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('servicio')
            .populate('patologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Muestra todas las pagoPatologos de la BD que correspondan a un pagos de un patologo de algun dia 
     */
    async findPagoPatologosByPayOfDoctor(anio, mes, dia, sucursalId, patologoId, atendidoId): Promise<PagoPatologoI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.pagoPatologoModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                patologo: patologoId,
                status: atendidoId,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('pagos');
    }

    /**
     * Muestra todas las pagoPatologos de la BD que correspondan a un pagos de un patologo de algun dia y turno
     * turno:
     *  1 = MATUTINO
     *  2 = VESPERTINO
     */
    async findPagoPatologosByPayOfDoctorTurno(anio, mes, dia, sucursalId, patologoId, atendidoId, turno): Promise<PagoPatologoI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(turno === 'm' ? 0 : (startDate.getDay() === 6 ? 13 : 14));
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(turno === 'm' ? (endDate.getDay() === 6 ? 12 : 13) : 23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        return await this.pagoPatologoModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                patologo: patologoId,
                status: atendidoId,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('pagos');
    }

    /**
     * Muestra todas las pagoPatologos de la BD que correspondan a un pagos de un patologo de algun dia y turno
     * turno:
     *  1 = MATUTINO
     *  2 = VESPERTINO
     * frecuencia:
     *  1 = PRIMERA VEZ
     *  2 = RECONSULTA
     */
    async findPagoPatologosByPayOfDoctorTurnoFrecuencia(anio, mes, dia, sucursalId, patologoId, atendidoId, turno, frecuenciaId): Promise<PagoPatologoI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(turno === 'm' ? 0 : (startDate.getDay() === 6 ? 13 : 14));
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(turno === 'm' ? (endDate.getDay() === 6 ? 12 : 13) : 23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        return await this.pagoPatologoModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                patologo: patologoId,
                status: atendidoId,
                frecuencia: frecuenciaId,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('pagos');
    }

    /**
     * Muestra todas las pagoPatologos de la BD que correspondan a una fecha_hora y una sucursal
     */
    async findPagoPatologosByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId): Promise<PagoPatologoI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.pagoPatologoModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('patologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Muestra todas las pagoPatologos de la BD de una sucursal
     */
    async waitingList(sucursalId, statusAsistioId): Promise<PagoPatologoI[]> {
        let startDate = new Date();
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.pagoPatologoModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                status: statusAsistioId,
                // pagado: true

            }).sort('hora_llegada')
            .populate('paciente')
            .populate('sucursal')
            .populate('servicio')
            .populate('patologo');
    }

    /**
     * Busca solo un pagoPatologo mediante su ID en la BD
     * @param idPagoPatologo
     */
    async findPagoPatologoById(idPagoPatologo: string): Promise<PagoPatologoI> {
        return await this.pagoPatologoModel.findOne({ _id: idPagoPatologo })
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('patologo')
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
    async findHistoricByPaciente(pacienteId: string): Promise<PagoPatologoI[]> {
        return await this.pagoPatologoModel.find({ paciente: pacienteId }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('patologo')
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
    async findHistoricByMedicId(patologoId): Promise<PagoPatologoI[]> {
        return await this.pagoPatologoModel.find({ patologo: patologoId }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('patologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Genera un nuevo pagoPatologo en la BD
     * @param pagoPatologo 
     */
    async createPagoPatologo(pagoPatologo: PagoPatologoI): Promise<PagoPatologoI> {
        pagoPatologo.create_date = new Date();
        const newPagoPatologo = new this.pagoPatologoModel(pagoPatologo);
        return await newPagoPatologo.save();
    }

    /**
     * Busca un pagoPatologo por su Id para poder actualizarlo
     * @param idPagoPatologo 
     * @param pagoPatologo 
     */
    async updatePagoPatologo(idPagoPatologo, pagoPatologo): Promise<PagoPatologoI> {
        return await this.pagoPatologoModel.updateOne({ _id: idPagoPatologo }, pagoPatologo);
    }

    /**
     * Busca un pagoPatologo por su ID y lo elimina de la BD
     * @param idPagoPatologo 
     */
    async deletePagoPatologo(idPagoPatologo: string): Promise<PagoPatologoI> {
        return await this.pagoPatologoModel.findOneAndDelete({ _id: idPagoPatologo });
    }

}
