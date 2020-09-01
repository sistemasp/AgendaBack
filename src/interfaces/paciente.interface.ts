import { SexoI } from "./sexo.interface";

export interface PacienteI {
    create_date: Date;
    nombres: string;
    apellidos: string;
    fecha_nacimiento: string;
    direccion: string;
    telefono: string;
    sexo: SexoI;
    ocupacion: string;
    alerta_medica: boolean;
    estado: string;
    municipio: string;
    colonia: string;
    cp: string;
}