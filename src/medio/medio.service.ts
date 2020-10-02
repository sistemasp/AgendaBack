import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MedioI } from 'src/interfaces/medio.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MedioService {

    constructor(@InjectModel('Medio') private readonly medioModel : Model<MedioI>) {}

    /**
     * Muestra todos los medios de la BD
     */
    async showAllMedios(): Promise<MedioI[]> {
        return await this.medioModel.find().sort('nombre');
    }

    /**
     * Busca solo un medio mediante su ID en la BD
     * @param idMedio 
     */
    async findMedioById(idMedio: string): Promise<MedioI> {
        return await this.medioModel.findOne( { _id: idMedio } );
    }

    /**
     * Busca solo un medio mediante su numero de empleado en la BD
     * @param idMedio 
     */
    async findMedioByEmployeeNumber(employeeNumber: string): Promise<MedioI> {
        return await this.medioModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo medio en la BD
     * @param medio 
     */
    async createMedio(medio: MedioI): Promise<MedioI> {
        const newMedio = new this.medioModel(medio);
        return await newMedio.save();
    }

    /**
     * Busca un medio por su Id para poder actualizarlo
     * @param idMedio 
     * @param medio 
     */
    async updateMedio(idMedio: string, medio: MedioI): Promise<MedioI> {
        return await this.medioModel.updateOne({ _id: idMedio }, medio);
    }

    /**
     * Busca un medio por su ID y lo elimina de la BD
     * @param idMedio 
     */
    async deleteMedio(idMedio: string ): Promise<MedioI> {
        return await this.medioModel.findOneAndDelete({ _id: idMedio });
    }

}
