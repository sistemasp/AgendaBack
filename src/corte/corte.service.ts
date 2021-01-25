import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CorteI } from 'src/interfaces/corte.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CorteService {

    constructor(@InjectModel('Corte') private readonly corteModel: Model<CorteI>) { }

    /**
     * Muestra todos los cortes de la BD
     */
    async showAllCortes(): Promise<CorteI[]> {
        return await this.corteModel.find()
            .sort('create_date')
            .populate('ingresos')
            .populate('egresos')
            .populate('sucursal')
            .populate('recepcionista');
    }

    /**
     * Busca solo un corte mediante su ID en la BD
     * @param idCorte s
     */
    async findCorteById(idCorte: string): Promise<CorteI> {
        return await this.corteModel.findOne({ _id: idCorte });
    }

    /**
     * Muestra todos los cortes del turno de la BD
     */
    async showCorteTodayBySucursalAndTurno(sucursalId, turno): Promise<CorteI> {
        let startDate = new Date();
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.corteModel.findOne({
            create_date: { $gte: startDate, $lte: endDate },
            turno: turno,
            sucursal: sucursalId,
        })
            .sort('create_date')
            .populate('ingresos')
            .populate('egresos')
            .populate('sucursal')
            .populate('recepcionista');
    }

    /**
     * Muestra todas las dermapens de la BD que correspondan a una fecha y una sucursal
     */
    async findCortesByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId): Promise<CorteI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.corteModel.find({
            create_date: { $gte: startDate, $lte: endDate },
            sucursal: sucursalId
        })
        .sort('create_date')
        .populate('ingresos')
        .populate('egresos')
        .populate('sucursal')
        .populate('recepcionista');
    }
    
    /**
     * Busca solo un corte mediante su numero de empleado en la BD
     * @param idCorte 
     */
    async findCorteByEmployeeNumber(employeeNumber: string): Promise<CorteI> {
        return await this.corteModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Genera un nuevo corte en la BD
     * @param corte 
     */
    async createCorte(corte: CorteI): Promise<CorteI> {
        const newCorte = new this.corteModel(corte);
        return await newCorte.save();
    }

    /**
     * Busca un corte por su Id para poder actualizarlo
     * @param idCorte 
     * @param corte 
     */
    async updateCorte(idCorte: string, corte: CorteI): Promise<CorteI> {
        return await this.corteModel.updateOne({ _id: idCorte }, corte);
    }

    /**
     * Busca un corte por su ID y lo elimina de la BD
     * @param idCorte 
     */
    async deleteCorte(idCorte: string): Promise<CorteI> {
        return await this.corteModel.findOneAndDelete({ _id: idCorte });
    }

}
