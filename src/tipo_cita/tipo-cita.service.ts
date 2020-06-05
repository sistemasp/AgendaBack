import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TipoCitaI } from 'src/interfaces/tipo-cita.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TipoCitaService {

    constructor(@InjectModel('TipoCita') private readonly tipoCitaModel : Model<TipoCitaI>) {}

    /**
     * Muestra todos los tipoCitas de la BD
     */
    async showAllTipoCitas(): Promise<TipoCitaI[]> {
        return await this.tipoCitaModel.find();
    }

    /**
     * Busca solo un tipoCita mediante su ID en la BD
     * @param idTipoCita 
     */
    async findTipoCitaById(idTipoCita: string): Promise<TipoCitaI> {
        return await this.tipoCitaModel.findOne( { _id: idTipoCita } );
    }

    /**
     * Busca solo un tipoCita mediante su numero de empleado en la BD
     * @param idTipoCita 
     */
    async findTipoCitaByEmployeeNumber(employeeNumber: string): Promise<TipoCitaI> {
        return await this.tipoCitaModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo tipoCita en la BD
     * @param tipoCita 
     */
    async createTipoCita(tipoCita: TipoCitaI): Promise<TipoCitaI> {
        const newTipoCita = new this.tipoCitaModel(tipoCita);
        return await newTipoCita.save();
    }

    /**
     * Busca un tipoCita por su Id para poder actualizarlo
     * @param idTipoCita 
     * @param tipoCita 
     */
    async updateTipoCita(idTipoCita: string, tipoCita: TipoCitaI): Promise<TipoCitaI> {
        return await this.tipoCitaModel.updateOne({ _id: idTipoCita }, tipoCita);
    }

    /**
     * Busca un tipoCita por su ID y lo elimina de la BD
     * @param idTipoCita 
     */
    async deleteTipoCita(idTipoCita: string ): Promise<TipoCitaI> {
        return await this.tipoCitaModel.findOneAndDelete({ _id: idTipoCita });
    }

}
