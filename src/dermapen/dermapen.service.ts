import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DermapenI } from 'src/interfaces/dermapen.interface';
import { ConsecutivoI } from 'src/interfaces/consecutivo.interface';

@Injectable()
export class DermapenService {

    constructor(
        @InjectModel('Dermapen') private readonly dermapenModel: Model<DermapenI>,
        @InjectModel('Consecutivo') private readonly consecutivoModel: Model<ConsecutivoI>
    ) { }

    /**
     * Muestra todas las dermapens de la BD
     */
    async showAllDermapen(): Promise<DermapenI[]> {
        return await this.dermapenModel.find().sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('consulta')
            .populate('areas')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('dermatologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todas las dermapens de la BD de una sucursal
     */
    async showAllDermapenBySucursal(sucursalId): Promise<DermapenI[]> {
        return await this.dermapenModel.find({ sucursal: sucursalId }).sort('fecha_hora')
            .populate('paciente')
            .populate('consulta')
            .populate('servicio')
            .populate('areas')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('dermatologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todas las dermapens de la BD
     */
    async showAllDermapenBySucursalAsistio(sucursalId): Promise<DermapenI[]> {
        return await this.dermapenModel.find({
            sucursal: sucursalId, $or: [
                { status: '5eceb37a5da339304c86c993' },
                { status: '5eceb3e75da339304c86c996' }]
        }).sort('fecha_hora')
            .populate('paciente')
            .populate('consulta')
            .populate('servicio')
            .populate('areas')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('dermatologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todos los dermapens de la BD con estatus pendiente
     */
    async showAllDermapenBySucursalPendiente(sucursalId, pendienteId): Promise<DermapenI[]> {
        return await this.dermapenModel.find({
            sucursal: sucursalId, $or: [
                { status: pendienteId },
            ]
        }).sort('consecutivo')
            .populate('areas')
            .populate('servicio')
            .populate('status');
    }

    /**
     * Muestra todas las dermapens de la BD que correspondan a una fecha
     */
    async findDermapenByDate(anio, mes, dia): Promise<DermapenI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.dermapenModel.find({ fecha_hora: { $gte: startDate, $lte: endDate } }).sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('consulta')
            .populate('areas')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('dermatologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todas las dermapens de la BD que correspondan a una fecha y una sucursal
     */
    async findDermapenByDateAndSucursal(anio, mes, dia, sucursalId): Promise<DermapenI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.dermapenModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('consulta')
            .populate('areas')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('dermatologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todas las dermapens de la BD que correspondan a una fecha y una sucursal
     */
    async findDermapenByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId): Promise<DermapenI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.dermapenModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('consulta')
            .populate('areas')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('dermatologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('pagos')
            .populate('medio')
            .populate('frecuencia')
            .populate('producto')
            .populate('status');
    }

    /**
     * Muestra todas las dermapens de la BD que correspondan a una fecha y una sucursal
     */
    async findDermapenByRangeDateAndSucursalAndService(anioi, mesi, diai, aniof, mesf, diaf, sucursalId, serviceId): Promise<DermapenI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.dermapenModel.find({
            fecha_hora: { $gte: startDate, $lte: endDate },
            sucursal: sucursalId,
            servicio: serviceId,
        }).sort('create_date')
            .populate('paciente')
            .populate('servicio')
            .populate('consulta')
            .populate('areas')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('dermatologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('pagos')
            .populate('medio')
            .populate('status');
    }

    /**
     * Muestra todas las dermapens de la BD que correspondan a una fecha y una sucursal
     */
    async findDermapenByDateAndSucursalAndService(anio, mes, dia, sucursalId, servicio): Promise<DermapenI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.dermapenModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId, servicio: servicio }).sort('fecha_hora')
            .populate('servicio')
            .populate('status');
    }

    /**
     * Busca solo un dermapen mediante su ID en la BD
     * @param idDermapen
     */
    async findDermapenById(idDermapen: string): Promise<DermapenI> {
        return await this.dermapenModel.findOne({ _id: idDermapen })
            .populate('paciente')
            .populate('servicio')
            .populate('consulta')
            .populate('areas')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('dermatologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('pagos')
            .populate('medio')
            .populate('status');
    }

    /**
     * Muestra todo el historico de una persona buscando por su numero de telefono
     */
    async findHistoricDermapenByPaciente(pacienteId: string): Promise<DermapenI[]> {
        return await this.dermapenModel.find({ paciente: pacienteId }).sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('consulta')
            .populate('areas')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('dermatologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todo el historico de una persona buscando por su numero de telefono
     */
    async findHistoricDermapenByPacienteAndService(pacienteId: string, serviceId: string): Promise<DermapenI[]> {
        return await this.dermapenModel.find({ paciente: pacienteId, servicio: serviceId }).sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('consulta')
            .populate('areas')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('dermatologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todas las consultas de la BD de una sucursal
     */
    async waitingDermapenList(sucursalId, statusAsistioId): Promise<DermapenI[]> {
        let startDate = new Date();
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.dermapenModel.find(
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
    * Muestra todas las dermapens de la BD que correspondan a un pagos de un dermatologo de algun dia 
    */
    async findDermapenByPayOfDoctor(anio, mes, dia, sucursalId, dermatologoId, atendidoId): Promise<DermapenI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.dermapenModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                dermatologo: dermatologoId,
                status: atendidoId,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('areas')
            .populate('pagos');
    }

    /**
     * Muestra todas las dermapens de la BD que correspondan a un pagos de un dermatologo de algun dia y turno
     * turno:
     *  1 = MATUTINO
     *  2 = VESPERTINO
     */
    async findDermapenByPayOfDoctorTurno(anio, mes, dia, sucursalId, dermatologoId, atendidoId, turno): Promise<DermapenI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(turno === 'm' ? 0 : (startDate.getDay() === 6 ? 13 : 14));
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(turno === 'm' ? (startDate.getDay() === 6 ? 12 : 13) : 23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        return await this.dermapenModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                dermatologo: dermatologoId,
                status: atendidoId,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('areas')
            .populate('pagos');
    }

    /**
     * Muestra todos los dermapens de la BD que correspondan a un pagos de un dermatologo por horas
     */
    async findDermapenesByPayOfDoctorHoraAplicacion(sucursalId, dermatologoId, atendidoId, hora_apertura, hora_cierre): Promise<DermapenI[]> {
        let startDate = new Date(hora_apertura);
        let endDate = new Date(hora_cierre);

        return await this.dermapenModel.find(
            {
                hora_aplicacion: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                dermatologo: dermatologoId,
                status: atendidoId,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('areas')
            .populate('tipo_cita')
            .populate('pagos');
    }

    /**
     * Muestra todos los dermapens de la BD que correspondan a un pagos de un dermatologo por horas pago anticipado
     */
    async findDermapenesByPayOfDoctorHoraAplicacionPA(sucursalId, dermatologoId, canceladoCPId, hora_apertura, hora_cierre): Promise<DermapenI[]> {
        let startDate = new Date(hora_apertura);
        let endDate = new Date(hora_cierre);

        return await this.dermapenModel.find(
            {
                hora_aplicacion: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                dermatologo: dermatologoId,
                status: canceladoCPId,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('areas')
            .populate('tipo_cita')
            .populate('pagos');
    }

    /**
     * Genera un nuevo dermapen en la BD
     * @param dermapen 
     */
    async createDermapen(dermapen: DermapenI): Promise<DermapenI> {
        const currentDate = new Date();
        const consecutivo = await this.consecutivoModel.find({
            sucursal: dermapen.sucursal,
        });
        dermapen.consecutivo = consecutivo.length;
        dermapen.create_date = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(),
            currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds()));
        const newDate = new this.dermapenModel(dermapen);
        return await newDate.save();

    }

    /**
     * Busca un dermapen por su Id para poder actualizarlo
     * @param idDermapen 
     * @param dermapen 
     */
    async updateDermapen(idDermapen: string, dermapen: DermapenI): Promise<DermapenI> {
        return await this.dermapenModel.updateOne({ _id: idDermapen }, dermapen);
    }

    /**
     * Busca un dermapen por su ID y lo elimina de la BD
     * @param idDermapen 
     */
    async deleteDate(idDermapen: string): Promise<DermapenI> {
        return await this.dermapenModel.findOneAndDelete({ _id: idDermapen });
    }

}
