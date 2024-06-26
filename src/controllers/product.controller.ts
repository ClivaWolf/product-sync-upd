import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { ProductUseCase } from '../use-cases/product/product.use-case';
import { CreateProductDto, UpdateProductDto } from '../core/dtos/product.dto';

@Controller('api/product')
export class ProductController {
    constructor(
        private readonly productUseCase: ProductUseCase
    ) { }

    @Get()
    async getAll() {
        return this.productUseCase.getAll();
    }

    @Get(':id')
    async get(@Param('id') id: string) {
        return this.productUseCase.get(id);
    }

    @Post()
    async create(@Body() dto: CreateProductDto) {
        return this.productUseCase.create(dto);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() dto: UpdateProductDto
    ) {
        return this.productUseCase.update(id, dto);
    }
}