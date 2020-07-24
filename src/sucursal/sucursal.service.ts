import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SucursalI } from 'src/interfaces/sucursal.interface';

@Injectable()
export class SucursalService {

    constructor(@InjectModel('Sucursal') private readonly sucursalModel : Model<SucursalI>) {}

    /**
     * Muestra todos los sucursals de la BD
     */
    async showAllOffices(): Promise<SucursalI[]> {
        return await this.sucursalModel.find().populate('servicios');
    }

    /**
     * Busca solo un sucursal mediante su ID en la BD
     * @param idSucursal 
     */
    async findOfficeById(idSucursal: string): Promise<SucursalI> {
        return await this.sucursalModel.findOne( { _id: idSucursal } ).populate('servicios');
    }

    /**
     * Genera un nuevo sucursal en la BD
     * @param sucursal 
     */
    async createOffice(sucursal: SucursalI): Promise<SucursalI> {
        const newOffice = new this.sucursalModel(sucursal);
        return await newOffice.save();
    }

    /**
     * Busca un sucursal por su Id para poder actualizarlo
     * @param idSucursal 
     * @param sucursal 
     */
    async updateOffice(idSucursal: string, sucursal: SucursalI): Promise<SucursalI> {
        return await this.sucursalModel.updateOne({ _id: idSucursal }, sucursal);
    }

    /**
     * Busca un sucursal por su ID y lo elimina de la BD
     * @param idSucursal
     */
    async deleteOffice(idSucursal: string ): Promise<SucursalI> {
        return await this.sucursalModel.findOneAndDelete({ _id: idSucursal });
    }

}
