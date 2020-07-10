import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { FacturaI } from 'src/interfaces/factura.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FacturaService {

    constructor(@InjectModel('Factura') private readonly facturaModel : Model<FacturaI>) {}

    /**
     * Muestra todos los facturas de la BD
     */
    async showAllFacturas(): Promise<FacturaI[]> {
        return await this.facturaModel.find().sort('nombre');
    }

    /**
     * Busca solo un factura mediante su ID en la BD
     * @param idFactura 
     */
    async findFacturaById(idFactura: string): Promise<FacturaI> {
        return await this.facturaModel.findOne( { _id: idFactura } );
    }

    /**
     * Busca solo un factura mediante su numero de empleado en la BD
     * @param idFactura 
     */
    async findFacturaByEmployeeNumber(employeeNumber: string): Promise<FacturaI> {
        return await this.facturaModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Muestra todas las facturas de la BD que correspondan a una fecha y una sucursal
     */
    async findFacturasByRangeDateAndSucursal(startDateS, endDateS, sucursalId): Promise<FacturaI[]> {
        let startDate = new Date(startDateS);
        startDate.setHours(-5);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        let endDate = new Date(endDateS);
        endDate.setHours(18);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        console.log('startDate', startDate);
        console.log('endDate', endDate);
        console.log('sucursal', sucursalId);

        return await this.facturaModel.find( {fecha_hora: {$gte: startDate, $lte: endDate}, sucursal: sucursalId} ).sort('fecha_hora')
            .populate('paciente')
            .populate('razon_social')
            .populate('pago')
            .populate('metodo_pago')
            .populate('uso_cfdi');
    }

    /**
     * Genera un nuevo factura en la BD
     * @param factura 
     */
    async createFactura(factura: FacturaI): Promise<FacturaI> {
        const newFactura = new this.facturaModel(factura);
        return await newFactura.save();
    }

    /**
     * Busca un factura por su Id para poder actualizarlo
     * @param idFactura 
     * @param factura 
     */
    async updateFactura(idFactura: string, factura: FacturaI): Promise<FacturaI> {
        return await this.facturaModel.updateOne({ _id: idFactura }, factura);
    }

    /**
     * Busca un factura por su ID y lo elimina de la BD
     * @param idFactura 
     */
    async deleteFactura(idFactura: string ): Promise<FacturaI> {
        return await this.facturaModel.findOneAndDelete({ _id: idFactura });
    }

}
