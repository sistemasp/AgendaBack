import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CancelacionI } from 'src/interfaces/cancelacion.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CancelacionService {

    constructor(@InjectModel('Cancelacion') private readonly cancelacionModel : Model<CancelacionI>) {}

    /**
     * Muestra todos los cancelacions de la BD
     */
    async showAllCancelacions(): Promise<CancelacionI[]> {
        return await this.cancelacionModel.find().sort('nombre');
    }

    /**
     * Busca solo un cancelacion mediante su ID en la BD
     * @param idCancelacion 
     */
    async findCancelacionById(idCancelacion: string): Promise<CancelacionI> {
        return await this.cancelacionModel.findOne( { _id: idCancelacion } );
    }

    /**
     * Busca solo un cancelacion mediante su numero de empleado en la BD
     * @param idCancelacion 
     */
    async findCancelacionByEmployeeNumber(employeeNumber: string): Promise<CancelacionI> {
        return await this.cancelacionModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo cancelacion en la BD
     * @param cancelacion 
     */
    async createCancelacion(cancelacion: CancelacionI): Promise<CancelacionI> {
        const newCancelacion = new this.cancelacionModel(cancelacion);
        return await newCancelacion.save();
    }

    /**
     * Busca un cancelacion por su Id para poder actualizarlo
     * @param idCancelacion 
     * @param cancelacion 
     */
    async updateCancelacion(idCancelacion: string, cancelacion: CancelacionI): Promise<CancelacionI> {
        return await this.cancelacionModel.updateOne({ _id: idCancelacion }, cancelacion);
    }

    /**
     * Busca un cancelacion por su ID y lo elimina de la BD
     * @param idCancelacion 
     */
    async deleteCancelacion(idCancelacion: string ): Promise<CancelacionI> {
        return await this.cancelacionModel.findOneAndDelete({ _id: idCancelacion });
    }

}
