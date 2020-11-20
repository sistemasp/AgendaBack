import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { FormaPagoI } from 'src/interfaces/forma-pago.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FormaPagoService {

    constructor(@InjectModel('FormaPago') private readonly formaPagoModel : Model<FormaPagoI>) {}

    /**
     * Muestra todos los formaPagos de la BD
     */
    async showAllFormaPagos(): Promise<FormaPagoI[]> {
        return await this.formaPagoModel.find();
    }

    /**
     * Busca solo un formaPago mediante su ID en la BD
     * @param idFormaPago 
     */
    async findFormaPagoById(idFormaPago: string): Promise<FormaPagoI> {
        return await this.formaPagoModel.findOne( { _id: idFormaPago } );
    }

    /**
     * Busca solo un formaPago mediante su numero de empleado en la BD
     * @param idFormaPago 
     */
    async findFormaPagoByEmployeeNumber(employeeNumber: string): Promise<FormaPagoI> {
        return await this.formaPagoModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo formaPago en la BD
     * @param formaPago 
     */
    async createFormaPago(formaPago: FormaPagoI): Promise<FormaPagoI> {
        const newFormaPago = new this.formaPagoModel(formaPago);
        return await newFormaPago.save();
    }

    /**
     * Busca un formaPago por su Id para poder actualizarlo
     * @param idFormaPago 
     * @param formaPago 
     */
    async updateFormaPago(idFormaPago: string, formaPago: FormaPagoI): Promise<FormaPagoI> {
        return await this.formaPagoModel.updateOne({ _id: idFormaPago }, formaPago);
    }

    /**
     * Busca un formaPago por su ID y lo elimina de la BD
     * @param idFormaPago 
     */
    async deleteFormaPago(idFormaPago: string ): Promise<FormaPagoI> {
        return await this.formaPagoModel.findOneAndDelete({ _id: idFormaPago });
    }

}
