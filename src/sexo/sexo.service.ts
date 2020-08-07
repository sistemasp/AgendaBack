import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { SexoI } from 'src/interfaces/sexo.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SexoService {

    constructor(@InjectModel('Sexo') private readonly sexoModel : Model<SexoI>) {}

    /**
     * Muestra todos los sexos de la BD
     */
    async showAllSexos(): Promise<SexoI[]> {
        return await this.sexoModel.find().sort('nombre');
    }

    /**
     * Busca solo un sexo mediante su ID en la BD
     * @param idSexo 
     */
    async findSexoById(idSexo: string): Promise<SexoI> {
        return await this.sexoModel.findOne( { _id: idSexo } );
    }

    /**
     * Busca solo un sexo mediante su numero de empleado en la BD
     * @param idSexo 
     */
    async findSexoByEmployeeNumber(employeeNumber: string): Promise<SexoI> {
        return await this.sexoModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo sexo en la BD
     * @param sexo 
     */
    async createSexo(sexo: SexoI): Promise<SexoI> {
        const newSexo = new this.sexoModel(sexo);
        return await newSexo.save();
    }

    /**
     * Busca un sexo por su Id para poder actualizarlo
     * @param idSexo 
     * @param sexo 
     */
    async updateSexo(idSexo: string, sexo: SexoI): Promise<SexoI> {
        return await this.sexoModel.updateOne({ _id: idSexo }, sexo);
    }

    /**
     * Busca un sexo por su ID y lo elimina de la BD
     * @param idSexo 
     */
    async deleteSexo(idSexo: string ): Promise<SexoI> {
        return await this.sexoModel.findOneAndDelete({ _id: idSexo });
    }

}
