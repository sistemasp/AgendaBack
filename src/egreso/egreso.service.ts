import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { EgresoI } from 'src/interfaces/egreso.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EgresoService {

    constructor(@InjectModel('Egreso') private readonly egresoModel: Model<EgresoI>) { }

    /**
     * Muestra todos los egresos de la BD
     */
    async showAllEgresos(): Promise<EgresoI[]> {
        return await this.egresoModel.find().sort('nombre');
    }

    /**
     * Busca solo un egreso mediante su ID en la BD
     * @param idEgreso 
     */
    async findEgresoById(idEgreso: string): Promise<EgresoI> {
        return await this.egresoModel.findOne({ _id: idEgreso });
    }

    /**
     * Muestra todos los egresos del turno de la BD
     */
    async showEgresosTodayBySucursalAndTurno(sucursalId, turno): Promise<EgresoI[]> {
        let startDate = new Date();
        startDate.setHours(turno === 'm' ? 0 : (startDate.getDay() === 6 ? 13 : 14));
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(turno === 'm' ? (endDate.getDay() === 6 ? 12 : 13) : 23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.egresoModel.find({
            create_date: { $gte: startDate, $lte: endDate },
            sucursal: sucursalId,
        })
            .sort('create_date')
            .populate('recepcionista')
            .populate('tipo_egreso')
            .populate('sucursal')
            .populate('forma_pago');
    }

    /**
     * Muestra todos los egresos del turno de la BD
     */
    async showEgresosTodayBySucursalAndHoraAplicacion(sucursalId, hora_apertura, hora_cierre): Promise<EgresoI[]> {
        let startDate = new Date(hora_apertura);
        let endDate = new Date(hora_cierre);
        return await this.egresoModel.find({
            hora_aplicacion: { $gte: startDate, $lt: endDate },
            sucursal: sucursalId,
        })
            .sort('hora_aplicacion')
            .populate('recepcionista')
            .populate('tipo_egreso')
            .populate('sucursal')
            .populate('forma_pago');
    }

    /**
     * Muestra todas las dermapens de la BD que correspondan a una fecha y una sucursal
     */
    async findEgresosByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId): Promise<EgresoI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.egresoModel.find({ hora_aplicacion: { $gte: startDate, $lte: endDate }, sucursal: sucursalId })
            .sort('hora_aplicacion')
            .populate('recepcionista')
            .populate('tipo_egreso')
            .populate('sucursal')
            .populate('forma_pago');
    }


    /**
     * Busca solo un egreso mediante su numero de empleado en la BD
     * @param idEgreso 
     */
    async findEgresoByEmployeeNumber(employeeNumber: string): Promise<EgresoI> {
        return await this.egresoModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Genera un nuevo egreso en la BD
     * @param egreso 
     */
    async createEgreso(egreso: EgresoI): Promise<EgresoI> {
        const newEgreso = new this.egresoModel(egreso);
        return await newEgreso.save();
    }

    /**
     * Busca un egreso por su Id para poder actualizarlo
     * @param idEgreso 
     * @param egreso 
     */
    async updateEgreso(idEgreso: string, egreso: EgresoI): Promise<EgresoI> {
        return await this.egresoModel.updateOne({ _id: idEgreso }, egreso);
    }

    /**
     * Busca un egreso por su ID y lo elimina de la BD
     * @param idEgreso 
     */
    async deleteEgreso(idEgreso: string): Promise<EgresoI> {
        return await this.egresoModel.findOneAndDelete({ _id: idEgreso });
    }

}
