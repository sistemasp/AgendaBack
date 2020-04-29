import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { RolI } from 'src/interfaces/rol.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RolService {

    constructor(@InjectModel('Rol') private readonly rolModel : Model<RolI>) {}

    /**
     * Muestra todos los rols de la BD
     */
    async showAllRols(): Promise<RolI[]> {
        return await this.rolModel.find();
    }

    /**
     * Busca solo un rol mediante su ID en la BD
     * @param idRol 
     */
    async findRolById(idRol: string): Promise<RolI> {
        return await this.rolModel.findOne( { _id: idRol } );
    }

    /**
     * Busca solo un rol mediante su numero de empleado en la BD
     * @param idRol 
     */
    async findRolByEmployeeNumber(employeeNumber: string): Promise<RolI> {
        return await this.rolModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo rol en la BD
     * @param rol 
     */
    async createRol(rol: RolI): Promise<RolI> {
        const newRol = new this.rolModel(rol);
        return await newRol.save();
    }

    /**
     * Busca un rol por su Id para poder actualizarlo
     * @param idRol 
     * @param rol 
     */
    async updateRol(idRol: string, rol: RolI): Promise<RolI> {
        return await this.rolModel.updateOne({ _id: idRol }, rol);
    }

    /**
     * Busca un rol por su ID y lo elimina de la BD
     * @param idRol 
     */
    async deleteRol(idRol: string ): Promise<RolI> {
        return await this.rolModel.findOneAndDelete({ _id: idRol });
    }

}
