import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BancoI } from 'src/interfaces/banco.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BancoService {

    constructor(@InjectModel('Banco') private readonly bancoModel : Model<BancoI>) {}

    /**
     * Muestra todos los bancos de la BD
     */
    async showAllBancos(): Promise<BancoI[]> {
        return await this.bancoModel.find().sort('nombre');
    }

    /**
     * Busca solo un banco mediante su ID en la BD
     * @param idBanco 
     */
    async findBancoById(idBanco: string): Promise<BancoI> {
        return await this.bancoModel.findOne( { _id: idBanco } );
    }

    /**
     * Busca solo un banco mediante su numero de empleado en la BD
     * @param idBanco 
     */
    async findBancoByEmployeeNumber(employeeNumber: string): Promise<BancoI> {
        return await this.bancoModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo banco en la BD
     * @param banco 
     */
    async createBanco(banco: BancoI): Promise<BancoI> {
        const newBanco = new this.bancoModel(banco);
        return await newBanco.save();
    }

    /**
     * Busca un banco por su Id para poder actualizarlo
     * @param idBanco 
     * @param banco 
     */
    async updateBanco(idBanco: string, banco: BancoI): Promise<BancoI> {
        return await this.bancoModel.updateOne({ _id: idBanco }, banco);
    }

    /**
     * Busca un banco por su ID y lo elimina de la BD
     * @param idBanco 
     */
    async deleteBanco(idBanco: string ): Promise<BancoI> {
        return await this.bancoModel.findOneAndDelete({ _id: idBanco });
    }

}
