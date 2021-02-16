import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IngresoI } from 'src/interfaces/ingreso.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class IngresoService {

    constructor(@InjectModel('Ingreso') private readonly ingresoModel : Model<IngresoI>) {}

    /**
     * Muestra todos los ingresos de la BD
     */
    async showAllIngresos(): Promise<IngresoI[]> {
        return await this.ingresoModel.find()
        .sort('create_date')
        .populate('recepcionista')
        .populate('tipo_ingreso')
        .populate('pago')
        .populate('sucursal')
        .populate('forma_pago')
        ;
    }

    /**
     * Busca solo un ingreso mediante su ID en la BD
     * @param idIngreso 
     */
    async findIngresoById(idIngreso: string): Promise<IngresoI> {
        return await this.ingresoModel.findOne( { _id: idIngreso } );
    }

    /**
     * Busca solo un ingreso mediante su ID en la BD
     * @param idPago 
     */
    /*async findIngresoByPago(idPago: string): Promise<IngresoI> {
        const response = idPago !== 'undefined' ? await this.ingresoModel.findOne( { pago: idPago } ) : '';
        return response;
    }*/

    /**
     * Muestra todos los ingresos de la BD
     */
    async showIngresosTodayBySucursalAndTurno(sucursalId, turno): Promise<IngresoI[]> {
        let startDate = new Date();
        startDate.setHours(turno === 'm' ? 0 : (startDate.getDay() === 6 ? 13 : 14));
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date();
        endDate.setHours(turno === 'm' ? (endDate.getDay() === 6 ? 12 : 13) : 23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.ingresoModel.find({
            create_date: { $gte: startDate, $lte: endDate },
            sucursal: sucursalId,
        })
        .sort('create_date')
        .populate('recepcionista')
        .populate('tipo_ingreso')
        .populate('sucursal')
        .populate('pago')
        .populate('forma_pago');
    }

    /**
     * Muestra todos los ingresos de la BD
     */
    async showIngresosTodayBySucursalAndHoraAplicacion(sucursalId, hora_apertura, hora_cierre): Promise<IngresoI[]> {
        let startDate = new Date(hora_apertura);
        let endDate = new Date(hora_cierre);
        return await this.ingresoModel.find({
            hora_aplicacion: { $gte: startDate, $lt: endDate },
            sucursal: sucursalId,
            pago_anticipado: false,
        })
        .sort('hora_aplicacion')
        .populate('recepcionista')
        .populate('tipo_ingreso')
        .populate('sucursal')
        .populate('pago')
        .populate('forma_pago');
    }

    /**
     * Muestra todos los ingresos de la BD
     */
    async showIngresosTodayBySucursalAndHoraAplicacionPA(sucursalId, hora_apertura, hora_cierre): Promise<IngresoI[]> {
        let startDate = new Date(hora_apertura);
        let endDate = new Date(hora_cierre);
        return await this.ingresoModel.find({
            hora_aplicacion: { $gte: startDate, $lt: endDate },
            sucursal: sucursalId,
            pago_anticipado: true,
        })
        .sort('hora_aplicacion')
        .populate('recepcionista')
        .populate('tipo_ingreso')
        .populate('sucursal')
        .populate('pago')
        .populate('forma_pago');
    }

    /**
     * Busca solo un ingreso mediante su numero de empleado en la BD
     * @param idIngreso 
     */
    async findIngresoByEmployeeNumber(employeeNumber: string): Promise<IngresoI> {
        return await this.ingresoModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo ingreso en la BD
     * @param ingreso 
     */
    async createIngreso(ingreso: IngresoI): Promise<IngresoI> {
        const newIngreso = new this.ingresoModel(ingreso);
        return await newIngreso.save();
    }

    /**
     * Busca un ingreso por su Id para poder actualizarlo
     * @param idIngreso 
     * @param ingreso 
     */
    async updateIngreso(idIngreso: string, ingreso: IngresoI): Promise<IngresoI> {
        return await this.ingresoModel.updateOne({ _id: idIngreso }, ingreso);
    }

    /**
     * Busca un ingreso por su ID y lo elimina de la BD
     * @param idIngreso 
     */
    async deleteIngreso(idIngreso: string ): Promise<IngresoI> {
        return await this.ingresoModel.findOneAndDelete({ _id: idIngreso });
    }

}
