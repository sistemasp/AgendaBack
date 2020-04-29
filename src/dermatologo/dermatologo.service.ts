import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DermatologoI } from 'src/interfaces/dermatologo.interface';

@Injectable()
export class DermatologoService {

    constructor(@InjectModel('Dermatologo') private readonly dermatologoModel : Model<DermatologoI>) {}

    /**
     * Muestra todos los dermatologos de la BD
     */
    async showAllDermatologists(): Promise<DermatologoI[]> {
        return await this.dermatologoModel.find();
    }

    /**
     * Busca solo un dermatologo mediante su ID en la BD
     * @param idDermatologo 
     */
    async findDermatologistById(idDermatologo: string): Promise<DermatologoI> {
        return await this.dermatologoModel.findOne( { _id: idDermatologo } );
    }

    /**
     * Genera un nuevo dermatologo en la BD
     * @param dermatologo 
     */
    async createDermatologist(dermatologo: DermatologoI): Promise<DermatologoI> {
        const newDermatologist = new this.dermatologoModel(dermatologo);
        return await newDermatologist.save();
    }

    /**
     * Busca un dermatologo por su Id para poder actualizarlo
     * @param idDermatologo 
     * @param dermatologo 
     */
    async updateDermatologist(idDermatologo: string, dermatologo: DermatologoI): Promise<DermatologoI> {
        return await this.dermatologoModel.updateOne({ _id: idDermatologo }, dermatologo);
    }

    /**
     * Busca un dermatologo por su ID y lo elimina de la BD
     * @param idDermatologo 
     */
    async deleteDermatologist(idDermatologo: string ): Promise<DermatologoI> {
        return await this.dermatologoModel.findOneAndDelete({ _id: idDermatologo });
    }

}
