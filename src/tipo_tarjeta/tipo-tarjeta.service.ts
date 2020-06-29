import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TipoTarjetaI } from 'src/interfaces/tipo-tarjeta.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TipoTarjetaService {

    constructor(@InjectModel('TipoTarjeta') private readonly tipoTarjetaModel : Model<TipoTarjetaI>) {}

    /**
     * Muestra todos los tipoTarjetas de la BD
     */
    async showAllTipoTarjetas(): Promise<TipoTarjetaI[]> {
        return await this.tipoTarjetaModel.find();
    }

    /**
     * Busca solo un tipoTarjeta mediante su ID en la BD
     * @param idTipoTarjeta 
     */
    async findTipoTarjetaById(idTipoTarjeta: string): Promise<TipoTarjetaI> {
        return await this.tipoTarjetaModel.findOne( { _id: idTipoTarjeta } );
    }

    /**
     * Busca solo un tipoTarjeta mediante su numero de empleado en la BD
     * @param idTipoTarjeta 
     */
    async findTipoTarjetaByEmployeeNumber(employeeNumber: string): Promise<TipoTarjetaI> {
        return await this.tipoTarjetaModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo tipoTarjeta en la BD
     * @param tipoTarjeta 
     */
    async createTipoTarjeta(tipoTarjeta: TipoTarjetaI): Promise<TipoTarjetaI> {
        const newTipoTarjeta = new this.tipoTarjetaModel(tipoTarjeta);
        return await newTipoTarjeta.save();
    }

    /**
     * Busca un tipoTarjeta por su Id para poder actualizarlo
     * @param idTipoTarjeta 
     * @param tipoTarjeta 
     */
    async updateTipoTarjeta(idTipoTarjeta: string, tipoTarjeta: TipoTarjetaI): Promise<TipoTarjetaI> {
        return await this.tipoTarjetaModel.updateOne({ _id: idTipoTarjeta }, tipoTarjeta);
    }

    /**
     * Busca un tipoTarjeta por su ID y lo elimina de la BD
     * @param idTipoTarjeta 
     */
    async deleteTipoTarjeta(idTipoTarjeta: string ): Promise<TipoTarjetaI> {
        return await this.tipoTarjetaModel.findOneAndDelete({ _id: idTipoTarjeta });
    }

}
