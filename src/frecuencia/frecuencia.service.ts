import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { FrecuenciaI } from 'src/interfaces/frecuencia.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FrecuenciaService {

    constructor(@InjectModel('Frecuencia') private readonly frecuenciaModel : Model<FrecuenciaI>) {}

    /**
     * Muestra todos los frecuencias de la BD
     */
    async showAllFrecuencias(): Promise<FrecuenciaI[]> {
        return await this.frecuenciaModel.find().sort('nombre');
    }

    /**
     * Busca solo un frecuencia mediante su ID en la BD
     * @param idFrecuencia 
     */
    async findFrecuenciaById(idFrecuencia: string): Promise<FrecuenciaI> {
        return await this.frecuenciaModel.findOne( { _id: idFrecuencia } );
    }

    /**
     * Busca solo un frecuencia mediante su numero de empleado en la BD
     * @param idFrecuencia 
     */
    async findFrecuenciaByEmployeeNumber(employeeNumber: string): Promise<FrecuenciaI> {
        return await this.frecuenciaModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo frecuencia en la BD
     * @param frecuencia 
     */
    async createFrecuencia(frecuencia: FrecuenciaI): Promise<FrecuenciaI> {
        const newFrecuencia = new this.frecuenciaModel(frecuencia);
        return await newFrecuencia.save();
    }

    /**
     * Busca un frecuencia por su Id para poder actualizarlo
     * @param idFrecuencia 
     * @param frecuencia 
     */
    async updateFrecuencia(idFrecuencia: string, frecuencia: FrecuenciaI): Promise<FrecuenciaI> {
        return await this.frecuenciaModel.updateOne({ _id: idFrecuencia }, frecuencia);
    }

    /**
     * Busca un frecuencia por su ID y lo elimina de la BD
     * @param idFrecuencia 
     */
    async deleteFrecuencia(idFrecuencia: string ): Promise<FrecuenciaI> {
        return await this.frecuenciaModel.findOneAndDelete({ _id: idFrecuencia });
    }

}
