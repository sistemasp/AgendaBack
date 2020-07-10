import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UsoCfdiI } from 'src/interfaces/uso-cfdi.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsoCfdiService {

    constructor(@InjectModel('UsoCfdi') private readonly usoCfdiModel : Model<UsoCfdiI>) {}

    /**
     * Muestra todos los usoCfdis de la BD
     */
    async showAllUsoCfdis(): Promise<UsoCfdiI[]> {
        return await this.usoCfdiModel.find().sort('nombre');
    }

    /**
     * Busca solo un usoCfdi mediante su ID en la BD
     * @param idUsoCfdi 
     */
    async findUsoCfdiById(idUsoCfdi: string): Promise<UsoCfdiI> {
        return await this.usoCfdiModel.findOne( { _id: idUsoCfdi } );
    }

    /**
     * Busca solo un usoCfdi mediante su numero de empleado en la BD
     * @param idUsoCfdi 
     */
    async findUsoCfdiByEmployeeNumber(employeeNumber: string): Promise<UsoCfdiI> {
        return await this.usoCfdiModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo usoCfdi en la BD
     * @param usoCfdi 
     */
    async createUsoCfdi(usoCfdi: UsoCfdiI): Promise<UsoCfdiI> {
        const newUsoCfdi = new this.usoCfdiModel(usoCfdi);
        return await newUsoCfdi.save();
    }

    /**
     * Busca un usoCfdi por su Id para poder actualizarlo
     * @param idUsoCfdi 
     * @param usoCfdi 
     */
    async updateUsoCfdi(idUsoCfdi: string, usoCfdi: UsoCfdiI): Promise<UsoCfdiI> {
        return await this.usoCfdiModel.updateOne({ _id: idUsoCfdi }, usoCfdi);
    }

    /**
     * Busca un usoCfdi por su ID y lo elimina de la BD
     * @param idUsoCfdi 
     */
    async deleteUsoCfdi(idUsoCfdi: string ): Promise<UsoCfdiI> {
        return await this.usoCfdiModel.findOneAndDelete({ _id: idUsoCfdi });
    }

}
