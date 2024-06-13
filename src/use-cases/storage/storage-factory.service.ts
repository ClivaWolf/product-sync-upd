import { Injectable } from '@nestjs/common';
import { Storage } from '../../core/entities'
import { CreateStorageDto, UpdateStorageDto } from '../../core/dtos/Storage.dto';

@Injectable()
export class StorageFactoryService {
    public create(dto: CreateStorageDto): Storage {
        const newStorage = new Storage();

        newStorage.productQuantities = dto.productQuantities;
        newStorage.latitude = dto.latitude;
        newStorage.longitude = dto.longitude;
        newStorage.tresholdDifference = dto.tresholdDifference;
        return newStorage;
    }

    public update(dto: UpdateStorageDto): Storage {
        const newStorage = new Storage();

        newStorage.productQuantities = dto.productQuantities;
        newStorage.latitude = dto.latitude;
        newStorage.longitude = dto.longitude;
        newStorage.tresholdDifference = dto.tresholdDifference;
        //newStorage.StorageQuantitiesId = dto.StorageQuantitiesId;
        
        return newStorage;
    }
}

// @Injectable()
// export class ProductFactoryService {
//     public create(dto: CreateProductDto): Product {
//         const newProduct = new Product();

//         newProduct.name = dto.name;
//         newProduct.price = dto.price;
//         newProduct.description = dto.description;
//         //newProduct.productQuantitiesId = dto.productQuantitiesId;
        
//         return newProduct;
//     }

//     public update(dto: UpdateProductDto): Product {
//         const newProduct = new Product();

//         newProduct.name = dto.name;
//         newProduct.price = dto.price;
//         newProduct.description = dto.description;
//         //newProduct.productQuantitiesId = dto.productQuantitiesId;
        
//         return newProduct;
//     }
// }