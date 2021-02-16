import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TratamientoI } from 'src/interfaces/tratamiento.interface';

@Injectable()
export class TratamientoService {

    constructor(@InjectModel('Tratamiento') private readonly tratamientoModel : Model<TratamientoI>) {}

    /**
     * Muestra todos los tratamientos de la BD
     */
    async showAllTreatments(): Promise<TratamientoI[]> {
        return await this.tratamientoModel.find();
    }

    /**
     * Busca solo un tratamiento mediante su ID en la BD
     * @param idTratamiento 
     */
    async findTreatmentById(idTratamiento: string): Promise<TratamientoI> {
        return await this.tratamientoModel.findOne( { _id: idTratamiento } );
    }

    /**
     * Busca todos los tratamientos mediante su Clave de Servicio en la BD
     * @param idTratamiento 
     */
    async findTreatmentByServicio(servicioId): Promise<TratamientoI[]> {        
        return await this.tratamientoModel.find( { servicio: servicioId } );
    }

    /**
     * Genera un nuevo tratamiento en la BD
     * @param tratamiento 
     */
    async createTreatment(tratamiento: TratamientoI): Promise<TratamientoI> {
        const newTreatment = new this.tratamientoModel(tratamiento);
        return await newTreatment.save();
    }

    /**
     * Busca un tratamiento por su Id para poder actualizarlo
     * @param idTratamiento 
     * @param tratamiento 
     */
    async updateTreatment(idTratamiento: string, tratamiento: TratamientoI): Promise<TratamientoI> {
        return await this.tratamientoModel.updateOne({ _id: idTratamiento }, tratamiento);
    }

    /**
     * Busca un tratamiento por su ID y lo elimina de la BD
     * @param idTratamiento 
     */
    async deleteTreatment(idTratamiento: string ): Promise<TratamientoI> {
        console.log('idTratamiento', idTratamiento);
        return await this.tratamientoModel.findOneAndDelete({ _id: idTratamiento });
    }

}
