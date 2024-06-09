import { Injectable } from '@nestjs/common';
import { ProductQuantities } from '../../core/entities'
import { CreateProductQuantitiesDto, UpdateProductQuantitiesDto } from '../../core/dtos';

@Injectable()
export class ProductQuantitiesFactoryService {
    public create(dto: CreateProductQuantitiesDto): ProductQuantities {
        const newProduct = new ProductQuantities();

        newProduct.quantity = dto.quantity;
        
        return newProduct;
    }

    public update(dto: UpdateProductQuantitiesDto): ProductQuantities {
        const newProduct = new ProductQuantities();

        
        // newProduct.name = dto.name;
        // newProduct.price = dto.price;
        // newProduct.description = dto.description;
        // //newProduct.productQuantitiesId = dto.productQuantitiesId;
        
        return newProduct;
    }
}