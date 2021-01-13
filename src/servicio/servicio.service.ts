import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ServicioI } from 'src/interfaces/servicio.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ServicioService {

    constructor(@InjectModel('Servicio') private readonly servicioModel: Model<ServicioI>) { }

    /**
     * Muestra todos los servicios de la BD
     */
    async showAllServices(): Promise<ServicioI[]> {
        return await this.servicioModel.find({ is_active: true }).sort('nombre');
    }

    /**
     * Busca solo un servicio mediante su ID en la BD
     * @param idServicio 
     */
    async findServiceById(idServicio: string): Promise<ServicioI> {
        return await this.servicioModel.findOne({ _id: idServicio });
    }

    /**
     * Genera un nuevo servicio en la BD
     * @param servicio 
     */
    async createService(servicio: ServicioI): Promise<ServicioI> {
        const newService = new this.servicioModel(servicio);
        return await newService.save();
    }

    /**
     * Busca un servicio por su Id para poder actualizarlo
     * @param idServicio 
     * @param servicio 
     */
    async updateService(idServicio: string, servicio: ServicioI): Promise<ServicioI> {
        return await this.servicioModel.updateOne({ _id: idServicio }, servicio);
    }

    /**
     * Busca un servicio por su ID y lo elimina de la BD
     * @param idServicio 
     */
    async deleteService(idServicio: string): Promise<ServicioI> {
        return await this.servicioModel.findOneAndDelete({ _id: idServicio });
    }

}
