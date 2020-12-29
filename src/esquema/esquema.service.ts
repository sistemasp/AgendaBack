import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { EsquemaI } from 'src/interfaces/esquema.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EsquemaService {

    constructor(@InjectModel('Esquema') private readonly esquemaModel : Model<EsquemaI>) {}

    /**
     * Muestra todos los esquemas de la BD
     */
    async showAllEsquemas(): Promise<EsquemaI[]> {
        return await this.esquemaModel.find().sort('nombre');
    }

    /**
     * Busca solo un esquema mediante su ID en la BD
     * @param idEsquema 
     */
    async findEsquemaById(idEsquema: string): Promise<EsquemaI> {
        return await this.esquemaModel.findOne( { _id: idEsquema } );
    }

    /**
     * Busca solo un esquema mediante su numero de empleado en la BD
     * @param idEsquema 
     */
    async findEsquemaByEmployeeNumber(employeeNumber: string): Promise<EsquemaI> {
        return await this.esquemaModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo esquema en la BD
     * @param esquema 
     */
    async createEsquema(esquema: EsquemaI): Promise<EsquemaI> {
        esquema.create_date = new Date();
        const newEsquema = new this.esquemaModel(esquema);
        return await newEsquema.save();
    }

    /**
     * Busca un esquema por su Id para poder actualizarlo
     * @param idEsquema 
     * @param esquema 
     */
    async updateEsquema(idEsquema: string, esquema: EsquemaI): Promise<EsquemaI> {
        return await this.esquemaModel.updateOne({ _id: idEsquema }, esquema);
    }

    /**
     * Busca un esquema por su ID y lo elimina de la BD
     * @param idEsquema 
     */
    async deleteEsquema(idEsquema: string ): Promise<EsquemaI> {
        return await this.esquemaModel.findOneAndDelete({ _id: idEsquema });
    }

}
