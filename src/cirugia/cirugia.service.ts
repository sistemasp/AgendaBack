import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CirugiaI } from 'src/interfaces/cirugia.interface';
import { InjectModel } from '@nestjs/mongoose';
import { ConsecutivoI } from 'src/interfaces/consecutivo.interface';

@Injectable()
export class CirugiaService {

    constructor(
        @InjectModel('Cirugia') private readonly cirugiaModel: Model<CirugiaI>,
        @InjectModel('Consecutivo') private readonly consecutivoModel: Model<ConsecutivoI>) { }

    /**
     * Muestra todos los cirugias de la BD
     */
    async showAllCirugias(): Promise<CirugiaI[]> {
        return await this.cirugiaModel.find().sort('nombre')
            .populate('consulta');
    }

    /**
     * Busca solo un cirugia mediante su ID en la BD
     * @param idCirugia 
     */
    async findCirugiaById(idCirugia: string): Promise<CirugiaI> {
        return await this.cirugiaModel.findOne({ _id: idCirugia })
            .populate('consulta');
    }

    /**
     * Busca solo un cirugia mediante su ID en la BD
     * @param consultaId 
     */
    async findCirugiaByConsultaId(consultaId): Promise<CirugiaI> {
        return await this.cirugiaModel.findOne({ consulta: consultaId })
            .populate('patologo')
            .populate('consulta')
    }

    /**
     * Muestra todas las cirugias de la BD que correspondan a una fecha_hora y una sucursal
     */
    async findCirugiaByDateAndSucursal(anio, mes, dia, sucursalId): Promise<CirugiaI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.cirugiaModel.find(
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
     * Busca solo un cirugia mediante su numero de empleado en la BD
     * @param idCirugia 
     */
    async findCirugiaByEmployeeNumber(employeeNumber: string): Promise<CirugiaI> {
        return await this.cirugiaModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Muestra todas las consultas de la BD que correspondan a un pagos de un dermatologo de algun dia 
     */
    async findCirugiasByPayOfDoctor(anio, mes, dia, sucursalId, dermatologoId): Promise<CirugiaI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        return await this.cirugiaModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                dermatologo: dermatologoId,
                pagado: true,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('pagos');
    }

    /**
     * Muestra todas las cirugias de la BD que correspondan a un pagos de un dermatologo de algun dia y turno
     * turno:
     *  1 = MATUTINO
     *  2 = VESPERTINO
     */
    async findCirugiasByPayOfDoctorTurno(anio, mes, dia, sucursalId, dermatologoId, turno): Promise<CirugiaI[]> {
        let startDate = new Date(anio, mes, dia);
        startDate.setHours(turno === 'm' ? 0 : (startDate.getDay() === 6 ? 13 : 14));
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes, dia);
        endDate.setHours(turno === 'm' ? (endDate.getDay() === 6 ? 12 : 13) : 23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        return await this.cirugiaModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                dermatologo: dermatologoId,
                pagado: true,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('pagos');
    }

    /**
     * Muestra todas las cirugias de la BD que correspondan a una fecha_hora y una sucursal
     */
    async findCirugiasByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId): Promise<CirugiaI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.cirugiaModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('dermatologo')
            .populate('frecuencia')
            .populate('quien_agenda')
            .populate('tipo_cita')
            .populate(
                {
                    path: "factura",
                    populate: {
                        path: "razon_social"
                    }
                })
            .populate('servicio')
            .populate('status')
            .populate('patologo')
            .populate('consulta')
            .populate('producto')
            .populate('biopsias')
            .populate('pagos');
    }

    /**
     * Muestra todas las consultas de la BD de una sucursal
     */
    async waitingList(sucursalId, statusAsistioId): Promise<CirugiaI[]> {
        let startDate = new Date();
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.cirugiaModel.find(
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
     * Muestra todo el historico de cirugias de una persona buscando por su numero de telefono
     */
    async findCirugiasHistoricByPaciente(pacienteId): Promise<CirugiaI[]> {
        return await this.cirugiaModel.find({ paciente: pacienteId }).sort('create_date')
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
     * Muestra todas las cirugias de la BD que correspondan a un pagos de un dermatologo por horas
     */
    async findCirugiasByPayOfDoctorHoraAplicacion(sucursalId, dermatologoId, atendidoId, hora_apertura, hora_cierre): Promise<CirugiaI[]> {
        let startDate = new Date(hora_apertura);
        let endDate = new Date(hora_cierre);

        return await this.cirugiaModel.find(
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
     * Muestra todas las cirugias de la BD que correspondan a un pagos de un dermatologo por horas
     */
    async findCirugiasByPayOfDoctorHoraAplicacionPA(sucursalId, dermatologoId, canceladoCPId, hora_apertura, hora_cierre): Promise<CirugiaI[]> {
        let startDate = new Date(hora_apertura);
        let endDate = new Date(hora_cierre);

        return await this.cirugiaModel.find(
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
     * Muestra todas las cirugias de la BD que correspondan a un pagos de un dermatologo por horas
     */
    async findCirugiasByPayOfPatologoHoraAplicacion(sucursalId, patologoId, hora_apertura, hora_cierre): Promise<CirugiaI[]> {
        let startDate = new Date(hora_apertura);
        let endDate = new Date(hora_cierre);

        return await this.cirugiaModel.find(
            {
                hora_aplicacion: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                patologo: patologoId,
                hasBiopsia: true,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('tipo_cita')
            .populate('pagos');
    }

    /**
     * Genera un nuevo cirugia en la BD
     * @param cirugia 
     */
    async createCirugia(cirugia: CirugiaI): Promise<CirugiaI> {
        cirugia.create_date = new Date();
        const consecutivo = await this.consecutivoModel.find({
            sucursal: cirugia.sucursal,
        });
        cirugia.consecutivo = consecutivo.length;
        const newCirugia = new this.cirugiaModel(cirugia);
        return await newCirugia.save();
    }

    /**
     * Busca un cirugia por su Id para poder actualizarlo
     * @param idCirugia 
     * @param cirugia 
     */
    async updateCirugia(idCirugia: string, cirugia: CirugiaI): Promise<CirugiaI> {
        return await this.cirugiaModel.updateOne({ _id: idCirugia }, cirugia);
    }

    /**
     * Busca un cirugia por su ID y lo elimina de la BD
     * @param idCirugia 
     */
    async deleteCirugia(idCirugia: string): Promise<CirugiaI> {
        return await this.cirugiaModel.findOneAndDelete({ _id: idCirugia });
    }

}
