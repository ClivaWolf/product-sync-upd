import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ProductQuantitiesUseCase } from '../use-cases/productQuantities/productQuantities.use-case';
import { CreateProductQuantitiesDto, UpdateProductQuantitiesDto } from '../core/dtos';

@Controller('api/product-quantities')
export class ProductQuantitiesController {
    constructor(
        private readonly productQuantitiesUseCase: ProductQuantitiesUseCase
    ) { }

    @Get()
    async getAll() {
        return this.productQuantitiesUseCase.getAll();
    }

    @Get(':id')
    async get(@Param('id') id: string) {
        return this.productQuantitiesUseCase.get(id);
    }

    @Post()
    async create(@Body() dto: CreateProductQuantitiesDto) {
        return this.productQuantitiesUseCase.create(dto);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() dto: UpdateProductQuantitiesDto
    ) {
        return this.productQuantitiesUseCase.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.productQuantitiesUseCase.delete(id);
    }

    @Put(':id/merge/:otherId')
    async merge(
        @Param('id') id: string,
        @Param('otherId') otherId: string,
        @Body() dto: UpdateProductQuantitiesDto
    ) {
        return this.productQuantitiesUseCase.merge(id, otherId, dto);
    }
}