import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TipoEgresoI } from 'src/interfaces/tipo-egreso.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TipoEgresoService {

    constructor(@InjectModel('TipoEgreso') private readonly tipoEgresoModel : Model<TipoEgresoI>) {}

    /**
     * Muestra todos los tipoEgresos de la BD
     */
    async showAllTipoEgresos(): Promise<TipoEgresoI[]> {
        return await this.tipoEgresoModel.find().sort('nombre');
    }

    /**
     * Busca solo un tipoEgreso mediante su ID en la BD
     * @param idTipoEgreso 
     */
    async findTipoEgresoById(idTipoEgreso: string): Promise<TipoEgresoI> {
        return await this.tipoEgresoModel.findOne( { _id: idTipoEgreso } );
    }

    /**
     * Busca solo un tipoEgreso mediante su numero de empleado en la BD
     * @param idTipoEgreso 
     */
    async findTipoEgresoByEmployeeNumber(employeeNumber: string): Promise<TipoEgresoI> {
        return await this.tipoEgresoModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo tipoEgreso en la BD
     * @param tipoEgreso 
     */
    async createTipoEgreso(tipoEgreso: TipoEgresoI): Promise<TipoEgresoI> {
        const newTipoEgreso = new this.tipoEgresoModel(tipoEgreso);
        return await newTipoEgreso.save();
    }

    /**
     * Busca un tipoEgreso por su Id para poder actualizarlo
     * @param idTipoEgreso 
     * @param tipoEgreso 
     */
    async updateTipoEgreso(idTipoEgreso: string, tipoEgreso: TipoEgresoI): Promise<TipoEgresoI> {
        return await this.tipoEgresoModel.updateOne({ _id: idTipoEgreso }, tipoEgreso);
    }

    /**
     * Busca un tipoEgreso por su ID y lo elimina de la BD
     * @param idTipoEgreso 
     */
    async deleteTipoEgreso(idTipoEgreso: string ): Promise<TipoEgresoI> {
        return await this.tipoEgresoModel.findOneAndDelete({ _id: idTipoEgreso });
    }

}
