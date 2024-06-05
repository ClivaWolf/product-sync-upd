import { Injectable } from '@nestjs/common';
import { Product, ProductQuantities } from 'src/core/entities'
import { CreateProductDTO, UpdateProductDTO } from 'src/core/dtos/product.dto';

@Injectable()
export class ProductFactoryService {
    public create(dto: CreateProductDTO): Product {
        const newProduct = new Product();

        newProduct.name = dto.name;
        newProduct.price = dto.price;
        newProduct.description = dto.description;
        newProduct.productQuantities = new ProductQuantities();
        
        return newProduct;
    }

    public update(dto: UpdateProductDTO): Product {
        const newProduct = new Product();

        newProduct.name = dto.name;
        newProduct.price = dto.price;
        newProduct.description = dto.description;
        newProduct.productQuantities = new ProductQuantities();
        
        return newProduct;
    }
}