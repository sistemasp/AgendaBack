import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PacienteI } from 'src/interfaces/paciente.interface';

@Injectable()
export class PacienteService {

    constructor(@InjectModel('Paciente') private readonly pacienteModel : Model<PacienteI>) {}

    /**
     * Muestra todos los pacientes de la BD
     */
    async showAllPatients(): Promise<PacienteI[]> {
        return await this.pacienteModel.find();
    }

    /**
     * Busca solo un paciente mediante su ID en la BD
     * @param idPaciente 
     */
    async findPatientById(idPaciente: string): Promise<PacienteI> {
        return await this.pacienteModel.findOne( { _id: idPaciente } );
    }

    /**
     * Busca solo un paciente mediante su TELEFONO en la BD
     * @param number 
     */
    async findPatientByPhoneNumber(number: string): Promise<PacienteI[]> {
        return await this.pacienteModel.find( { telefono: number } );
    }

    /**
     * Genera un nuevo paciente en la BD
     * @param paciente 
     */
    async createPatient(paciente: PacienteI): Promise<PacienteI> {
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
    async deletePatient(idPaciente: string ): Promise<PacienteI> {
        return await this.pacienteModel.findOneAndDelete({ _id: idPaciente });
    }

}
