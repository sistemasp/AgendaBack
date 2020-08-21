import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CirugiaI } from 'src/interfaces/cirugia.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CirugiaService {

    constructor(@InjectModel('Cirugia') private readonly cirugiaModel: Model<CirugiaI>) { }

    /**
     * Muestra todos los cirugias de la BD
     */
    async showAllCirugias(): Promise<CirugiaI[]> {
        return await this.cirugiaModel.find().sort('nombre')
            .populate('consulta');
    }

    /**
     * Busca solo un cirugia mediante su ID en la BD
     * @param idCirugia 
     */
    async findCirugiaById(idCirugia: string): Promise<CirugiaI> {
        return await this.cirugiaModel.findOne({ _id: idCirugia })
            .populate('consulta');
    }

    /**
     * Busca solo un cirugia mediante su ID en la BD
     * @param consultaId 
     */
    async findCirugiaByConsultaId(consultaId: string): Promise<CirugiaI> {
        return await this.cirugiaModel.findOne({ consulta: consultaId })
            .populate('consulta');
    }

    /**
     * Busca solo un cirugia mediante su numero de empleado en la BD
     * @param idCirugia 
     */
    async findCirugiaByEmployeeNumber(employeeNumber: string): Promise<CirugiaI> {
        return await this.cirugiaModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Genera un nuevo cirugia en la BD
     * @param cirugia 
     */
    async createCirugia(cirugia: CirugiaI): Promise<CirugiaI> {
        const newCirugia = new this.cirugiaModel(cirugia);
        return await newCirugia.save();
    }

    /**
     * Busca un cirugia por su Id para poder actualizarlo
     * @param idCirugia 
     * @param cirugia 
     */
    async updateCirugia(idCirugia: string, cirugia: CirugiaI): Promise<CirugiaI> {
        return await this.cirugiaModel.updateOne({ _id: idCirugia }, cirugia);
    }

    /**
     * Busca un cirugia por su ID y lo elimina de la BD
     * @param idCirugia 
     */
    async deleteCirugia(idCirugia: string): Promise<CirugiaI> {
        return await this.cirugiaModel.findOneAndDelete({ _id: idCirugia });
    }

}
