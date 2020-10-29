import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BiopsiaI } from 'src/interfaces/biopsia.interface';
import { InjectModel } from '@nestjs/mongoose';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable()
export class BiopsiaService {

    constructor(@InjectModel('Biopsia') private readonly biopsiaModel: Model<BiopsiaI>) { }

    /**
     * Muestra todos los biopsias de la BD
     */
    async showAllBiopsias(): Promise<BiopsiaI[]> {
        return await this.biopsiaModel.find().sort('nombre');
    }

    /**
     * Busca solo un biopsia mediante su ID en la BD
     * @param idBiopsia 
     */
    async findBiopsiaById(idBiopsia: string): Promise<BiopsiaI> {
        return await this.biopsiaModel.findOne({ _id: idBiopsia });
    }

    /**
     * Busca solo un biopsia mediante su numero de empleado en la BD
     * @param idBiopsia 
     */
    async findBiopsiaByEmployeeNumber(employeeNumber: string): Promise<BiopsiaI> {
        return await this.biopsiaModel.findOne({ numero_empleado: employeeNumber });
    }

    /**
     * Muestra todas las biopsias de la BD que correspondan a una fecha_hora y una sucursal
     */
    async findBiopsiasByRangeDateAndSucursal(startDateS, endDateS, sucursalId): Promise<BiopsiaI[]> {
        let startDate = new Date(startDateS);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(endDateS);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        return await this.biopsiaModel.find({ fecha_realizacion: { $gte: startDate, $lte: endDate }, sucursal: sucursalId }).sort('consecutivo')
            .populate('paciente')
            .populate('sucursal')
            .populate('medico')
            .populate('patologo')
            .populate('consulta');
    }

    /**
     * Genera un nuevo biopsia en la BD
     * @param biopsias 
     */
    async createBiopsia(biopsias: BiopsiaI[]): Promise<BiopsiaI[]> {
        const respBiopsias = Promise.all(biopsias.map(async (biopsia) => {
            biopsia.create_date = new Date();
            const newBiopsia = new this.biopsiaModel(biopsia);
            const newBiop = await newBiopsia.save();
            return newBiop;
        }));
        return respBiopsias;
    }

    /**
     * Busca un biopsia por su Id para poder actualizarlo
     * @param idBiopsia 
     * @param biopsia 
     */
    async updateBiopsia(idBiopsia: string, biopsia: BiopsiaI): Promise<BiopsiaI> {
        return await this.biopsiaModel.updateOne({ _id: idBiopsia }, biopsia);
    }

    /**
     * Busca un biopsia por su ID y lo elimina de la BD
     * @param idBiopsia 
     */
    async deleteBiopsia(idBiopsia: string): Promise<BiopsiaI> {
        return await this.biopsiaModel.findOneAndDelete({ _id: idBiopsia });
    }

}
