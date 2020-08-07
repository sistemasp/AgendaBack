import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { AcidoI } from 'src/interfaces/acido.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AcidoService {

    constructor(@InjectModel('Acido') private readonly acidoModel : Model<AcidoI>) {}

    /**
     * Muestra todos los acidos de la BD
     */
    async showAllAcidos(): Promise<AcidoI[]> {
        return await this.acidoModel.find().sort('nombre');
    }

    /**
     * Busca solo un acido mediante su ID en la BD
     * @param idAcido 
     */
    async findAcidoById(idAcido: string): Promise<AcidoI> {
        return await this.acidoModel.findOne( { _id: idAcido } );
    }

    /**
     * Busca solo un acido mediante su numero de empleado en la BD
     * @param idAcido 
     */
    async findAcidoByEmployeeNumber(employeeNumber: string): Promise<AcidoI> {
        return await this.acidoModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo acido en la BD
     * @param acido 
     */
    async createAcido(acido: AcidoI): Promise<AcidoI> {
        const newAcido = new this.acidoModel(acido);
        return await newAcido.save();
    }

    /**
     * Busca un acido por su Id para poder actualizarlo
     * @param idAcido 
     * @param acido 
     */
    async updateAcido(idAcido: string, acido: AcidoI): Promise<AcidoI> {
        return await this.acidoModel.updateOne({ _id: idAcido }, acido);
    }

    /**
     * Busca un acido por su ID y lo elimina de la BD
     * @param idAcido 
     */
    async deleteAcido(idAcido: string ): Promise<AcidoI> {
        return await this.acidoModel.findOneAndDelete({ _id: idAcido });
    }

}
