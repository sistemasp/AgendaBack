import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { EgresoI } from 'src/interfaces/egreso.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EgresoService {

    constructor(@InjectModel('Egreso') private readonly egresoModel : Model<EgresoI>) {}

    /**
     * Muestra todos los egresos de la BD
     */
    async showAllEgresos(): Promise<EgresoI[]> {
        return await this.egresoModel.find().sort('nombre');
    }

    /**
     * Busca solo un egreso mediante su ID en la BD
     * @param idEgreso 
     */
    async findEgresoById(idEgreso: string): Promise<EgresoI> {
        return await this.egresoModel.findOne( { _id: idEgreso } );
    }

    /**
     * Busca solo un egreso mediante su numero de empleado en la BD
     * @param idEgreso 
     */
    async findEgresoByEmployeeNumber(employeeNumber: string): Promise<EgresoI> {
        return await this.egresoModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo egreso en la BD
     * @param egreso 
     */
    async createEgreso(egreso: EgresoI): Promise<EgresoI> {
        const newEgreso = new this.egresoModel(egreso);
        return await newEgreso.save();
    }

    /**
     * Busca un egreso por su Id para poder actualizarlo
     * @param idEgreso 
     * @param egreso 
     */
    async updateEgreso(idEgreso: string, egreso: EgresoI): Promise<EgresoI> {
        return await this.egresoModel.updateOne({ _id: idEgreso }, egreso);
    }

    /**
     * Busca un egreso por su ID y lo elimina de la BD
     * @param idEgreso 
     */
    async deleteEgreso(idEgreso: string ): Promise<EgresoI> {
        return await this.egresoModel.findOneAndDelete({ _id: idEgreso });
    }

}
