import { Injectable } from '@nestjs/common';
import { Product } from 'src/core/entities/product';
import { IDataServices } from '../../core/abstracts/data-services.abstract';
import { CreateProductDTO, UpdateProductDTO } from '../../core/dtos/product.dto';
import { ProductFactoryService } from './product-factory.service';

@Injectable()
export class ProductUseCase {
    constructor(
        private readonly dataServices: IDataServices,
        private readonly productFactoryService: ProductFactoryService
    ) {}

    public getAll(): Promise<Product[]> {
        return this.dataServices.products.getAll();
    }

    public get(productId: string): Promise<Product> {
        return this.dataServices.products.get(productId);
    }

    public create(dto: CreateProductDTO): Promise<Product> {
        const product = this.productFactoryService.create(dto);
        return this.dataServices.products.create(product);
    }

    public update(productId: string, dto: UpdateProductDTO): Promise<Product> {
        const product = this.productFactoryService.update(dto);
        return this.dataServices.products.update(productId, product);
    }
}