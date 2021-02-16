import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { SalaCirugiaI } from 'src/interfaces/sala-cirugia.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SalaCirugiaService {

    constructor(@InjectModel('SalaCirugia') private readonly salaCirugiaModel: Model<SalaCirugiaI>) { }

    /**
     * Muestra todos los salaCirugias de la BD
     */
    async showAllSalaCirugias(): Promise<SalaCirugiaI[]> {
        return await this.salaCirugiaModel.find()
            .populate('dermatologo')
            .populate('consulta')
            .populate('paciente');
    }

    /**
     * Busca solo un salaCirugia mediante su ID en la BD
     * @param idSalaCirugia 
     */
    async findSalaCirugiaById(idSalaCirugia: string): Promise<SalaCirugiaI> {
        return await this.salaCirugiaModel.findOne({ _id: idSalaCirugia })
            .populate('dermatologo')
            .populate('consulta')
            .populate('paciente');
    }

    /**
     * Busca solo un salaCirugia mediante su ID de la sucursal en la BD
     * @param sucursalId 
     */
    async findSalaCirugiaBySucursalId(sucursalId): Promise<SalaCirugiaI[]> {
        return await this.salaCirugiaModel.find(
            {
                sucursal: sucursalId
            })
            .populate('dermatologo')
            .populate('consulta')
            .populate('paciente');
    }

    /**
     * Busca solo un salaCirugia mediante su ID de la sucursal en la BD
     * @param sucursalId 
     */
    async findSalaCirugiaBySucursalIdWaitingList(sucursalId): Promise<SalaCirugiaI[]> {
        return await this.salaCirugiaModel.find(
            {
                sucursal: sucursalId,
                dermatologo: { $ne: undefined }
            })
            .populate('dermatologo')
            .populate('consulta')
            .populate('paciente');
    }

    /**
     * Busca solo un salaCirugia mediante su ID de la sucursal en la BD
     * @param sucursalId 
     */
    async findSalaCirugiaBySucursalIdAndFree(sucursalId): Promise<SalaCirugiaI[]> {
        return await this.salaCirugiaModel.find(
            {
                sucursal: sucursalId,
                disponible: true
            })
            .populate('consulta')
            .populate('paciente');
    }

    /**
     * Busca solo un salaCirugia mediante su ID de la sucursal en la BD
     * @param sucursalId 
     */
    async breakFreeSalaCirugiaByIdPaciente(salaCirugiaId): Promise<SalaCirugiaI[]> {
        return await this.salaCirugiaModel.updateOne(
            { _id: salaCirugiaId },
            {
                $unset: {
                    paciente: undefined,
                    cirugia: undefined,
                    tipo_servicio: undefined,
                    servicio: undefined,
                    dermatologo: undefined,
                },
                $set: {
                    disponible: true,
                }
            }
        );
    }

    /**
     * Busca solo un salaCirugia mediante su ID de la sucursal en la BD
     * @param sucursalId 
     */
    async breakFreeSalaCirugiaByIdDermatologo(salaCirugiaId: string): Promise<SalaCirugiaI[]> {
        return await this.salaCirugiaModel.updateOne({ _id: salaCirugiaId }, { $unset: { dermatologo: undefined } });
    }

    /**
     * Genera un nuevo salaCirugia en la BD
     * @param salaCirugia 
     */
    async createSalaCirugia(salaCirugia: SalaCirugiaI): Promise<SalaCirugiaI> {
        const newSalaCirugia = new this.salaCirugiaModel(salaCirugia);
        return await newSalaCirugia.save();
    }

    /**
     * Busca un salaCirugia por su Id para poder actualizarlo
     * @param idSalaCirugia 
     * @param salaCirugia 
     */
    async updateSalaCirugia(idSalaCirugia: string, salaCirugia: SalaCirugiaI): Promise<SalaCirugiaI> {
        return await this.salaCirugiaModel.updateOne({ _id: idSalaCirugia }, salaCirugia);
    }

    /**
     * Busca un salaCirugia por su ID y lo elimina de la BD
     * @param idSalaCirugia 
     */
    async deleteSalaCirugia(idSalaCirugia: string): Promise<SalaCirugiaI> {
        return await this.salaCirugiaModel.findOneAndDelete({ _id: idSalaCirugia });
    }

}
