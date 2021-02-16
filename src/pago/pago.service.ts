import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { PagoI } from 'src/interfaces/pago.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PagoService {

    constructor(@InjectModel('Pago') private readonly pagoModel : Model<PagoI>) {}

    /**
     * Muestra todos los pagos de la BD
     */
    async showAllPagos(): Promise<PagoI[]> {
        return await this.pagoModel.find();
    }

    /**
     * Busca solo un pago mediante su ID en la BD
     * @param idPago 
     */
    async findPagoById(idPago: string): Promise<PagoI> {
        return await this.pagoModel.findOne( { _id: idPago } );
    }

    /**
     * Busca solo un pago mediante su numero de empleado en la BD
     * @param idPago 
     */
    async findPagoByEmployeeNumber(employeeNumber: string): Promise<PagoI> {
        return await this.pagoModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Busca solo un pago mediante su ID en la BD
     * @param idPagos 
     */
    async findPagoByIds(idPagos: string): Promise<PagoI[]> {
        return await this.pagoModel.find( { _id: { $in: idPagos } } );
    }

    /**
     * Muestra todas las consultas de la BD que correspondan a una fecha_hora y una sucursal
     */
    async findPaysByRangeDateAndSucursal(anioi, mesi, diai, aniof, mesf, diaf, sucursalId): Promise<PagoI[]> {
        let startDate = new Date(anioi, mesi, diai);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(aniof, mesf, diaf);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.pagoModel.find( {fecha_pago: {$gte: startDate, $lte: endDate}, sucursal: sucursalId} ).sort('fecha_pago')
            .populate('paciente')
            .populate('sucursal')
            .populate('banco')
            .populate('tipo_tarjeta')
            .populate('forma_pago')
            .populate('dermatologo')
            .populate('tratamientos')
            .populate('quien_recibe_pago');
    }

    /**
     * Busca solo un pago mediante su ID de la cita en la BD
     * @param idCita 
     */
    async findPagosByCita(idCita): Promise<PagoI[]> {
        return await this.pagoModel.find( { cita: idCita } )
        .populate('paciente')
        .populate('sucursal')
        .populate('banco')
        .populate('tipo_tarjeta')
        .populate('forma_pago')
        .populate('dermatologo')
        .populate('tratamientos')
        .populate('quien_recibe_pago');
    }

    /**
     * Busca solo un pago mediante su tipo de servicio y su ID del servicio en la BD
     * @param idCita 
     */
    async findPagosByTipoServicioAndServicio(idTipoServicio, idServicio ): Promise<PagoI[]> {
        return await this.pagoModel.find( { tipo_servicio: idTipoServicio, servicio: idServicio } )
        .populate('paciente')
        .populate('sucursal')
        .populate('banco')
        .populate('tipo_tarjeta')
        .populate('forma_pago')
        .populate('dermatologo')
        .populate('tratamientos')
        .populate('quien_recibe_pago');
    }

    /**
     * Genera un nuevo pago en la BD
     * @param pago 
     */
    async createPago(pago: PagoI): Promise<PagoI> {
        const newPago = new this.pagoModel(pago);
        return await newPago.save();
    }

    /**
     * Busca un pago por su Id para poder actualizarlo
     * @param idPago 
     * @param pago 
     */
    async updatePago(idPago: string, pago: PagoI): Promise<PagoI> {
        return await this.pagoModel.updateOne({ _id: idPago }, pago);
    }

    /**
     * Busca un pago por su ID y lo elimina de la BD
     * @param idPago 
     */
    async deletePago(idPago: string ): Promise<PagoI> {
        return await this.pagoModel.findOneAndDelete({ _id: idPago });
    }

}
