import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BiopsiaI } from 'src/interfaces/biopsia.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BiopsiaService {

    constructor(@InjectModel('Biopsia') private readonly biopsiaModel : Model<BiopsiaI>) {}

    /**
     * Muestra todos los biopsias de la BD
     */
    async showAllBiopsias(): Promise<BiopsiaI[]> {
        return await this.biopsiaModel.find().sort('nombre');
    }

    /**
     * Busca solo un biopsia mediante su ID en la BD
     * @param idBiopsia 
     */
    async findBiopsiaById(idBiopsia: string): Promise<BiopsiaI> {
        return await this.biopsiaModel.findOne( { _id: idBiopsia } );
    }

    /**
     * Busca solo un biopsia mediante su numero de empleado en la BD
     * @param idBiopsia 
     */
    async findBiopsiaByEmployeeNumber(employeeNumber: string): Promise<BiopsiaI> {
        return await this.biopsiaModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo biopsia en la BD
     * @param biopsia 
     */
    async createBiopsia(biopsia: BiopsiaI): Promise<BiopsiaI> {
        const newBiopsia = new this.biopsiaModel(biopsia);
        return await newBiopsia.save();
    }

    /**
     * Busca un biopsia por su Id para poder actualizarlo
     * @param idBiopsia 
     * @param biopsia 
     */
    async updateBiopsia(idBiopsia: string, biopsia: BiopsiaI): Promise<BiopsiaI> {
        return await this.biopsiaModel.updateOne({ _id: idBiopsia }, biopsia);
    }

    /**
     * Busca un biopsia por su ID y lo elimina de la BD
     * @param idBiopsia 
     */
    async deleteBiopsia(idBiopsia: string ): Promise<BiopsiaI> {
        return await this.biopsiaModel.findOneAndDelete({ _id: idBiopsia });
    }

}
