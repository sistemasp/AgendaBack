import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MaterialI } from 'src/interfaces/material.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MaterialService {

    constructor(@InjectModel('Material') private readonly materialModel : Model<MaterialI>) {}

    /**
     * Muestra todos los materials de la BD
     */
    async showAllMaterials(): Promise<MaterialI[]> {
        return await this.materialModel.find().sort('nombre');
    }

    /**
     * Busca solo un material mediante su ID en la BD
     * @param idMaterial 
     */
    async findMaterialById(idMaterial: string): Promise<MaterialI> {
        return await this.materialModel.findOne( { _id: idMaterial } );
    }

    /**
     * Busca solo un material mediante su numero de empleado en la BD
     * @param idMaterial 
     */
    async findMaterialByEmployeeNumber(employeeNumber: string): Promise<MaterialI> {
        return await this.materialModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo material en la BD
     * @param material 
     */
    async createMaterial(material: MaterialI): Promise<MaterialI> {
        const newMaterial = new this.materialModel(material);
        return await newMaterial.save();
    }

    /**
     * Busca un material por su Id para poder actualizarlo
     * @param idMaterial 
     * @param material 
     */
    async updateMaterial(idMaterial: string, material: MaterialI): Promise<MaterialI> {
        return await this.materialModel.updateOne({ _id: idMaterial }, material);
    }

    /**
     * Busca un material por su ID y lo elimina de la BD
     * @param idMaterial 
     */
    async deleteMaterial(idMaterial: string ): Promise<MaterialI> {
        return await this.materialModel.findOneAndDelete({ _id: idMaterial });
    }

}
