import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { EmpleadoI } from 'src/interfaces/empleado.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EmpleadoService {

    constructor(@InjectModel('Empleado') private readonly empleadoModel : Model<EmpleadoI>) {}

    /**
     * Muestra todos los empleados de la BD
     */
    async showAllEmployees(): Promise<EmpleadoI[]> {
        return await this.empleadoModel.find()
            .populate('rol');
    }

    /**
     * Busca solo un empleado mediante su ID en la BD
     * @param idEmpleado 
     */
    async findEmployeeById(idEmpleado: string): Promise<EmpleadoI> {
        return await this.empleadoModel.findOne( { _id: idEmpleado } )
            .populate('rol');
    }

    /**
     * Busca solo un empleado mediante su numero de empleado en la BD
     * @param idEmpleado 
     */
    async findEmployeeByEmployeeNumber(employeeNumber: string): Promise<EmpleadoI> {
        return await this.empleadoModel.findOne( { numero_empleado: employeeNumber } )
            .populate('rol');
    }

    /**
     * Busca empleados que tienen un ROL en la BD
     * @param idRol 
     */
    async findEmployeesByRolId(idRol: string): Promise<EmpleadoI[]> {
        return await this.empleadoModel.find( { rol: idRol } )
            .populate('rol');
    }

    /**
     * Genera un nuevo empleado en la BD
     * @param empleado 
     */
    async createEmployee(empleado: EmpleadoI): Promise<EmpleadoI> {
        const newEmployee = new this.empleadoModel(empleado);
        return await newEmployee.save();
    }

    /**
     * Busca un empleado por su Id para poder actualizarlo
     * @param idEmpleado 
     * @param empleado 
     */
    async updateEmployee(idEmpleado: string, empleado: EmpleadoI): Promise<EmpleadoI> {
        return await this.empleadoModel.updateOne({ _id: idEmpleado }, empleado);
    }

    /**
     * Busca un empleado por su ID y lo elimina de la BD
     * @param idEmpleado 
     */
    async deleteEmployee(idEmpleado: string ): Promise<EmpleadoI> {
        return await this.empleadoModel.findOneAndDelete({ _id: idEmpleado });
    }

}
