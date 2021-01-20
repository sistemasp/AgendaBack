import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { EsteticaI } from 'src/interfaces/estetica.interface';
import { InjectModel } from '@nestjs/mongoose';
import { ConsecutivoI } from 'src/interfaces/consecutivo.interface';

@Injectable()
export class EsteticaService {

    constructor(
        @InjectModel('Estetica') private readonly esteticaModel: Model<EsteticaI>,
        @InjectModel('Consecutivo') private readonly consecutivoModel: Model<ConsecutivoI>) { }

    /**
     * Muestra todos los esteticas de la BD
     */
    async showAllEsteticas(): Promise<EsteticaI[]> {
        return await this.esteticaModel.find().sort('nombre')
            .populate('consulta')
            .populate('status')
            .populate('servicio');
    }

    /**
     * Busca solo un estetica mediante su ID en la BD
     * @param idEstetica 
     */
    async findEsteticaById(idEstetica: string): Promise<EsteticaI> {
        return await this.esteticaModel.findOne({ _id: idEstetica })
            .populate('consulta')
            .populate('status')
            .populate('servicio');
    }

    /**
     * Busca solo un estetica mediante su ID en la BD
     * @param consultaId 
     */
    async findEsteticaByConsultaId(consultaId: string): Promise<EsteticaI> {
        return await this.esteticaModel.findOne({ consulta: consultaId })
            .populate('consulta')
            .populate('status')
            .populate('servicio');
    }

    /**
     * Busca solo un estetica mediante su numero de empleado en la BD
     * @param idEstetica 
     */
    async findEsteticaByEmployeeNumber(employeeNumber: string): Promise<EsteticaI> {
        return await this.esteticaModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Muestra todas las consultas de la BD que correspondan a un pagos de un dermatologo de algun dia 
     */
    async findEsteticasByPayOfDoctor(anio, mes, dia, sucursalId, dermatologoId): Promise<EsteticaI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        return await this.esteticaModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                dermatologo: dermatologoId,
                pagado: true,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('servicio')
            .populate('status')
            .populate('pagos');
    }

    /**
     * Muestra todas las esteticas de la BD que correspondan a un pagos de un dermatologo de algun dia y turno
     * turno:
     *  1 = MATUTINO
     *  2 = VESPERTINO
     */
    async findEsteticasByPayOfDoctorTurno(anio, mes, dia, sucursalId, dermatologoId, turno): Promise<EsteticaI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(turno === 'm' ? 0 : (startDate.getDay() === 6 ? 13 : 14));
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(turno === 'm' ? (endDate.getDay() === 6 ? 12 : 13) : 23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        return await this.esteticaModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                dermatologo: dermatologoId,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('status')
            .populate('pagos');
    }

    /**
     * Muestra todas las esteticas de la BD que correspondan a una fecha_hora y una sucursal
     */
    async findEsteticasByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId): Promise<EsteticaI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.esteticaModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('consulta')
            .populate('servicio')
            .populate('frecuencia')
            .populate('quien_agenda')
            .populate('dermatologo')
            .populate('tipo_cita')
            .populate('producto')
            .populate('pagos');
    }

    /**
     * Muestra todo el historico de biopsias de una persona buscando por su numero de telefono
     */
    async findEsteticasHistoricByPaciente(pacienteId: string): Promise<EsteticaI[]> {
        return await this.esteticaModel.find({ paciente: pacienteId }).sort('create_date')
            .populate('paciente')
            .populate('consulta')
            .populate('patologo')
            .populate('sucursal')
            .populate('quien_entrega')
            .populate('quien_recibe')
            .populate('a_quien_se_entrega')
            .populate('quien_lo_entrega')
            .populate('dermatologo')
            .populate('pagos')
            .populate('status');
    }

    /**
     * Genera un nuevo estetica en la BD
     * @param estetica 
     */
    async createEstetica(estetica: EsteticaI): Promise<EsteticaI> {
        estetica.create_date = new Date();
        const consecutivo = await this.consecutivoModel.find({
            sucursal: estetica.sucursal,
        });
        estetica.consecutivo = consecutivo.length;
        const newEstetica = new this.esteticaModel(estetica);
        return await newEstetica.save();
    }

    /**
     * Muestra todas las esteticas de la BD de una sucursal
     */
    async waitingList(sucursalId, statusAsistioId): Promise<EsteticaI[]> {
        let startDate = new Date();
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.esteticaModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                status: statusAsistioId,
                // pagado: true
            }).sort('hora_llegada')
            .populate('paciente')
            .populate('sucursal')
            .populate('consulta')
            .populate('servicio')
            .populate('status')
            .populate('dermatologo');
    }

    /**
     * Muestra todas las esteticas de la BD que correspondan a una fecha_hora y una sucursal
     */
    async findEsteticaByDateAndSucursal(anio, mes, dia, sucursalId): Promise<EsteticaI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.esteticaModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId
            }).sort('consecutivo')
            .populate('paciente')
            .populate('consulta')
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
     * Muestra todas las cirugias de la BD que correspondan a un pagos de un dermatologo por horas
     */
    async findEsteticasByPayOfDoctorHoraAplicacion(sucursalId, dermatologoId, atendidoId, hora_apertura, hora_cierre): Promise<EsteticaI[]> {
        let startDate = new Date(hora_apertura);
        let endDate = new Date(hora_cierre);

        return await this.esteticaModel.find(
            {
                hora_aplicacion: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                dermatologo: dermatologoId,
                status: atendidoId,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('tipo_cita')
            .populate('pagos');
    }

     /**
     * Muestra todas las cirugias de la BD que correspondan a un pagos de un dermatologo por horas pago anticipado
     */
    async findEsteticasByPayOfDoctorHoraAplicacionPA(sucursalId, dermatologoId, canceladoCPId, hora_apertura, hora_cierre): Promise<EsteticaI[]> {
        let startDate = new Date(hora_apertura);
        let endDate = new Date(hora_cierre);

        return await this.esteticaModel.find(
            {
                hora_aplicacion: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                dermatologo: dermatologoId,
                status: canceladoCPId,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('tipo_cita')
            .populate('pagos');
    }

    /**
     * Busca un estetica por su Id para poder actualizarlo
     * @param idEstetica 
     * @param estetica 
     */
    async updateEstetica(idEstetica: string, estetica: EsteticaI): Promise<EsteticaI> {
        return await this.esteticaModel.updateOne({ _id: idEstetica }, estetica);
    }

    /**
     * Busca un estetica por su ID y lo elimina de la BD
     * @param idEstetica 
     */
    async deleteEstetica(idEstetica: string): Promise<EsteticaI> {
        return await this.esteticaModel.findOneAndDelete({ _id: idEstetica });
    }

}
