import { Injectable } from '@nestjs/common';
import { IDataServices } from '../../core/abstracts/data-services.abstract';
import { ProductQuantitiesFactoryService } from './productQuantities-factory.service';
import { ProductQuantities } from 'src/core';
import { CreateProductQuantitiesDto, UpdateProductQuantitiesDto } from 'src/core/dtos';

@Injectable()
export class ProductQuantitiesUseCase {
    constructor(
        private readonly dataServices: IDataServices,
        private readonly productQuantitiesFactoryService: ProductQuantitiesFactoryService
    ) {}

    public getAll(): Promise<ProductQuantities[]> {
        return this.dataServices.productQuantities.getAll();
    }

    public get(productQuantitiesId: string): Promise<ProductQuantities> {
        return this.dataServices.productQuantities.get(productQuantitiesId);
    }

    public create(dto: CreateProductQuantitiesDto): Promise<ProductQuantities> {
        const productQuantities = this.productQuantitiesFactoryService.create(dto);
        return this.dataServices.productQuantities.create(productQuantities);
    }

    public update(productQuantitiesId: string, dto: UpdateProductQuantitiesDto): Promise<ProductQuantities> {
        const productQuantities = this.productQuantitiesFactoryService.update(dto);
        return this.dataServices.productQuantities.update(productQuantitiesId, productQuantities);
    }

    public delete(productQuantitiesId: string): Promise<ProductQuantities> {
        return this.dataServices.productQuantities.delete(productQuantitiesId);
    }

    public async merge(productQuantitiesId: string, otherProductQuantitiesId: string, dto: UpdateProductQuantitiesDto): Promise<ProductQuantities | Error> {
        try {
            const productQuantities = await this.get(productQuantitiesId);
            if (!productQuantities) {
                return new Error('ProductQuantities not found');
            }
            const otherProductQuantities = await this.get(otherProductQuantitiesId);
            if (!otherProductQuantities || otherProductQuantitiesId === productQuantitiesId) {
                return new Error('Other ProductQuantities not found');
            }
    
            productQuantities.quantity += otherProductQuantities.quantity;
            await this.delete(otherProductQuantitiesId);
            return await this.dataServices.productQuantities.update(productQuantitiesId, productQuantities);
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}