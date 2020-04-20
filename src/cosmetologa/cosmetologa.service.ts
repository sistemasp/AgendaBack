import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CosmetologaI } from 'src/interfaces/cosmetologa.interface';

@Injectable()
export class CosmetologaService {

    constructor(@InjectModel('Cosmetologa') private readonly cosmetologaModel : Model<CosmetologaI>) {}

    /**
     * Muestra todos los cosmetologas de la BD
     */
    async showAllCosmetics(): Promise<CosmetologaI[]> {
        return await this.cosmetologaModel.find();
    }

    /**
     * Busca solo un cosmetologa mediante su ID en la BD
     * @param idCosmetologa 
     */
    async findCosmeticById(idCosmetologa: string): Promise<CosmetologaI> {
        return await this.cosmetologaModel.findOne( { _id: idCosmetologa } );
    }

    /**
     * Genera un nuevo cosmetologa en la BD
     * @param cosmetologa 
     */
    async createCosmetic(cosmetologa: CosmetologaI): Promise<CosmetologaI> {
        const newCosmetic = new this.cosmetologaModel(cosmetologa);
        return await newCosmetic.save();
    }

    /**
     * Busca un cosmetologa por su Id para poder actualizarlo
     * @param idCosmetologa 
     * @param cosmetologa 
     */
    async updateCosmetic(idCosmetologa: string, cosmetologa: CosmetologaI): Promise<CosmetologaI> {
        return await this.cosmetologaModel.updateOne({ _id: idCosmetologa }, cosmetologa);
    }

    /**
     * Busca un cosmetologa por su ID y lo elimina de la BD
     * @param idCosmetologa 
     */
    async deleteCosmetic(idCosmetologa: string ): Promise<CosmetologaI> {
        return await this.cosmetologaModel.findOneAndDelete(idCosmetologa);
    }

}
