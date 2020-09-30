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
    async findCirugiaByConsultaId(consultaId: string): Promise<CirugiaI> {
        return await this.cirugiaModel.findOne({ consulta: consultaId })
            .populate('patologo')
            .populate('consulta');

    }

    /**
     * Busca solo un cirugia mediante su numero de empleado en la BD
     * @param idCirugia 
     */
    async findCirugiaByEmployeeNumber(employeeNumber: string): Promise<CirugiaI> {
        return await this.cirugiaModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Muestra todas las consultas de la BD que correspondan a un pagos de un medico de algun dia 
     */
    async findCirugiasByPayOfDoctor(anio, mes, dia, sucursalId, medicoId): Promise<CirugiaI[]> {
        let startDate = new Date(anio, mes - 1, dia);
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes - 1, dia);
        endDate.setHours(18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        return await this.cirugiaModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                medico: medicoId,
                pagado: true,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('pagos');
    }

    /**
     * Muestra todas las cirugias de la BD que correspondan a un pagos de un medico de algun dia y turno
     * turno:
     *  1 = MATUTINO
     *  2 = VESPERTINO
     */
    async findCirugiasByPayOfDoctorTurno(anio, mes, dia, sucursalId, medicoId, turno): Promise<CirugiaI[]> {
        let startDate = new Date(anio, mes - 1, dia);
        startDate.setHours(turno === 'm' ? -5 : (startDate.getDay() === 6 ? 8 : 9));
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(anio, mes - 1, dia);
        endDate.setHours(turno === 'm' ? (startDate.getDay() === 6 ? 7 : 8) : 18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);

        return await this.cirugiaModel.find(
            {
                fecha_hora: { $gte: startDate, $lte: endDate },
                sucursal: sucursalId,
                medico: medicoId,
            }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('pagos');
    }

    /**
     * Muestra todas las cirugias de la BD que correspondan a una fecha_hora y una sucursal
     */
    async findCirugiasByRangeDateAndSucursal(startDateS, endDateS, sucursalId): Promise<CirugiaI[]> {
        let startDate = new Date(startDateS);
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(endDateS);
        endDate.setHours(18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.cirugiaModel.find({ fecha_hora: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('patologo')
            .populate('consulta')
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
