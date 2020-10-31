import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ConsultaI } from 'src/interfaces/consulta.interface';

@Injectable()
export class MedicosService {

    constructor(@InjectModel('Consulta') private readonly consultaModel : Model<ConsultaI>) {}

    /**
     * Muestra todo el historico de una persona buscando por su numero de telefono
     */
    async findHistoricByMedicId(medicoId: string): Promise<ConsultaI[]> {
        return await this.consultaModel.find( {medico: medicoId} ).sort('fecha_hora')
            .populate('paciente')
            .populate('sucursal')
            .populate('quien_agenda')
            .populate('promovendedor')
            .populate('quien_confirma')
            .populate('tipo_cita')
            .populate('status');
    }

}
