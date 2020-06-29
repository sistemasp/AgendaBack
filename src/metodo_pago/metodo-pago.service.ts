import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MetodoPagoI } from 'src/interfaces/metodo-pago.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MetodoPagoService {

    constructor(@InjectModel('MetodoPago') private readonly metodoPagoModel : Model<MetodoPagoI>) {}

    /**
     * Muestra todos los metodoPagos de la BD
     */
    async showAllMetodoPagos(): Promise<MetodoPagoI[]> {
        return await this.metodoPagoModel.find();
    }

    /**
     * Busca solo un metodoPago mediante su ID en la BD
     * @param idMetodoPago 
     */
    async findMetodoPagoById(idMetodoPago: string): Promise<MetodoPagoI> {
        return await this.metodoPagoModel.findOne( { _id: idMetodoPago } );
    }

    /**
     * Busca solo un metodoPago mediante su numero de empleado en la BD
     * @param idMetodoPago 
     */
    async findMetodoPagoByEmployeeNumber(employeeNumber: string): Promise<MetodoPagoI> {
        return await this.metodoPagoModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo metodoPago en la BD
     * @param metodoPago 
     */
    async createMetodoPago(metodoPago: MetodoPagoI): Promise<MetodoPagoI> {
        const newMetodoPago = new this.metodoPagoModel(metodoPago);
        return await newMetodoPago.save();
    }

    /**
     * Busca un metodoPago por su Id para poder actualizarlo
     * @param idMetodoPago 
     * @param metodoPago 
     */
    async updateMetodoPago(idMetodoPago: string, metodoPago: MetodoPagoI): Promise<MetodoPagoI> {
        return await this.metodoPagoModel.updateOne({ _id: idMetodoPago }, metodoPago);
    }

    /**
     * Busca un metodoPago por su ID y lo elimina de la BD
     * @param idMetodoPago 
     */
    async deleteMetodoPago(idMetodoPago: string ): Promise<MetodoPagoI> {
        return await this.metodoPagoModel.findOneAndDelete({ _id: idMetodoPago });
    }

}
