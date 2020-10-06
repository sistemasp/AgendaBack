import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TipoEsteticaI } from 'src/interfaces/tipo-estetica.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TipoEsteticaService {

    constructor(@InjectModel('TipoEstetica') private readonly tipoEsteticaModel : Model<TipoEsteticaI>) {}

    /**
     * Muestra todos los tipoEsteticas de la BD
     */
    async showAllTipoEsteticas(): Promise<TipoEsteticaI[]> {
        return await this.tipoEsteticaModel.find();
    }

    /**
     * Busca solo un tipoEstetica mediante su ID en la BD
     * @param idTipoEstetica 
     */
    async findTipoEsteticaById(idTipoEstetica: string): Promise<TipoEsteticaI> {
        return await this.tipoEsteticaModel.findOne( { _id: idTipoEstetica } );
    }

    /**
     * Busca solo un tipoEstetica mediante su numero de empleado en la BD
     * @param idTipoEstetica 
     */
    async findTipoEsteticaByEmployeeNumber(employeeNumber: string): Promise<TipoEsteticaI> {
        return await this.tipoEsteticaModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo tipoEstetica en la BD
     * @param tipoEstetica 
     */
    async createTipoEstetica(tipoEstetica: TipoEsteticaI): Promise<TipoEsteticaI> {
        const newTipoEstetica = new this.tipoEsteticaModel(tipoEstetica);
        return await newTipoEstetica.save();
    }

    /**
     * Busca un tipoEstetica por su Id para poder actualizarlo
     * @param idTipoEstetica 
     * @param tipoEstetica 
     */
    async updateTipoEstetica(idTipoEstetica: string, tipoEstetica: TipoEsteticaI): Promise<TipoEsteticaI> {
        return await this.tipoEsteticaModel.updateOne({ _id: idTipoEstetica }, tipoEstetica);
    }

    /**
     * Busca un tipoEstetica por su ID y lo elimina de la BD
     * @param idTipoEstetica 
     */
    async deleteTipoEstetica(idTipoEstetica: string ): Promise<TipoEsteticaI> {
        return await this.tipoEsteticaModel.findOneAndDelete({ _id: idTipoEstetica });
    }

}
