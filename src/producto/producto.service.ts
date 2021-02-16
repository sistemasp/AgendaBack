import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ProductoI } from 'src/interfaces/producto.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductoService {

    constructor(@InjectModel('Producto') private readonly productoModel : Model<ProductoI>) {}

    /**
     * Muestra todos los productos de la BD
     */
    async showAllProductos(): Promise<ProductoI[]> {
        return await this.productoModel.find().sort('nombre');
    }

    /**
     * Busca solo un producto mediante su ID en la BD
     * @param idProducto 
     */
    async findProductoById(idProducto: string): Promise<ProductoI> {
        return await this.productoModel.findOne( { _id: idProducto } );
    }

    /**
     * Busca solo un producto mediante su ID en la BD
     * @param idServicio 
     */
    async findProductosByServiicioId(idServicio): Promise<ProductoI[]> {
        return await this.productoModel.find( { servicio: idServicio } );
    }


    /**
     * Busca solo un producto mediante su numero de empleado en la BD
     * @param idProducto 
     */
    async findProductoByEmployeeNumber(employeeNumber: string): Promise<ProductoI> {
        return await this.productoModel.findOne( { numero_empleado: employeeNumber } );
    }

    /**
     * Genera un nuevo producto en la BD
     * @param producto 
     */
    async createProducto(producto: ProductoI): Promise<ProductoI> {
        const newProducto = new this.productoModel(producto);
        return await newProducto.save();
    }

    /**
     * Busca un producto por su Id para poder actualizarlo
     * @param idProducto 
     * @param producto 
     */
    async updateProducto(idProducto: string, producto: ProductoI): Promise<ProductoI> {
        return await this.productoModel.updateOne({ _id: idProducto }, producto);
    }

    /**
     * Busca un producto por su ID y lo elimina de la BD
     * @param idProducto 
     */
    async deleteProducto(idProducto: string ): Promise<ProductoI> {
        return await this.productoModel.findOneAndDelete({ _id: idProducto });
    }

}
