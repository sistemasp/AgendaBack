import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { FacialI } from 'src/interfaces/facial.interface';
import { ConsecutivoI } from 'src/interfaces/consecutivo.interface';

@Injectable()
export class FacialService {

    constructor(
        @InjectModel('Facial') private readonly facialModel: Model<FacialI>,
        @InjectModel('Consecutivo') private readonly consecutivoModel: Model<ConsecutivoI>
    ) { }

    /**
     * Muestra todas las facials de la BD
     */
    async showAllFacial(): Promise<FacialI[]> {
        return await this.facialModel.find().sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('areas')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_facial')
            .populate('medio')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todas las facials de la BD de una sucursal
     */
    async showAllFacialBySucursal(sucursalId): Promise<FacialI[]> {
        return await this.facialModel.find({ sucursal: sucursalId }).sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('areas')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_facial')
            .populate('medio')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todas las facials de la BD
     */
    async showAllFacialBySucursalAsistio(sucursalId): Promise<FacialI[]> {
        return await this.facialModel.find({ sucursal: sucursalId, $or: [{ status: '5eceb37a5da339304c86c993' }, { status: '5eceb3e75da339304c86c996' }] }).sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('areas')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_facial')
            .populate('medio')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todas las facials de la BD que correspondan a una fecha
     */
    async findFacialByDate(anio, mes, dia): Promise<FacialI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.facialModel.find({ fecha_hora: { $gte: startDate, $lte: endDate } }).sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('areas')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_facial')
            .populate('medio')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todas las facials de la BD que correspondan a una fecha y una sucursal
     */
    async findFacialByDateAndSucursal(anio, mes, dia, sucursalId): Promise<FacialI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.facialModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('areas')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_facial')
            .populate('medio')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todas las facials de la BD que correspondan a una fecha y una sucursal
     */
    async findFacialByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId): Promise<FacialI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.facialModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('areas')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_facial')
            .populate('pagos')
            .populate('medio')
            .populate('status');
    }

    /**
     * Muestra todas las facials de la BD que correspondan a una fecha y una sucursal
     */
    async findFacialByRangeDateAndSucursalAndService(anioi, mesi, diai, aniof, mesf, diaf, sucursalId, serviceId): Promise<FacialI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.facialModel.find({ 
            fecha_hora: { $gte: startDate, $lte: endDate }, 
            sucursal: sucursalId,
            servicio: serviceId,
        }).sort('create_date')
            .populate('paciente')
            .populate('servicio')
            .populate('areas')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_facial')
            .populate('pagos')
            .populate('medio')
            .populate('status');
    }

    /**
     * Muestra todas las facials de la BD que correspondan a una fecha y una sucursal
     */
    async findFacialByDateAndSucursalAndService(anio, mes, dia, sucursalId, servicio): Promise<FacialI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.facialModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId, servicio: servicio }).sort('fecha_hora')
            .populate('servicio')
            .populate('status');
    }

    /**
     * Busca solo un facial mediante su ID en la BD
     * @param idFacial
     */
    async findDateById(idFacial: string): Promise<FacialI> {
        return await this.facialModel.findOne({ _id: idFacial })
            .populate('paciente')
            .populate('servicio')
            .populate('areas')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_facial')
            .populate('pagos')
            .populate('medio')
            .populate('status');
    }

    /**
     * Muestra todo el historico de una persona buscando por su numero de telefono
     */
    async findHistoricByPaciente(pacienteId: string): Promise<FacialI[]> {
        return await this.facialModel.find({ paciente: pacienteId }).sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('areas')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_facial')
            .populate('medio')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todo el historico de una persona buscando por su numero de telefono
     */
    async findHistoricByPacienteAndService(pacienteId: string, serviceId: string): Promise<FacialI[]> {
        return await this.facialModel.find({ paciente: pacienteId, servicio: serviceId }).sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('areas')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('medico')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_facial')
            .populate('medio')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todas las consultas de la BD de una sucursal
     */
    async waitingList(sucursalId, statusAsistioId): Promise<FacialI[]> {
        let startDate = new Date();
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.facialModel.find(
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
     * Muestra todas las facials de la BD que correspondan a un pagos de un medico de algun dia 
     */
    async findFacialByPayOfDoctor(anio, mes, dia, sucursalId, medicoId, atendidoId): Promise<FacialI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.facialModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                medico: medicoId,
                status: atendidoId,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('areas')
            .populate('pagos');
    }

    /**
     * Muestra todas las facials de la BD que correspondan a un pagos de un medico de algun dia y turno
     * turno:
     *  1 = MATUTINO
     *  2 = VESPERTINO
     */
    async findFacialByPayOfDoctorTurno(anio, mes, dia, sucursalId, medicoId, atendidoId, turno): Promise<FacialI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(turno === 'm' ? 0 : (startDate.getDay() === 6 ? 13 : 14));
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(turno === 'm' ? (startDate.getDay() === 6 ? 12 : 13) : 23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        return await this.facialModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                medico: medicoId,
                status: atendidoId,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('areas')
            .populate('pagos');
    }

    /**
     * Genera un nuevo facial en la BD
     * @param facial 
     */
    async createDate(facial: FacialI): Promise<FacialI> {
        const currentDate = new Date();
        const consecutivo = await this.consecutivoModel.find({
            sucursal: facial.sucursal,
        });
        facial.consecutivo = consecutivo.length;
        facial.create_date = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(),
        currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds()));
        const newDate = new this.facialModel(facial);
        return await newDate.save();

    }

    /**
     * Busca un facial por su Id para poder actualizarlo
     * @param idFacial 
     * @param facial 
     */
    async updateDate(idFacial: string, facial: FacialI): Promise<FacialI> {
        return await this.facialModel.updateOne({ _id: idFacial }, facial);
    }

    /**
     * Busca un facial por su ID y lo elimina de la BD
     * @param idFacial 
     */
    async deleteDate(idFacial: string): Promise<FacialI> {
        return await this.facialModel.findOneAndDelete({ _id: idFacial });
    }

}
