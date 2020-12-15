import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoI } from 'src/interfaces/producto.interface';
import { ProductoDto } from 'src/dto/producto-dto';

@Controller('producto')
export class ProductoController {

    TAG = "ProductoController";

    constructor(private readonly productoService: ProductoService) {}

    @Get()
    showAllProductos() : Promise<ProductoI[]> {
        console.log(new Date(), this.TAG, "showAllProductos");
        return this.productoService.showAllProductos();
    }

    @Get(':id')
    findProductoById(@Param('id') idProducto: string): Promise<ProductoI> {
        console.log(new Date(), this.TAG, "findProductoById");
        return this.productoService.findProductoById(idProducto);
    }

    
    @Get('servicio/:idServicio')
    findProductosByServiicioId(@Param('idServicio') idServicio: string): Promise<ProductoI[]> {
        console.log(new Date(), this.TAG, "findProductosByServiicioId");
        return this.productoService.findProductosByServiicioId(idServicio);
    }

    @Post()
    createProducto(@Body() productoDto: ProductoDto): Promise<ProductoI> {
        console.log(new Date(), this.TAG, "createProducto");
        return this.productoService.createProducto(productoDto);
    }

    @Put(':id') 
    updateProducto(@Param('id') idProducto: string, @Body() productoDto: ProductoDto): Promise<ProductoI> {
        console.log(new Date(), this.TAG, "updateProducto");
        return this.productoService.updateProducto(idProducto, productoDto);
    }

    @Delete(':id')
    deleteProducto(@Param('id') idProducto: string): Promise<ProductoI> {
        console.log(new Date(), this.TAG, "deleteProducto");
        return this.productoService.deleteProducto(idProducto);
    }

}
