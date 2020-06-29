import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BancoService } from './banco.service';
import { BancoI } from 'src/interfaces/banco.interface';
import { BancoDto } from 'src/dto/banco-dto';

@Controller('banco')
export class BancoController {

    TAG = "BancoController";

    constructor(private readonly bancoService: BancoService) {}

    @Get()
    showAllBancos() : Promise<BancoI[]> {
        console.log(this.TAG, "showAllBancos");
        return this.bancoService.showAllBancos();
    }

    @Get(':id')
    findBancoById(@Param('id') idBanco: string): Promise<BancoI> {
        console.log(this.TAG, "findBancoById");
        return this.bancoService.findBancoById(idBanco);
    }

    @Post()
    createBanco(@Body() bancoDto: BancoDto): Promise<BancoI> {
        console.log(this.TAG, "createBanco");
        return this.bancoService.createBanco(bancoDto);
    }

    @Put(':id') 
    updateBanco(@Param('id') idBanco: string, @Body() bancoDto: BancoDto): Promise<BancoI> {
        console.log(this.TAG, "updateBanco");
        return this.bancoService.updateBanco(idBanco, bancoDto);
    }

    @Delete(':id')
    deleteBanco(@Param('id') idBanco: string): Promise<BancoI> {
        console.log(this.TAG, "deleteBanco");
        return this.bancoService.deleteBanco(idBanco);
    }

}
