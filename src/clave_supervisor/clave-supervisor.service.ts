import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ClaveSupervisorI } from 'src/interfaces/clave-supervisor.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ClaveSupervisorService {

    constructor(@InjectModel('ClaveSupervisor') private readonly claveSupervisorModel : Model<ClaveSupervisorI>) {}

    /**
     * Muestra todos los claveSupervisors de la BD
     */
    async showAllClaveSupervisors(): Promise<ClaveSupervisorI[]> {
        return await this.claveSupervisorModel.find().sort('nombre');
    }

    /**
     * Busca solo un claveSupervisor mediante su ID en la BD
     * @param idClaveSupervisor 
     */
    async findClaveSupervisorById(idClaveSupervisor: string): Promise<ClaveSupervisorI> {
        return await this.claveSupervisorModel.findOne( { _id: idClaveSupervisor } );
    }

    /**
     * Busca solo un supervisor mediante su CLAVE en la BD
     * @param clave 
     */
    async findSupervisorByClave(clave: string): Promise<ClaveSupervisorI> {
        return await this.claveSupervisorModel.findOne( 
            { 
                clave: clave,
                is_active: true
            }
        );
    }

    /**
     * Busca solo un claveSupervisor mediante su numero de empleado en la BD
     * @param idClaveSupervisor 
     */
    async findClaveSupervisorByEmployeeNumber(employeeNumber: string): Promise<ClaveSupervisorI> {
        return await this.claveSupervisorModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo claveSupervisor en la BD
     * @param claveSupervisor 
     */
    async createClaveSupervisor(claveSupervisor: ClaveSupervisorI): Promise<ClaveSupervisorI> {
        const newClaveSupervisor = new this.claveSupervisorModel(claveSupervisor);
        return await newClaveSupervisor.save();
    }

    /**
     * Busca un claveSupervisor por su Id para poder actualizarlo
     * @param idClaveSupervisor 
     * @param claveSupervisor 
     */
    async updateClaveSupervisor(idClaveSupervisor: string, claveSupervisor: ClaveSupervisorI): Promise<ClaveSupervisorI> {
        return await this.claveSupervisorModel.updateOne({ _id: idClaveSupervisor }, claveSupervisor);
    }

    /**
     * Busca un claveSupervisor por su ID y lo elimina de la BD
     * @param idClaveSupervisor 
     */
    async deleteClaveSupervisor(idClaveSupervisor: string ): Promise<ClaveSupervisorI> {
        return await this.claveSupervisorModel.findOneAndDelete({ _id: idClaveSupervisor });
    }

}
