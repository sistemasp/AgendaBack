import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AparatologiaI } from 'src/interfaces/aparatologia.interface';
import { ConsecutivoI } from 'src/interfaces/consecutivo.interface';

@Injectable()
export class AparatologiaService {

    constructor(
        @InjectModel('Aparatologia') private readonly aparatologiaModel: Model<AparatologiaI>,
        @InjectModel('Consecutivo') private readonly consecutivoModel: Model<ConsecutivoI>
    ) { }

    /**
     * Muestra todas las aparatologias de la BD
     */
    async showAllAparatologia(): Promise<AparatologiaI[]> {
        return await this.aparatologiaModel.find().sort('fecha_hora')
            .populate('paciente')
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
     * Muestra todas las aparatologias de la BD de una sucursal
     */
    async showAllAparatologiaBySucursal(sucursalId): Promise<AparatologiaI[]> {
        return await this.aparatologiaModel.find({ sucursal: sucursalId }).sort('fecha_hora')
            .populate('paciente')
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
     * Muestra todas las aparatologias de la BD
     */
    /*async showAllAparatologiaBySucursalAsistio(sucursalId): Promise<AparatologiaI[]> {
        return await this.aparatologiaModel.find({ sucursal: sucursalId, $or: [{ status: '5eceb37a5da339304c86c993' }, { status: '5eceb3e75da339304c86c996' }] }).sort('fecha_hora')
            .populate('paciente')
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
    }*/

    /**
     * Muestra todas las aparatologias de la BD que correspondan a una fecha
     */
    async findAparatologiaByDate(anio, mes, dia): Promise<AparatologiaI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.aparatologiaModel.find({ fecha_hora: { $gte: startDate, $lte: endDate } }).sort('fecha_hora')
            .populate('paciente')
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
     * Muestra todas las aparatologias de la BD que correspondan a una fecha y una sucursal
     */
    async findAparatologiaByDateAndSucursal(anio, mes, dia, sucursalId): Promise<AparatologiaI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.aparatologiaModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('fecha_hora')
            .populate('paciente')
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
     * Muestra todas las aparatologias de la BD que correspondan a una fecha y una sucursal
     */
    async findAparatologiaByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId): Promise<AparatologiaI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.aparatologiaModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('fecha_hora')
            .populate('paciente')
            .populate('servicio')
            .populate('areas')
            .populate('sucursal')
            .populate(
                {
                    path: "factura",
                    populate: {
                        path: "razon_social"
                    }
                })
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('cosmetologa')
            .populate('dermatologo')
            .populate('frecuencia')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('producto')
            .populate('pagos')
            .populate('medio')
            .populate('status');
    }

    /**
     * Muestra todas las aparatologias de la BD que correspondan a una fecha y una sucursal
     */
    async findAparatologiaByRangeDateAndSucursalAndService(anioi, mesi, diai, aniof, mesf, diaf, sucursalId, serviceId): Promise<AparatologiaI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.aparatologiaModel.find({
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
            .populate('dermatologo')
            .populate('quien_confirma_asistencia')
            .populate('quien_confirma_llamada')
            .populate('tipo_cita')
            .populate('pagos')
            .populate('medio')
            .populate('status');
    }

    /**
     * Muestra todas las aparatologias de la BD que correspondan a una fecha y una sucursal
     */
    async findAparatologiaByDateAndSucursalAndService(anio, mes, dia, sucursalId, servicio): Promise<AparatologiaI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.aparatologiaModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId, servicio: servicio }).sort('fecha_hora')
            .populate('servicio')
            .populate('status');
    }

    /**
     * Busca solo un aparatologia mediante su ID en la BD
     * @param idAparatologia
     */
    async findDateById(idAparatologia: string): Promise<AparatologiaI> {
        return await this.aparatologiaModel.findOne({ _id: idAparatologia })
            .populate('paciente')
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
            .populate('pagos')
            .populate('medio')
            .populate('status');
    }

    /**
     * Muestra todo el historico de una persona buscando por su numero de telefono
     */
    async findHistoricByPaciente(pacienteId): Promise<AparatologiaI[]> {
        return await this.aparatologiaModel.find({ paciente: pacienteId }).sort({ 'fecha_hora': -1 })
            .populate('paciente')
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
     * Muestra todo el historico de una persona buscando por su numero de telefono
     */
    async findHistoricByPacienteAndService(pacienteId, serviceId): Promise<AparatologiaI[]> {
        return await this.aparatologiaModel.find({ paciente: pacienteId, servicio: serviceId }).sort('fecha_hora')
            .populate('paciente')
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
     * Muestra todas las consultas de la BD de una sucursal
     */
    async waitingList(sucursalId, statusAsistioId): Promise<AparatologiaI[]> {
        let startDate = new Date();
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.aparatologiaModel.find(
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
    * Muestra todas las aparatologias de la BD que correspondan a un pagos de un dermatologo de algun dia 
    */
    async findAparatologiaByPayOfDoctor(anio, mes, dia, sucursalId, dermatologoId, atendidoId): Promise<AparatologiaI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.aparatologiaModel.find(
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
     * Muestra todas las aparatologias de la BD que correspondan a un pagos de un dermatologo de algun dia y turno
     * turno:
     *  1 = MATUTINO
     *  2 = VESPERTINO
     */
    async findAparatologiaByPayOfDoctorTurno(anio, mes, dia, sucursalId, dermatologoId, atendidoId, turno): Promise<AparatologiaI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(turno === 'm' ? 0 : (startDate.getDay() === 6 ? 13 : 14));
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(turno === 'm' ? (startDate.getDay() === 6 ? 12 : 13) : 23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        return await this.aparatologiaModel.find(
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
     * Muestra todos los aparatologias de la BD que correspondan a un pagos de un dermatologo por horas
     */
    async findAparatologiasByPayOfDoctorHoraAplicacion(sucursalId, dermatologoId, atendidoId, hora_apertura, hora_cierre): Promise<AparatologiaI[]> {
        let startDate = new Date(hora_apertura);
        let endDate = new Date(hora_cierre);

        return await this.aparatologiaModel.find(
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
     * Muestra todos los aparatologias de la BD que correspondan a un pagos de un dermatologo por horas
     */
    async findAparatologiasByPayOfDoctorHoraAplicacionPA(sucursalId, dermatologoId, canceladoCPId, hora_apertura, hora_cierre): Promise<AparatologiaI[]> {
        let startDate = new Date(hora_apertura);
        let endDate = new Date(hora_cierre);

        return await this.aparatologiaModel.find(
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
     * Muestra todas las aparatologia de la BD con estatus pendiente
     */
    async showAllAparatologiasBySucursalPendiente(sucursalId, pendienteId): Promise<AparatologiaI[]> {
        return await this.aparatologiaModel.find({
            sucursal: sucursalId, $or: [
                { status: pendienteId },
            ]
        }).sort('consecutivo')
            .populate('areas')
            .populate('servicio')
            .populate('status');
    }

    /**
     * Genera un nuevo aparatologia en la BD
     * @param aparatologia 
     */
    async createDate(aparatologia: AparatologiaI): Promise<AparatologiaI> {
        const currentDate = new Date();
        const consecutivo = await this.consecutivoModel.find({
            sucursal: aparatologia.sucursal,
        });
        aparatologia.consecutivo = consecutivo.length;
        aparatologia.create_date = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(),
            currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds()));
        const newDate = new this.aparatologiaModel(aparatologia);
        return await newDate.save();

    }

    /**
     * Busca un aparatologia por su Id para poder actualizarlo
     * @param idAparatologia 
     * @param aparatologia 
     */
    async updateDate(idAparatologia: string, aparatologia: AparatologiaI): Promise<AparatologiaI> {
        return await this.aparatologiaModel.updateOne({ _id: idAparatologia }, aparatologia);
    }

    /**
     * Busca un aparatologia por su ID y lo elimina de la BD
     * @param idAparatologia 
     */
    async deleteDate(idAparatologia: string): Promise<AparatologiaI> {
        return await this.aparatologiaModel.findOneAndDelete({ _id: idAparatologia });
    }

}
