import { Injectable } from '@nestjs/common';
import { ProductQuantities } from '../../core/entities'
import { CreateProductQuantitiesDto, UpdateProductQuantitiesDto } from '../../core/dtos';

@Injectable()
export class ProductQuantitiesFactoryService {
    public create(dto: CreateProductQuantitiesDto): ProductQuantities {
        const newProductQuant = new ProductQuantities();

        newProductQuant.quantity = dto.quantity;
        newProductQuant.product = dto.product;
        
        return newProductQuant;
    }

    public update(dto: UpdateProductQuantitiesDto): ProductQuantities {
        const newProductQuant = new ProductQuantities();

        newProductQuant.quantity = dto.quantity;
        newProductQuant.product = dto.product;
        
        return newProductQuant;
    }
}