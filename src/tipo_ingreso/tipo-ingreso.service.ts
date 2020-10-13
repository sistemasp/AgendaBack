import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TipoIngresoI } from 'src/interfaces/tipo-ingreso.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TipoIngresoService {

    constructor(@InjectModel('TipoIngreso') private readonly tipoIngresoModel : Model<TipoIngresoI>) {}

    /**
     * Muestra todos los tipoIngresos de la BD
     */
    async showAllTipoIngresos(): Promise<TipoIngresoI[]> {
        return await this.tipoIngresoModel.find().sort('nombre');
    }

    /**
     * Busca solo un tipoIngreso mediante su ID en la BD
     * @param idTipoIngreso 
     */
    async findTipoIngresoById(idTipoIngreso: string): Promise<TipoIngresoI> {
        return await this.tipoIngresoModel.findOne( { _id: idTipoIngreso } );
    }

    /**
     * Busca solo un tipoIngreso mediante su numero de empleado en la BD
     * @param idTipoIngreso 
     */
    async findTipoIngresoByEmployeeNumber(employeeNumber: string): Promise<TipoIngresoI> {
        return await this.tipoIngresoModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo tipoIngreso en la BD
     * @param tipoIngreso 
     */
    async createTipoIngreso(tipoIngreso: TipoIngresoI): Promise<TipoIngresoI> {
        const newTipoIngreso = new this.tipoIngresoModel(tipoIngreso);
        return await newTipoIngreso.save();
    }

    /**
     * Busca un tipoIngreso por su Id para poder actualizarlo
     * @param idTipoIngreso 
     * @param tipoIngreso 
     */
    async updateTipoIngreso(idTipoIngreso: string, tipoIngreso: TipoIngresoI): Promise<TipoIngresoI> {
        return await this.tipoIngresoModel.updateOne({ _id: idTipoIngreso }, tipoIngreso);
    }

    /**
     * Busca un tipoIngreso por su ID y lo elimina de la BD
     * @param idTipoIngreso 
     */
    async deleteTipoIngreso(idTipoIngreso: string ): Promise<TipoIngresoI> {
        return await this.tipoIngresoModel.findOneAndDelete({ _id: idTipoIngreso });
    }

}
