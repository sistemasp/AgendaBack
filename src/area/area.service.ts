import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { AreaI } from 'src/interfaces/area.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AreaService {

    constructor(@InjectModel('Area') private readonly areaModel : Model<AreaI>) {}

    /**
     * Muestra todos los areas de la BD
     */
    async showAllAreas(): Promise<AreaI[]> {
        return await this.areaModel.find().sort('nombre');
    }

    /**
     * Busca solo un area mediante su ID en la BD
     * @param idArea 
     */
    async findAreaById(idArea: string): Promise<AreaI> {
        return await this.areaModel.findOne( { _id: idArea } );
    }

    /**
     * Busca solo un area mediante su numero de empleado en la BD
     * @param idArea 
     */
    async findAreaByEmployeeNumber(employeeNumber: string): Promise<AreaI> {
        return await this.areaModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Busca solo todos los tratamientos mediante su Clave de Servicio en la BD
     * @param idTratamiento 
     */
    async findAreasByTreatmentServicio(servicioId, tratamientoId): Promise<AreaI[]> {
        return await this.areaModel.find( { servicio: servicioId, tratamiento: tratamientoId } ).sort('nombre');
    }    

    /**
     * Genera un nuevo area en la BD
     * @param area 
     */
    async createArea(area: AreaI): Promise<AreaI> {
        const newArea = new this.areaModel(area);
        return await newArea.save();
    }

    /**
     * Busca un area por su Id para poder actualizarlo
     * @param idArea 
     * @param area 
     */
    async updateArea(idArea: string, area: AreaI): Promise<AreaI> {
        return await this.areaModel.updateOne({ _id: idArea }, area);
    }

    /**
     * Busca un area por su ID y lo elimina de la BD
     * @param idArea 
     */
    async deleteArea(idArea: string ): Promise<AreaI> {
        return await this.areaModel.findOneAndDelete({ _id: idArea });
    }

}
