import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { RecepcionistaI } from 'src/interfaces/recepcionista.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RecepcionistaService {

    constructor(@InjectModel('Recepcionista') private readonly recepcionistaModel : Model<RecepcionistaI>) {}

    /**
     * Muestra todos los recepcionistas de la BD
     */
    async showAllRecepcionists(): Promise<RecepcionistaI[]> {
        return await this.recepcionistaModel.find();
    }

    /**
     * Busca solo un recepcionista mediante su ID en la BD
     * @param idRecepcionista 
     */
    async findRecepcionistById(idRecepcionista: string): Promise<RecepcionistaI> {
        return await this.recepcionistaModel.findOne( { _id: idRecepcionista } );
    }

    /**
     * Busca solo un recepcionista mediante su numero de empleado en la BD
     * @param idRecepcionista 
     */
    async findRecepcionistByEmployeeNumber(employeeNumber: string): Promise<RecepcionistaI> {
        return await this.recepcionistaModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo recepcionista en la BD
     * @param recepcionista 
     */
    async createRecepcionist(recepcionista: RecepcionistaI): Promise<RecepcionistaI> {
        const newRecepcionist = new this.recepcionistaModel(recepcionista);
        return await newRecepcionist.save();
    }

    /**
     * Busca un recepcionista por su Id para poder actualizarlo
     * @param idRecepcionista 
     * @param recepcionista 
     */
    async updateRecepcionist(idRecepcionista: string, recepcionista: RecepcionistaI): Promise<RecepcionistaI> {
        return await this.recepcionistaModel.updateOne({ _id: idRecepcionista }, recepcionista);
    }

    /**
     * Busca un recepcionista por su ID y lo elimina de la BD
     * @param idRecepcionista 
     */
    async deleteRecepcionist(idRecepcionista: string ): Promise<RecepcionistaI> {
        return await this.recepcionistaModel.findOneAndDelete({ _id: idRecepcionista });
    }

}
