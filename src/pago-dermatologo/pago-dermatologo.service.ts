import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PagoDermatologoI } from 'src/interfaces/pago-dermatologo.interface';
import { ConsecutivoI } from 'src/interfaces/consecutivo.interface';

@Injectable()
export class PagoDermatologoService {

    constructor(
        @InjectModel('PagoDermatologo') private readonly pagoDermatologoModel: Model<PagoDermatologoI>,
    ) { }

    /**
     * Muestra todas las pagoDermatologos de la BD
     */
    async showAllPagoDermatologos(): Promise<PagoDermatologoI[]> {
        return await this.pagoDermatologoModel.find().sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('dermatologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Muestra todas las pagoDermatologos de la BD de una sucursal
     */
    async showAllPagoDermatologosBySucursal(sucursalId): Promise<PagoDermatologoI[]> {
        return await this.pagoDermatologoModel.find({ sucursal: sucursalId }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('dermatologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Muestra todas las pagoDermatologos de la BD
     */
    async showAllPagoDermatologosBySucursalAsistio(sucursalId): Promise<PagoDermatologoI[]> {
        return await this.pagoDermatologoModel.find({
            sucursal: sucursalId, $or: [
                { status: '5eceb37a5da339304c86c993' }, //ASISTIO
                { status: '5eceb3e75da339304c86c996' }, // PENDIENTE
                { status: '5ef272fc3d7b0e41982d8241' }, // EN CONSULTORIO
                { status: '5ef2735e3d7b0e41982d8242' },  // ATENDIDO
            ]
        }).sort('consecutivo')
            .populate('sucursal')
            .populate('dermatologo')
    }

    /**
     * Muestra todos los pagos al Dermatologo del dia actual de la BD
     */
    async showTodayPagoDermatologoBySucursalTurno(dermatologoId, sucursalId, turno): Promise<PagoDermatologoI> {
        let startDate = new Date();
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.pagoDermatologoModel.findOne({
            dermatologo: dermatologoId,
            sucursal: sucursalId,
            turno: turno,
            fecha_pago: { $gte: startDate, $lte: endDate },
        }).sort('consecutivo')
            .populate('sucursal')
            .populate('dermatologo')
            .populate('consultas')
            .populate('esteticas')
            .populate('tratamientos')
            .populate('cirugias');
    }

    /**
     * Muestra todas las pagoDermatologos de la BD que correspondan a una fecha_hora
     */
    async findPagoDermatologosByDate(anio, mes, dia): Promise<PagoDermatologoI[]> {
        const date = new Date(anio, mes, dia);
        return await this.pagoDermatologoModel.find({ fecha_hora: date }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('dermatologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Muestra todas las pagoDermatologos de la BD que correspondan a una fecha_hora y una sucursal
     */
    async findPagoDermatologosByDateAndSucursal(anio, mes, dia, sucursalId): Promise<PagoDermatologoI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.pagoDermatologoModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('servicio')
            .populate('dermatologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Muestra todas las pagoDermatologos de la BD que correspondan a un pagos de un dermatologo de algun dia 
     */
    async findPagoDermatologosByPayOfDoctor(anio, mes, dia, sucursalId, dermatologoId, atendidoId): Promise<PagoDermatologoI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.pagoDermatologoModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                dermatologo: dermatologoId,
                status: atendidoId,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('pagos');
    }

    /**
     * Muestra todas las pagoDermatologos de la BD que correspondan a un pagos de un dermatologo de algun dia y turno
     * turno:
     *  1 = MATUTINO
     *  2 = VESPERTINO
     */
    async findPagoDermatologosByPayOfDoctorTurno(anio, mes, dia, sucursalId, dermatologoId, atendidoId, turno): Promise<PagoDermatologoI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(turno === 'm' ? 0 : (startDate.getDay() === 6 ? 13 : 14));
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(turno === 'm' ? (endDate.getDay() === 6 ? 12 : 13) : 23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        return await this.pagoDermatologoModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                dermatologo: dermatologoId,
                status: atendidoId,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('pagos');
    }

    /**
     * Muestra todas las pagoDermatologos de la BD que correspondan a un pagos de un dermatologo de algun dia y turno
     * turno:
     *  1 = MATUTINO
     *  2 = VESPERTINO
     * frecuencia:
     *  1 = PRIMERA VEZ
     *  2 = RECONSULTA
     */
    async findPagoDermatologosByPayOfDoctorTurnoFrecuencia(anio, mes, dia, sucursalId, dermatologoId, atendidoId, turno, frecuenciaId): Promise<PagoDermatologoI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(turno === 'm' ? 0 : (startDate.getDay() === 6 ? 13 : 14));
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(turno === 'm' ? (endDate.getDay() === 6 ? 12 : 13) : 23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        return await this.pagoDermatologoModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                dermatologo: dermatologoId,
                status: atendidoId,
                frecuencia: frecuenciaId,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('pagos');
    }

    /**
     * Muestra todas las pagoDermatologos de la BD que correspondan a una fecha_hora y una sucursal
     */
    async findPagoDermatologosByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId): Promise<PagoDermatologoI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.pagoDermatologoModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('dermatologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Muestra todas las pagoDermatologos de la BD de una sucursal
     */
    async waitingList(sucursalId, statusAsistioId): Promise<PagoDermatologoI[]> {
        let startDate = new Date();
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.pagoDermatologoModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                status: statusAsistioId,
                // pagado: true

            }).sort('hora_llegada')
            .populate('paciente')
            .populate('sucursal')
            .populate('servicio')
            .populate('dermatologo');
    }

    /**
     * Busca solo un pagoDermatologo mediante su ID en la BD
     * @param idPagoDermatologo
     */
    async findPagoDermatologoById(idPagoDermatologo: string): Promise<PagoDermatologoI> {
        return await this.pagoDermatologoModel.findOne({ _id: idPagoDermatologo })
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('dermatologo')
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
    async findHistoricByPaciente(pacienteId: string): Promise<PagoDermatologoI[]> {
        return await this.pagoDermatologoModel.find({ paciente: pacienteId }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('dermatologo')
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
    async findHistoricByMedicId(dermatologoId): Promise<PagoDermatologoI[]> {
        return await this.pagoDermatologoModel.find({ dermatologo: dermatologoId }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('dermatologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('frecuencia')
            .populate('status');
    }

    /**
     * Genera un nuevo pagoDermatologo en la BD
     * @param pagoDermatologo 
     */
    async createPagoDermatologo(pagoDermatologo: PagoDermatologoI): Promise<PagoDermatologoI> {
        pagoDermatologo.create_date = new Date();
        const newPagoDermatologo = new this.pagoDermatologoModel(pagoDermatologo);
        return await newPagoDermatologo.save();
    }

    /**
     * Busca un pagoDermatologo por su Id para poder actualizarlo
     * @param idPagoDermatologo 
     * @param pagoDermatologo 
     */
    async updatePagoDermatologo(idPagoDermatologo: string, pagoDermatologo: PagoDermatologoI): Promise<PagoDermatologoI> {
        return await this.pagoDermatologoModel.updateOne({ _id: idPagoDermatologo }, pagoDermatologo);
    }

    /**
     * Busca un pagoDermatologo por su ID y lo elimina de la BD
     * @param idPagoDermatologo 
     */
    async deletePagoDermatologo(idPagoDermatologo: string): Promise<PagoDermatologoI> {
        return await this.pagoDermatologoModel.findOneAndDelete({ _id: idPagoDermatologo });
    }

}
