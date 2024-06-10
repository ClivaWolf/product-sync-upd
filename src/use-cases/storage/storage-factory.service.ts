import { Injectable } from '@nestjs/common';
import { Storage } from '../../core/entities'
import { CreateStorageDto, UpdateStorageDto } from '../../core/dtos/Storage.dto';

@Injectable()
export class StorageFactoryService {
    public create(dto: CreateStorageDto): Storage {
        const newStorage = new Storage();

        newStorage.productQuantities = dto.productQuantities;
        return newStorage;
    }

    public update(dto: UpdateStorageDto): Storage {
        const newStorage = new Storage();

        newStorage.productQuantities = dto.productQuantities;
        //newStorage.StorageQuantitiesId = dto.StorageQuantitiesId;
        
        return newStorage;
    }
}