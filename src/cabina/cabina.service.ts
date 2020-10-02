import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CabinaI } from 'src/interfaces/cabina.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CabinaService {

    constructor(@InjectModel('Cabina') private readonly cabinaModel: Model<CabinaI>) { }

    /**
     * Muestra todos los cabinas de la BD
     */
    async showAllCabinas(): Promise<CabinaI[]> {
        return await this.cabinaModel.find()
            .populate('medico')
            .populate('consulta')
            .populate('paciente');
    }

    /**
     * Busca solo un cabina mediante su ID en la BD
     * @param idCabina 
     */
    async findCabinaById(idCabina: string): Promise<CabinaI> {
        return await this.cabinaModel.findOne({ _id: idCabina })
            .populate('medico')
            .populate('consulta')
            .populate('paciente');
    }

    /**
     * Busca solo un cabina mediante su ID de la sucursal en la BD
     * @param sucursalId 
     */
    async findCabinaBySucursalId(sucursalId: string): Promise<CabinaI[]> {
        return await this.cabinaModel.find(
            {
                sucursal: sucursalId
            })
            .populate('medico')
            .populate('consulta')
            .populate('paciente');
    }

    /**
     * Busca solo un cabina mediante su ID de la sucursal en la BD
     * @param sucursalId 
     */
    async findCabinaBySucursalIdWaitingList(sucursalId: string): Promise<CabinaI[]> {
        return await this.cabinaModel.find(
            {
                sucursal: sucursalId,
                medico: { $ne: undefined }
            })
            .populate('medico')
            .populate('consulta')
            .populate('paciente');
    }

    /**
     * Busca solo un cabina mediante su ID de la sucursal en la BD
     * @param sucursalId 
     */
    async findCabinaBySucursalIdAndFree(sucursalId: string): Promise<CabinaI[]> {
        return await this.cabinaModel.find(
            {
                sucursal: sucursalId,
                disponible: true
            })
            .populate('paciente');
    }

    /**
     * Busca solo un cabina mediante su ID de la sucursal en la BD
     * @param sucursalId 
     */
    async breakFreeCabinaByIdPaciente(cabinaId: string): Promise<CabinaI[]> {
        return await this.cabinaModel.updateOne({ _id: cabinaId }, {$unset: {paciente: undefined, consulta: undefined}});
    }

    /**
     * Busca solo un cabina mediante su ID de la sucursal en la BD
     * @param sucursalId 
     */
    async breakFreeCabinaByIdMedico(cabinaId: string): Promise<CabinaI[]> {
        return await this.cabinaModel.updateOne({ _id: cabinaId }, {$unset: {medico: undefined}});
    }

    /**
     * Genera un nuevo cabina en la BD
     * @param cabina 
     */
    async createCabina(cabina: CabinaI): Promise<CabinaI> {
        const newCabina = new this.cabinaModel(cabina);
        return await newCabina.save();
    }

    /**
     * Busca un cabina por su Id para poder actualizarlo
     * @param idCabina 
     * @param cabina 
     */
    async updateCabina(idCabina: string, cabina: CabinaI): Promise<CabinaI> {
        return await this.cabinaModel.updateOne({ _id: idCabina }, cabina);
    }

    /**
     * Busca un cabina por su ID y lo elimina de la BD
     * @param idCabina 
     */
    async deleteCabina(idCabina: string): Promise<CabinaI> {
        return await this.cabinaModel.findOneAndDelete({ _id: idCabina });
    }

}