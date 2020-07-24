import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TratamientoPrecioI } from 'src/interfaces/tratamiento-precio.interface';

@Injectable()
export class TratamientoPrecioService {

    constructor(@InjectModel('TratamientoPrecio') private readonly tratamientoPrecioModel : Model<TratamientoPrecioI>) {}

    /**
     * Muestra todos los tratamientoPrecios de la BD
     */
    async showAllTreatmentPrices(): Promise<TratamientoPrecioI[]> {
        return await this.tratamientoPrecioModel.find();
    }

    /**
     * Busca solo un tratamientoPrecio mediante su ID en la BD
     * @param idTratamientoPrecio 
     */
    async findTreatmentPriceById(idTratamientoPrecio: string): Promise<TratamientoPrecioI> {
        return await this.tratamientoPrecioModel.findOne( { _id: idTratamientoPrecio } );
    }

    /**
     * Genera un nuevo tratamientoPrecio en la BD
     * @param tratamientoPrecio 
     */
    async createTreatmentPrice(tratamientoPrecio: TratamientoPrecioI): Promise<TratamientoPrecioI> {
        const newTreatmentPrice = new this.tratamientoPrecioModel(tratamientoPrecio);
        return await newTreatmentPrice.save();
    }

    /**
     * Busca un tratamientoPrecio por su Id para poder actualizarlo
     * @param idTratamientoPrecio 
     * @param tratamientoPrecio 
     */
    async updateTreatmentPrice(idTratamientoPrecio: string, tratamientoPrecio: TratamientoPrecioI): Promise<TratamientoPrecioI> {
        return await this.tratamientoPrecioModel.updateOne({ _id: idTratamientoPrecio }, tratamientoPrecio);
    }

    /**
     * Busca un tratamientoPrecio por su ID y lo elimina de la BD
     * @param idTratamientoPrecio 
     */
    async deleteTreatmentPrice(idTratamientoPrecio: string ): Promise<TratamientoPrecioI> {
        console.log('idTratamientoPrecio', idTratamientoPrecio);
        return await this.tratamientoPrecioModel.findOneAndDelete({ _id: idTratamientoPrecio });
    }

}
