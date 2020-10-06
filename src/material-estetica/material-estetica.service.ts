import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MaterialEsteticaI } from 'src/interfaces/material-estetica.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MaterialEsteticaService {

    constructor(@InjectModel('MaterialEstetica') private readonly materialEsteticaModel : Model<MaterialEsteticaI>) {}

    /**
     * Muestra todos los materials de la BD
     */
    async showAllMaterialEsteticas(): Promise<MaterialEsteticaI[]> {
        return await this.materialEsteticaModel.find().sort('nombre');
    }

    /**
     * Busca solo un material mediante su ID en la BD
     * @param idMaterialEstetica 
     */
    async findMaterialEsteticaById(idMaterialEstetica: string): Promise<MaterialEsteticaI> {
        return await this.materialEsteticaModel.findOne( { _id: idMaterialEstetica } );
    }

    /**
     * Busca solo un material mediante su numero de empleado en la BD
     * @param idMaterialEstetica 
     */
    async findMaterialEsteticaByEmployeeNumber(employeeNumber: string): Promise<MaterialEsteticaI> {
        return await this.materialEsteticaModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo material en la BD
     * @param materialEstetica 
     */
    async createMaterialEstetica(materialEstetica: MaterialEsteticaI): Promise<MaterialEsteticaI> {
        const newMaterialEstetica = new this.materialEsteticaModel(materialEstetica);
        return await newMaterialEstetica.save();
    }

    /**
     * Busca un material por su Id para poder actualizarlo
     * @param idMaterialEstetica 
     * @param materialEstetica 
     */
    async updateMaterialEstetica(idMaterialEstetica: string, materialEstetica: MaterialEsteticaI): Promise<MaterialEsteticaI> {
        return await this.materialEsteticaModel.updateOne({ _id: idMaterialEstetica }, materialEstetica);
    }

    /**
     * Busca un material por su ID y lo elimina de la BD
     * @param idMaterialEstetica 
     */
    async deleteMaterialEstetica(idMaterialEstetica: string ): Promise<MaterialEsteticaI> {
        return await this.materialEsteticaModel.findOneAndDelete({ _id: idMaterialEstetica });
    }

}
