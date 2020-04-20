import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PaqueteI } from 'src/interfaces/paquete.interface';

@Injectable()
export class PaqueteService {

    constructor(@InjectModel('Paquete') private readonly paqueteModel : Model<PaqueteI>) {}

    /**
     * Muestra todos los paquetes de la BD
     */
    async showAllPacks(): Promise<PaqueteI[]> {
        return await this.paqueteModel.find();
    }

    /**
     * Busca solo un paquete mediante su ID en la BD
     * @param idPaquete 
     */
    async findPackById(idPaquete: string): Promise<PaqueteI> {
        return await this.paqueteModel.findOne( { _id: idPaquete } );
    }

    /**
     * Genera un nuevo paquete en la BD
     * @param paquete 
     */
    async createPack(paquete: PaqueteI): Promise<PaqueteI> {
        const newPack = new this.paqueteModel(paquete);
        return await newPack.save();
    }

    /**
     * Busca un paquete por su Id para poder actualizarlo
     * @param idPaquete 
     * @param paquete 
     */
    async updatePack(idPaquete: string, paquete: PaqueteI): Promise<PaqueteI> {
        return await this.paqueteModel.updateOne({ _id: idPaquete }, paquete);
    }

    /**
     * Busca un paquete por su ID y lo elimina de la BD
     * @param idPaquete 
     */
    async deletePack(idPaquete: string ): Promise<PaqueteI> {
        return await this.paqueteModel.findOneAndDelete(idPaquete);
    }
    
}
