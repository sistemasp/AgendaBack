import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IngresoI } from 'src/interfaces/ingreso.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class IngresoService {

    constructor(@InjectModel('Ingreso') private readonly ingresoModel : Model<IngresoI>) {}

    /**
     * Muestra todos los ingresos de la BD
     */
    async showAllIngresos(): Promise<IngresoI[]> {
        return await this.ingresoModel.find()
        .sort('create_date')
        .populate('recepcionista')
        .populate('tipo_ingreso')
        .populate('sucursal')
        .populate('metodo_pago')
        ;
    }

    /**
     * Busca solo un ingreso mediante su ID en la BD
     * @param idIngreso 
     */
    async findIngresoById(idIngreso: string): Promise<IngresoI> {
        return await this.ingresoModel.findOne( { _id: idIngreso } );
    }

    /**
     * Busca solo un ingreso mediante su numero de empleado en la BD
     * @param idIngreso 
     */
    async findIngresoByEmployeeNumber(employeeNumber: string): Promise<IngresoI> {
        return await this.ingresoModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo ingreso en la BD
     * @param ingreso 
     */
    async createIngreso(ingreso: IngresoI): Promise<IngresoI> {
        const newIngreso = new this.ingresoModel(ingreso);
        return await newIngreso.save();
    }

    /**
     * Busca un ingreso por su Id para poder actualizarlo
     * @param idIngreso 
     * @param ingreso 
     */
    async updateIngreso(idIngreso: string, ingreso: IngresoI): Promise<IngresoI> {
        return await this.ingresoModel.updateOne({ _id: idIngreso }, ingreso);
    }

    /**
     * Busca un ingreso por su ID y lo elimina de la BD
     * @param idIngreso 
     */
    async deleteIngreso(idIngreso: string ): Promise<IngresoI> {
        return await this.ingresoModel.findOneAndDelete({ _id: idIngreso });
    }

}
