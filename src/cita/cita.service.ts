import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CitaI } from 'src/interfaces/cita.interface';
import { ConsecutivoI } from 'src/interfaces/consecutivo.interface';

@Injectable()
export class CitaService {

    constructor(
        @InjectModel('Cita') private readonly citaModel: Model<CitaI>,
        @InjectModel('Consecutivo') private readonly consecutivoModel: Model<ConsecutivoI>
    ) { }

    /**
     * Muestra todas las citas de la BD
     */
    async showAllDates(): Promise<CitaI[]> {
        return await this.citaModel.find().sort('fecha_hora')
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
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todas las citas de la BD de una sucursal
     */
    async showAllDatesBySucursal(sucursalId): Promise<CitaI[]> {
        return await this.citaModel.find({ sucursal: sucursalId }).sort('fecha_hora')
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
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todas las citas de la BD
     */
    async showAllDatesBySucursalAsistio(sucursalId): Promise<CitaI[]> {
        return await this.citaModel.find({ sucursal: sucursalId, $or: [{ status: '5eceb37a5da339304c86c993' }, { status: '5eceb3e75da339304c86c996' }] }).sort('fecha_hora')
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
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todas las citas de la BD que correspondan a una fecha
     */
    async findDatesByDate(anio, mes, dia): Promise<CitaI[]> {
        let startDate = new Date(anio, mes - 1, dia);
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes - 1, dia);
        endDate.setHours(18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.citaModel.find({ fecha_hora: { $gte: startDate, $lte: endDate } }).sort('fecha_hora')
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
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todas las citas de la BD que correspondan a una fecha y una sucursal
     */
    async findDatesByDateAndSucursal(anio, mes, dia, sucursalId): Promise<CitaI[]> {
        let startDate = new Date(anio, mes - 1, dia);
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes - 1, dia);
        endDate.setHours(17);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.citaModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('fecha_hora')
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
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todas las citas de la BD que correspondan a una fecha y una sucursal
     */
    async findDatesByRangeDateAndSucursal(startDateS, endDateS, sucursalId): Promise<CitaI[]> {
        let startDate = new Date(startDateS);
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(endDateS);
        endDate.setHours(18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.citaModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('fecha_hora')
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
            .populate('tipo_cita')
            .populate('pagos')
            .populate('medio')
            .populate('status');
    }

    /**
     * Muestra todas las citas de la BD que correspondan a una fecha y una sucursal
     */
    async findDatesByDateAndSucursalAndService(anio, mes, dia, sucursalId, servicio): Promise<CitaI[]> {
        let startDate = new Date(anio, mes - 1, dia);
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes - 1, dia);
        endDate.setHours(18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.citaModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId, servicio: servicio }).sort('fecha_hora')
            .populate('servicio')
            .populate('status');
    }

    /**
     * Busca solo un cita mediante su ID en la BD
     * @param idCita
     */
    async findDateById(idCita: string): Promise<CitaI> {
        return await this.citaModel.findOne({ _id: idCita })
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
            .populate('tipo_cita')
            .populate('pagos')
            .populate('medio')
            .populate('status');
    }

    /**
     * Muestra todo el histotico de una persona buscando por su numero de telefono
     */
    async findHistoricByPaciente(pacienteId: string): Promise<CitaI[]> {
        return await this.citaModel.find({ paciente: pacienteId }).sort('fecha_hora')
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
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todo el histotico de una persona buscando por su numero de telefono
     */
    async findHistoricByPacienteAndService(pacienteId: string, serviceId: string): Promise<CitaI[]> {
        console.log();

        return await this.citaModel.find({ paciente: pacienteId, servicio: serviceId }).sort('fecha_hora')
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
            .populate('tipo_cita')
            .populate('medio')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Muestra todas las consultas de la BD de una sucursal
     */
    async waitingList(sucursalId, statusAsistioId): Promise<CitaI[]> {
        let startDate = new Date();
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.citaModel.find(
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
     * Muestra todas las citas de la BD que correspondan a un pagos de un medico de algun dia 
     */
    async findDatesByPayOfDoctor(anio, mes, dia, sucursalId, medicoId, atendidoId): Promise<CitaI[]> {
        let startDate = new Date(anio, mes - 1, dia);
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes - 1, dia);
        endDate.setHours(18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.citaModel.find(
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
     * Muestra todas las citas de la BD que correspondan a un pagos de un medico de algun dia y turno
     * turno:
     *  1 = MATUTINO
     *  2 = VESPERTINO
     */
    async findDatesByPayOfDoctorTurno(anio, mes, dia, sucursalId, medicoId, atendidoId, turno): Promise<CitaI[]> {
        let startDate = new Date(anio, mes - 1, dia);
        startDate.setHours(turno === 'm' ? -5 : (startDate.getDay() === 6 ? 8 : 9));
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes - 1, dia);
        endDate.setHours(turno === 'm' ? (startDate.getDay() === 6 ? 7 : 8) : 18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        return await this.citaModel.find(
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
     * Genera un nuevo cita en la BD
     * @param cita 
     */
    async createDate(cita: CitaI): Promise<CitaI> {
        /*let startDate = new Date();
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);*/
        const consecutivo = await this.consecutivoModel.find({
            sucursal: cita.sucursal,
            //servicio: cita.servicio,
            //fecha_hora: { $gte: startDate, $lte: endDate }
        });
        cita.consecutivo = consecutivo.length;
        cita.create_date = new Date();
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
    async deleteDate(idCita: string): Promise<CitaI> {
        return await this.citaModel.findOneAndDelete({ _id: idCita });
    }

}
