import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ConsecutivoI } from 'src/interfaces/consecutivo.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ConsecutivoService {

    constructor(@InjectModel('Consecutivo') private readonly consecutivoModel : Model<ConsecutivoI>) {}

    /**
     * Muestra todos los consecutivos de la BD
     */
    async showAllConsecutivos(): Promise<ConsecutivoI[]> {
        return await this.consecutivoModel.find().sort('nombre');
    }

    /**
     * Busca solo un consecutivo mediante su ID en la BD
     * @param idConsecutivo 
     */
    async findConsecutivoById(idConsecutivo: string): Promise<ConsecutivoI> {
        return await this.consecutivoModel.findOne( { _id: idConsecutivo } );
    }

    /**
     * Busca solo un consecutivo mediante su numero de empleado en la BD
     * @param idConsecutivo 
     */
    async findConsecutivoByEmployeeNumber(employeeNumber: string): Promise<ConsecutivoI> {
        return await this.consecutivoModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo consecutivo en la BD
     * @param consecutivo 
     */
    async createConsecutivo(consecutivo: ConsecutivoI): Promise<ConsecutivoI> {
        const newConsecutivo = new this.consecutivoModel(consecutivo);
        return await newConsecutivo.save();
    }

    /**
     * Busca un consecutivo por su Id para poder actualizarlo
     * @param idConsecutivo 
     * @param consecutivo 
     */
    async updateConsecutivo(idConsecutivo: string, consecutivo: ConsecutivoI): Promise<ConsecutivoI> {
        return await this.consecutivoModel.updateOne({ _id: idConsecutivo }, consecutivo);
    }

    /**
     * Busca un consecutivo por su ID y lo elimina de la BD
     * @param idConsecutivo 
     */
    async deleteConsecutivo(idConsecutivo: string ): Promise<ConsecutivoI> {
        return await this.consecutivoModel.findOneAndDelete({ _id: idConsecutivo });
    }

}
