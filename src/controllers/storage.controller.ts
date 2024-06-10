import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { StorageUseCase } from '../use-cases/storage/storage.use-case';
import { CreateStorageDto, UpdateStorageDto } from '../core/dtos';

@Controller('api/storage')
export class StorageController {
    constructor(
        private readonly storageUseCase: StorageUseCase
    ) { }

    @Get()
    async getAll() {
        return this.storageUseCase.getAll();
    }

    @Get(':id')
    async get(@Param('id') id: string) {
        return this.storageUseCase.get(id);
    }

    @Post()
    async create(@Body() dto: CreateStorageDto) {
        return this.storageUseCase.create(dto);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() dto: UpdateStorageDto
    ) {
        return this.storageUseCase.update(id, dto);
    }

    @Put(':id/add-product-quantity/:productQuantityId')
    async addProductQuantity(
        @Param('id') id: string,
        @Param('productQuantityId') productQuantityId: string,
    ) {
        return this.storageUseCase.addProductQuantity(id, productQuantityId);
    }

    @Put(':id/rebalance/:otherStorageId')
    async rebalance(
        @Param('id') id: string,
        @Param('otherStorageId') otherStorageId: string,
        @Body() dto: UpdateStorageDto
    ) {
        return this.storageUseCase.rebalance(id, otherStorageId, dto);
    }
}