import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PacienteI } from 'src/interfaces/paciente.interface';

@Injectable()
export class PacienteService {

    constructor(@InjectModel('Paciente') private readonly pacienteModel: Model<PacienteI>) { }

    /**
     * Muestra todos los pacientes de la BD
     */
    async showAllPatients(): Promise<PacienteI[]> {
        return await this.pacienteModel.find().populate('sexo');
    }

    /**
     * Muestra todos los pacientes de la BD
     */
    async remotePatients(per_page, page, search): Promise<{}> {
        const total = await this.pacienteModel.countDocuments({});
        const exp = `(?imxs)${search}(?-imxs)`;
        const patients = await this.pacienteModel.find(search !== '' ? {
            $or: [
                {nombres: { $regex: exp }},
                {apellidos: { $regex: exp  }},
                {telefono: { $regex: exp }},
                {fecha_nacimiento: { $regex: exp }}
            ]
        } : {}).populate('sexo')
            .limit(Number(per_page))
            .skip(Number(page - 1) * Number(per_page))
            .sort('-create_date')
            .select('nombres apellidos telefono sexo fecha_nacimiento');
        const response = {
            ad: {},
            data: patients,
            page: page,
            per_page: per_page,
            total: total,
            total_pages: Number(total / per_page),
        }
        return response;
    }

    /**
     * Busca solo un paciente mediante su ID en la BD
     * @param idPaciente 
     */
    async findPatientById(idPaciente: string): Promise<PacienteI> {
        return await this.pacienteModel.findOne({ _id: idPaciente }).populate('sexo');
    }

    /**
     * Busca solo un paciente mediante su TELEFONO en la BD
     * @param number 
     */
    async findPatientByPhoneNumber(number: string): Promise<PacienteI[]> {
        return await this.pacienteModel.find({ telefono: number }).populate('sexo');
    }

    /**
     * Genera un nuevo paciente en la BD
     * @param paciente 
     */
    async createPatient(paciente: PacienteI): Promise<PacienteI> {
        paciente.create_date = new Date();
        const newPatient = new this.pacienteModel(paciente);
        return await newPatient.save();
    }

    /**
     * Busca un paciente por su Id para poder actualizarlo
     * @param idPaciente 
     * @param paciente 
     */
    async updatePatient(idPaciente: string, paciente: PacienteI): Promise<PacienteI> {
        return await this.pacienteModel.updateOne({ _id: idPaciente }, paciente);
    }

    /**
     * Busca un paciente por su ID y lo elimina de la BD
     * @param idPaciente 
     */
    async deletePatient(idPaciente: string): Promise<PacienteI> {
        return await this.pacienteModel.findOneAndDelete({ _id: idPaciente });
    }

}
