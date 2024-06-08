import { Injectable } from '@nestjs/common';
import { Product } from '../../core/entities'
import { CreateProductDTO, UpdateProductDTO } from '../../core/dtos/product.dto';

@Injectable()
export class ProductFactoryService {
    public create(dto: CreateProductDTO): Product {
        const newProduct = new Product();

        newProduct.name = dto.name;
        newProduct.price = dto.price;
        newProduct.description = dto.description;
        newProduct.productQuantitiesId = dto.productQuantitiesId;
        
        return newProduct;
    }

    public update(dto: UpdateProductDTO): Product {
        const newProduct = new Product();

        newProduct.name = dto.name;
        newProduct.price = dto.price;
        newProduct.description = dto.description;
        newProduct.productQuantitiesId = dto.productQuantitiesId;
        
        return newProduct;
    }
}