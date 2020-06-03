import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ConsultorioI } from 'src/interfaces/consultorio.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ConsultorioService {

    constructor(@InjectModel('Consultorio') private readonly consultorioModel : Model<ConsultorioI>) {}

    /**
     * Muestra todos los consultorios de la BD
     */
    async showAllSurgeries(): Promise<ConsultorioI[]> {
        return await this.consultorioModel.find();
    }

    /**
     * Busca solo un consultorio mediante su ID en la BD
     * @param idConsultorio 
     */
    async findSurgeryById(idConsultorio: string): Promise<ConsultorioI> {
        return await this.consultorioModel.findOne( { _id: idConsultorio } );
    }

    /**
     * Busca solo un consultorio mediante su ID de la sucursal en la BD
     * @param sucursalId 
     */
    async findSurgeryBySucursalId(sucursalId: string): Promise<ConsultorioI[]> {
        return await this.consultorioModel.find( { sucursal: sucursalId } );
    }

    /**
     * Genera un nuevo consultorio en la BD
     * @param consultorio 
     */
    async createSurgery(consultorio: ConsultorioI): Promise<ConsultorioI> {
        const newSurgery = new this.consultorioModel(consultorio);
        return await newSurgery.save();
    }

    /**
     * Busca un consultorio por su Id para poder actualizarlo
     * @param idConsultorio 
     * @param consultorio 
     */
    async updateSurgery(idConsultorio: string, consultorio: ConsultorioI): Promise<ConsultorioI> {
        return await this.consultorioModel.updateOne({ _id: idConsultorio }, consultorio);
    }

    /**
     * Busca un consultorio por su ID y lo elimina de la BD
     * @param idConsultorio 
     */
    async deleteSurgery(idConsultorio: string ): Promise<ConsultorioI> {
        return await this.consultorioModel.findOneAndDelete({ _id: idConsultorio });
    }

}
