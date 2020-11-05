import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LaserI } from 'src/interfaces/laser.interface';
import { ConsecutivoI } from 'src/interfaces/consecutivo.interface';

@Injectable()
export class LaserService {

    constructor(
        @InjectModel('Laser') private readonly laserModel: Model<LaserI>,
        @InjectModel('Consecutivo') private readonly consecutivoModel: Model<ConsecutivoI>
    ) { }

    /**
     * Muestra todas las lasers de la BD
     */
    async showAllLaser(): Promise<LaserI[]> {
        return await this.laserModel.find().sort('fecha_hora')
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
     * Muestra todas las lasers de la BD de una sucursal
     */
    async showAllLaserBySucursal(sucursalId): Promise<LaserI[]> {
        return await this.laserModel.find({ sucursal: sucursalId }).sort('fecha_hora')
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
     * Muestra todas las lasers de la BD
     */
    async showAllLaserBySucursalAsistio(sucursalId): Promise<LaserI[]> {
        return await this.laserModel.find({ sucursal: sucursalId, $or: [{ status: '5eceb37a5da339304c86c993' }, { status: '5eceb3e75da339304c86c996' }] }).sort('fecha_hora')
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
     * Muestra todas las lasers de la BD que correspondan a una fecha
     */
    async findLaserByDate(anio, mes, dia): Promise<LaserI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.laserModel.find({ fecha_hora: { $gte: startDate, $lte: endDate } }).sort('fecha_hora')
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
     * Muestra todas las lasers de la BD que correspondan a una fecha y una sucursal
     */
    async findLaserByDateAndSucursal(anio, mes, dia, sucursalId): Promise<LaserI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.laserModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('fecha_hora')
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
     * Muestra todas las lasers de la BD que correspondan a una fecha y una sucursal
     */
    async findLaserByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId): Promise<LaserI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.laserModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('fecha_hora')
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
     * Muestra todas las lasers de la BD que correspondan a una fecha y una sucursal
     */
    async findLaserByRangeDateAndSucursalAndService(anioi, mesi, diai, aniof, mesf, diaf, sucursalId, serviceId): Promise<LaserI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.laserModel.find({ 
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
            .populate('tipo_cita')
            .populate('pagos')
            .populate('medio')
            .populate('status');
    }

    /**
     * Muestra todas las lasers de la BD que correspondan a una fecha y una sucursal
     */
    async findLaserByDateAndSucursalAndService(anio, mes, dia, sucursalId, servicio): Promise<LaserI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.laserModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId, servicio: servicio }).sort('fecha_hora')
            .populate('servicio')
            .populate('status');
    }

    /**
     * Busca solo un laser mediante su ID en la BD
     * @param idLaser
     */
    async findDateById(idLaser: string): Promise<LaserI> {
        return await this.laserModel.findOne({ _id: idLaser })
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
     * Muestra todo el historico de una persona buscando por su numero de telefono
     */
    async findHistoricByPaciente(pacienteId: string): Promise<LaserI[]> {
        return await this.laserModel.find({ paciente: pacienteId }).sort('fecha_hora')
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
     * Muestra todo el historico de una persona buscando por su numero de telefono
     */
    async findHistoricByPacienteAndService(pacienteId: string, serviceId: string): Promise<LaserI[]> {
        return await this.laserModel.find({ paciente: pacienteId, servicio: serviceId }).sort('fecha_hora')
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
    async waitingList(sucursalId, statusAsistioId): Promise<LaserI[]> {
        let startDate = new Date();
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.laserModel.find(
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
     * Muestra todas las lasers de la BD que correspondan a un pagos de un medico de algun dia 
     */
    async findLaserByPayOfDoctor(anio, mes, dia, sucursalId, medicoId, atendidoId): Promise<LaserI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.laserModel.find(
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
     * Muestra todas las lasers de la BD que correspondan a un pagos de un medico de algun dia y turno
     * turno:
     *  1 = MATUTINO
     *  2 = VESPERTINO
     */
    async findLaserByPayOfDoctorTurno(anio, mes, dia, sucursalId, medicoId, atendidoId, turno): Promise<LaserI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(turno === 'm' ? 0 : (startDate.getDay() === 6 ? 13 : 14));
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(turno === 'm' ? (startDate.getDay() === 6 ? 12 : 13) : 23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        return await this.laserModel.find(
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
     * Muestra todos los faciales de la BD que correspondan a un pagos de un medico por horas
     */
    async findLasersByPayOfDoctorHoraAplicacion(sucursalId, medicoId, atendidoId, hora_apertura, hora_cierre): Promise<LaserI[]> {
        let startDate = new Date(hora_apertura);
        let endDate = new Date(hora_cierre);

        return await this.laserModel.find(
            {
                hora_aplicacion: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                medico: medicoId,
                status: atendidoId,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('areas')
            .populate('tipo_cita')
            .populate('pagos');
    }

    /**
     * Genera un nuevo laser en la BD
     * @param laser 
     */
    async createDate(laser: LaserI): Promise<LaserI> {
        const currentDate = new Date();
        const consecutivo = await this.consecutivoModel.find({
            sucursal: laser.sucursal,
        });
        laser.consecutivo = consecutivo.length;
        laser.create_date = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(),
        currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds()));
        const newDate = new this.laserModel(laser);
        return await newDate.save();

    }

    /**
     * Busca un laser por su Id para poder actualizarlo
     * @param idLaser 
     * @param laser 
     */
    async updateDate(idLaser: string, laser: LaserI): Promise<LaserI> {
        return await this.laserModel.updateOne({ _id: idLaser }, laser);
    }

    /**
     * Busca un laser por su ID y lo elimina de la BD
     * @param idLaser 
     */
    async deleteDate(idLaser: string): Promise<LaserI> {
        return await this.laserModel.findOneAndDelete({ _id: idLaser });
    }

}
