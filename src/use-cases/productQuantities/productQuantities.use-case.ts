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

    public async merge(productQuantitiesId: string, otherProductQuantitiesId: string, dto: UpdateProductQuantitiesDto): Promise<ProductQuantities> {
        this.get(productQuantitiesId)
        .then(productQuantities => {
            if (!productQuantities) {
                throw new Error('ProductQuantities not found');
            }
            this.get(otherProductQuantitiesId)
            .then(async otherProductQuantities => {
                if (!otherProductQuantities) {
                    throw new Error('Other ProductQuantities not found');
                }

                productQuantities.quantity += otherProductQuantities.quantity;
                await this.delete(otherProductQuantitiesId);
                return this.dataServices.productQuantities.update(productQuantitiesId, productQuantities);
            })
        })
        return null;
    }
}