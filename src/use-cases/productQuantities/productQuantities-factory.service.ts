import { Injectable } from '@nestjs/common';
import { ProductQuantities } from '../../core/entities'
import { CreateProductQuantitiesDto, UpdateProductQuantitiesDto } from '../../core/dtos';

@Injectable()
export class ProductQuantitiesFactoryService {
    public create(dto: CreateProductQuantitiesDto): ProductQuantities {
        const newProduct = new ProductQuantities();

        newProduct.quantity = dto.quantity;
        newProduct.product = dto.product;
        
        return newProduct;
    }

    public update(dto: UpdateProductQuantitiesDto): ProductQuantities {
        const newProduct = new ProductQuantities();

        newProduct.quantity = dto.quantity;
        newProduct.product = dto.product;
        
        return newProduct;
    }
}