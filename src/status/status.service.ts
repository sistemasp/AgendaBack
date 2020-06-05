import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { StatusI } from 'src/interfaces/status.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StatusService {

    constructor(@InjectModel('Status') private readonly statusModel : Model<StatusI>) {}

    /**
     * Muestra todos los status de la BD
     */
    async showAllStatus(): Promise<StatusI[]> {
        return await this.statusModel.find();
    }

    /**
     * Busca solo un status mediante su ID en la BD
     * @param idStatus 
     */
    async findStatusById(idStatus: string): Promise<StatusI> {
        return await this.statusModel.findOne( { _id: idStatus } );
    }

    /**
     * Busca solo un status mediante su numero de empleado en la BD
     * @param idStatus 
     */
    async findStatusByEmployeeNumber(employeeNumber: string): Promise<StatusI> {
        return await this.statusModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo status en la BD
     * @param status 
     */
    async createStatus(status: StatusI): Promise<StatusI> {
        const newStatus = new this.statusModel(status);
        return await newStatus.save();
    }

    /**
     * Busca un status por su Id para poder actualizarlo
     * @param idStatus 
     * @param status 
     */
    async updateStatus(idStatus: string, status: StatusI): Promise<StatusI> {
        return await this.statusModel.updateOne({ _id: idStatus }, status);
    }

    /**
     * Busca un status por su ID y lo elimina de la BD
     * @param idStatus 
     */
    async deleteStatus(idStatus: string ): Promise<StatusI> {
        return await this.statusModel.findOneAndDelete({ _id: idStatus });
    }

}
